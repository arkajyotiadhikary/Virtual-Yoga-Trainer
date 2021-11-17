import IOTStates from "./IOTStates";
import WorkoutStates from "./WorkoutStates";

const Body = () => {
    return (
        <div className="container-fluid">
            <div className="row body-row">
                <div className="col-3 col-body-left ">
                    <div className="d-flex justify-content-start mt-4 ms-2">
                        <WorkoutStates />
                    </div>
                    <div className="tut-pos my-4 shadow">
                        <img
                            className="img img-thumbnail mb-4 h-100 w-100"
                            src="https://media.giphy.com/media/QJRiHZDRUW02Q/giphy.gif"
                            alt="ref-gif"
                        />
                    </div>
                </div>
                <div className="col-6 col-body-middle my-3 shadow"></div>
                <div className="col-3 col-body-right my-3 ">
                    <div className="d-flex justify-content-center align-items-center h-100 ">
                        <IOTStates />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
