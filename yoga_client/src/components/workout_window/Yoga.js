import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import React, { useRef, useState, useEffect } from "react";
// import backend from "@tensorflow/tfjs-backend-webgl";
import Webcam from "react-webcam";
import { count } from "../../utils/music";
import "./Yoga.css";
import { tutorials } from "../../utils/data/index";
import { poseInstructions } from "../../utils/data";
// import Instructions from "../../components/Instrctions/Instructions";
import tree_pose from "./images/tree-pose.png";

// import DropDown from "../../components/DropDown/DropDown";
import { poseImages } from "../../utils/pose_images";
import { POINTS, keypointConnections } from "../../utils/data";
import { drawPoint, drawSegment } from "../../utils/helper";
import States from "./States";
import model_classification from "../../model.json";

let skeletonColor = "rgb(255,255,255)";
let poseList = [
    "Tree",
    "Chair",
    "Cobra",
    "Warrior",
    "Dog",
    "Shoulderstand",
    "Traingle",
];

let interval;

// flag variable is used to help capture the time when AI just detect
// the pose as correct(probability more than threshold)
let flag = false;

function Yoga() {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    const [startingTime, setStartingTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [poseTime, setPoseTime] = useState(0);
    const [bestPerform, setBestPerform] = useState(0);
    const [currentPose, setCurrentPose] = useState("Tree");
    const [isStartPose, setIsStartPose] = useState(false);

    useEffect(() => {
        const timeDiff = (currentTime - startingTime) / 1000;
        if (flag) {
            setPoseTime(timeDiff);
        }
        if ((currentTime - startingTime) / 1000 > bestPerform) {
            setBestPerform(timeDiff);
        }

        console.log(bestPerform);
    }, [currentTime]);

    useEffect(() => {
        setCurrentTime(0);
        setPoseTime(0);
        setBestPerform(0);
    }, [currentPose]);

    const CLASS_NO = {
        Chair: 0,
        Cobra: 1,
        Dog: 2,
        No_Pose: 3,
        Shoulderstand: 4,
        Traingle: 5,
        Tree: 6,
        Warrior: 7,
    };

    const get_center_point = (landmarks, left_bodypart, right_bodypart) => {
        let left = tf.gather(landmarks, left_bodypart, 1);
        let right = tf.gather(landmarks, right_bodypart, 1);
        const center = tf.add(tf.mul(left, 0.5), tf.mul(right, 0.5));
        return center;
    };

    const get_pose_size = (landmarks, torso_size_multiplier = 2.5) => {
        let hips_center = get_center_point(
            landmarks,
            POINTS.LEFT_HIP,
            POINTS.RIGHT_HIP
        );
        let shoulders_center = get_center_point(
            landmarks,
            POINTS.LEFT_SHOULDER,
            POINTS.RIGHT_SHOULDER
        );
        let torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
        let pose_center_new = get_center_point(
            landmarks,
            POINTS.LEFT_HIP,
            POINTS.RIGHT_HIP
        );
        pose_center_new = tf.expandDims(pose_center_new, 1);

        pose_center_new = tf.broadcastTo(pose_center_new, [1, 17, 2]);
        // return: shape(17,2)
        let d = tf.gather(tf.sub(landmarks, pose_center_new), 0, 0);
        let max_dist = tf.max(tf.norm(d, "euclidean", 0));

        // normalize scale
        let pose_size = tf.maximum(
            tf.mul(torso_size, torso_size_multiplier),
            max_dist
        );
        return pose_size;
    };

    const normalize_pose_landmarks = (landmarks) => {
        let pose_center = get_center_point(
            landmarks,
            POINTS.LEFT_HIP,
            POINTS.RIGHT_HIP
        );
        pose_center = tf.expandDims(pose_center, 1);
        pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
        landmarks = tf.sub(landmarks, pose_center);

        let pose_size = get_pose_size(landmarks);
        landmarks = tf.div(landmarks, pose_size);
        return landmarks;
    };

    const landmarks_to_embedding = (landmarks) => {
        // normalize landmarks 2D
        landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
        let embedding = tf.reshape(landmarks, [1, 34]);
        return embedding;
    };

    const runMovenet = async () => {
        const detectorConfig = {
            modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
        };
        const detector = await poseDetection.createDetector(
            poseDetection.SupportedModels.MoveNet,
            detectorConfig
        );
        const poseClassifier = await tf.loadLayersModel(
            "https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
        );
        const countAudio = new Audio(count);
        countAudio.loop = true;
        interval = setInterval(() => {
            detectPose(detector, poseClassifier, countAudio);
        }, 100);
    };

    const detectPose = async (detector, poseClassifier, countAudio) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            let notDetected = 0;
            const video = webcamRef.current.video;
            const pose = await detector.estimatePoses(video);
            const ctx = canvasRef.current.getContext("2d");
            ctx.clearRect(
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
            try {
                const keypoints = pose[0].keypoints;
                let input = keypoints.map((keypoint) => {
                    if (keypoint.score > 0.4) {
                        if (
                            !(
                                keypoint.name === "left_eye" ||
                                keypoint.name === "right_eye"
                            )
                        ) {
                            drawPoint(
                                ctx,
                                keypoint.x,
                                keypoint.y,
                                8,
                                "rgb(255,255,255)"
                            );
                            let connections =
                                keypointConnections[keypoint.name];
                            try {
                                connections.forEach((connection) => {
                                    let conName = connection.toUpperCase();
                                    drawSegment(
                                        ctx,
                                        [keypoint.x, keypoint.y],
                                        [
                                            keypoints[POINTS[conName]].x,
                                            keypoints[POINTS[conName]].y,
                                        ],
                                        skeletonColor
                                    );
                                });
                            } catch (err) {}
                        }
                    } else {
                        notDetected += 1;
                    }
                    return [keypoint.x, keypoint.y];
                });
                if (notDetected > 4) {
                    skeletonColor = "rgb(255,255,255)";
                    return;
                }
                const processedInput = landmarks_to_embedding(input);
                const classification = poseClassifier.predict(processedInput);

                classification.array().then((data) => {
                    const classNo = CLASS_NO[currentPose];
                    console.log(data[0][classNo]);
                    if (data[0][classNo] > 0.97) {
                        if (!flag) {
                            countAudio.play();
                            setStartingTime(new Date(Date()).getTime());
                            flag = true;
                        }
                        setCurrentTime(new Date(Date()).getTime());
                        skeletonColor = "rgb(0,255,0)";
                    } else {
                        flag = false;
                        skeletonColor = "rgb(255,255,255)";
                        countAudio.pause();
                        countAudio.currentTime = 0;
                    }
                });
            } catch (err) {
                console.log(err);
            }
        }
    };

    const startYoga = () => {
        setIsStartPose(true);
        runMovenet();
        webcamRef.current.video.videoHeight = 580;
        webcamRef.current.video.videoWidth = 400;
    };

    const stopPose = () => {
        setIsStartPose(false);
        clearInterval(interval);
    };

    if (isStartPose) {
        return (
            <div className="yoga-body" style={{ backgroundColor: "#f1faee" }}>
                <div className="yoga-container w-100 d-flex justify-content-around align-items-center">
                    <div className="yoga-image">
                        <img
                            src={tree_pose}
                            alt=""
                            style={{
                                width: "580px",
                                height: "600px",
                                objectFit: "cover",
                            }}
                        />
                    </div>

                    <div className="cam d-flex justify-content-center align-items-center">
                        <Webcam
                            width="580"
                            height="400px"
                            id="webcam"
                            ref={webcamRef}
                        />
                        <canvas
                            ref={canvasRef}
                            id="my-canvas"
                            width="580px"
                            height="400px"
                        />
                        <States />
                        <button
                            onClick={stopPose}
                            className="btn text-white"
                            style={{
                                top: 438,
                                backgroundColor: "#1d3557",
                                marginRight: "50",
                                position: "absolute",
                                zIndex: 100,
                                fontWeight: 600,
                            }}
                        >
                            Stop Pose
                        </button>
                    </div>
                </div>
                <div className="d-flex  justify-content-center w-100">
                    <div className="poses d-flex justify-content-around  my-5">
                        <div className="next-pose selected">
                            <div className="next-pose-content d-flex justify-content-around align-items-center h-100">
                                <div className="image bg-white d-flex align-items-center justify-content-center">
                                    <img className="" src={tree_pose} alt="" />
                                </div>
                                <div className="name d-flex align-items-center justify-content-center h-100">
                                    <p className="m-0">Tree</p>
                                </div>
                            </div>
                        </div>
                        <div className="next-pose">
                            <div className="next-pose-content d-flex justify-content-around align-items-center h-100">
                                <div className="image bg-white d-flex align-items-center justify-content-center">
                                    <img className="" src={tree_pose} alt="" />
                                </div>
                                <div className="name d-flex align-items-center justify-content-center h-100">
                                    <p className="m-0">Tree</p>
                                </div>
                            </div>
                        </div>
                        <div className="next-pose">
                            <div className="next-pose-content d-flex justify-content-around align-items-center h-100">
                                <div className="image bg-white d-flex align-items-center justify-content-center">
                                    <img className="" src={tree_pose} alt="" />
                                </div>
                                <div className="name d-flex align-items-center justify-content-center h-100">
                                    <p className="m-0">Tree</p>
                                </div>
                            </div>
                        </div>
                        <div className="next-pose">
                            <div className="next-pose-content d-flex justify-content-around align-items-center h-100">
                                <div className="image bg-white d-flex align-items-center justify-content-center">
                                    <img className="" src={tree_pose} alt="" />
                                </div>
                                <div className="name d-flex align-items-center justify-content-center h-100">
                                    <p className="m-0">Tree</p>
                                </div>
                            </div>
                        </div>
                        <div className="next-pose">
                            <div className="next-pose-content d-flex justify-content-around align-items-center h-100">
                                <div className="image bg-white d-flex align-items-center justify-content-center">
                                    <img className="" src={tree_pose} alt="" />
                                </div>
                                <div className="name d-flex align-items-center justify-content-center h-100">
                                    <p className="m-0">Tree</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pose-name mt-4 ">
                    <h2 className="fw-bold">{currentPose} Pose</h2>
                </div>
                <div className="instructions text-start mx-5 px-5">
                    <h3>Instruction</h3>
                    <ul>
                        {poseInstructions[currentPose].map((i) => (
                            <li className="m-3" key={i}>
                                {i}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div
            className="yoga-container w-100 d-flex justify-content-center"
            style={{ height: "70vh" }}
        >
            <div className="text-start pt-5">
                <h1>Tutorial</h1>
                {tutorials.map((i) => (
                    <p key={i}>{i}</p>
                ))}
            </div>
            <button
                onClick={startYoga}
                className="btn text-white"
                style={{
                    backgroundColor: "#1d3557",
                    top: 438,
                    marginRight: "50",
                    position: "absolute",
                    zIndex: 100,
                }}
            >
                Start Pose
            </button>
        </div>
    );
}

export default Yoga;
