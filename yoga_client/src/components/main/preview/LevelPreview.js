import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import BegginerImage from "../images/Begginer.png";
import IntermidiateImage from "../images/iNTERMIDIATE.svg";
import AdvanceImage from "../images/ADVANCE.svg";

const LevelPreview = () => {
    return (
        <div className="level-preview">
            <h2>Choose Your Plan</h2>
            <div
                id="carouselExampleIndicators"
                className="carousel slide  d-flex justify-content-center"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="controll">
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <FontAwesomeIcon
                                className="pe-5"
                                style={{ color: "#1d3557", height: "1.5rem" }}
                                icon={faAngleLeft}
                            />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <FontAwesomeIcon
                                className="ps-5"
                                style={{ color: "#1d3557", height: "1.5rem" }}
                                icon={faAngleRight}
                            />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-item active">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button
                                    className="level-selector btn"
                                    onClick={() =>
                                        window.open(
                                            "http://localhost:3000/workout",
                                            "_self"
                                        )
                                    }
                                >
                                    Beginner
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                style={{ objectFit: "cover" }}
                                src={BegginerImage}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button
                                    className="level-selector btn"
                                    onClick={() =>
                                        window.open(
                                            "http://localhost:3000/workout",
                                            "_self"
                                        )
                                    }
                                >
                                    Intermidiate
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                width={"20rem"}
                                // style={{ objectFit: "cover" }}
                                src={IntermidiateImage}
                                className="d-block w-100 p-5"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button
                                    className="level-selector btn"
                                    onClick={() =>
                                        window.open(
                                            "http://localhost:3000/workout",
                                            "_self"
                                        )
                                    }
                                >
                                    Expert
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                // style={{ objectFit: "cover" }}
                                src={AdvanceImage}
                                className="d-block w-100 p-5"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelPreview;
