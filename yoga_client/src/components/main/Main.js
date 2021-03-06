import ProfileView from "./profile-view/ProfileView";
import "chart.js/auto";
import LevelPreview from "./preview/LevelPreview";
import BodyFocusPreview from "./preview/BodyFocusPreview";
import DailyChallangePreview from "./preview/DailyChallangePreview";
import CaloriChart from "./calori-chart/CaloriChart";

import "./Main.css";

const Main = () => {
    return (
        <div>
            <div className="container-fluid main-container">
                <div className="row py-5">
                    <div className="col-md-3 pe-0">
                        <ProfileView />
                    </div>
                    <div className="col-md-9 ps-0">
                        <CaloriChart />
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    <LevelPreview />
                </div>
                <div className="row justify-content-center py-5">
                    <DailyChallangePreview />
                </div>
                <div className="row justify-content-center py-5">
                    <BodyFocusPreview />
                </div>
            </div>
        </div>
    );
};

export default Main;
