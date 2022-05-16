import React from "react";

const States = () => {
    return (
        <div className="states d-flex flex-column justify-content-around align-items-end w-100 h-100 me-5">
            <div
                className="d-flex justify-content-center align-items-center out-state"
                id="progress"
            >
                <div
                    className="state d-flex justify-content-center align-items-center"
                    id="progress"
                >
                    <span>40%</span>
                </div>
            </div>
            <div
                className="d-flex justify-content-center align-items-center out-state"
                id="heart-beat"
            >
                <div
                    className="state d-flex justify-content-center align-items-center"
                    id="heart-beat"
                >
                    <span>40%</span>
                </div>
            </div>
            <div
                className="d-flex justify-content-center align-items-center out-state"
                id="calori-burn"
            >
                <div
                    className="state d-flex justify-content-center align-items-center"
                    id="calori-burn"
                >
                    <span>40%</span>
                </div>
            </div>
            <div
                className="d-flex justify-content-center align-items-center out-state"
                id="time-spend"
            >
                <div
                    className="state d-flex justify-content-center align-items-center"
                    id="time-spend"
                >
                    <span>40%</span>
                </div>
            </div>
            <div
                className="d-flex justify-content-center align-items-center out-state"
                id="accuracy"
            >
                <div
                    className="state d-flex justify-content-center align-items-center"
                    id="accuracy"
                >
                    <span>40%</span>
                </div>
            </div>
        </div>
    );
};

export default States;