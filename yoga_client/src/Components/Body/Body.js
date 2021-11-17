import IOTStates from "./IOTStates";
import WorkoutStates from "./WorkoutStates";

const Body = () => {
    return (
        <div className="container-fluid">
            <div className="row body-row">
                <div className="col-3 col-body-left ">
                    <div className="d-flex justify-content-start mt-5 ms-2">
                        <WorkoutStates />
                    </div>
                </div>
                <div className="col-6 col-body-middle my-4"></div>
                <div className="col-3 col-body-right my-4 ">
                    <div className="d-flex justify-content-center align-items-center h-100 ">
                        <IOTStates />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
