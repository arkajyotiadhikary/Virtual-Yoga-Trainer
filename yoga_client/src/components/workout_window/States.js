import React from "react";

const States = (props) => {
    const { yogaTimer, point } = props;
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
                    <span>{yogaTimer}s</span>
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
                    <span>{point}p</span>
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
                    <span>40b</span>
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
                    <span>80c</span>
                </div>
            </div>
        </div>
    );
};

export default States;
