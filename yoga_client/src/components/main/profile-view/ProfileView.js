import "./ProfileView.css";
import Badges from "./Badges";
import profilePic from "../images/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

const ProfileView = () => {
    return (
        <div className="profile-card-preview d-flex flex-column align-items-center rounded border mx-5 text-white">
            <img
                className="profile-pic mg-thumbnail bg-white"
                src={profilePic}
                alt=""
            />
            <div>
                <h2 className="fw-bold mt-1">James</h2>
                <p>Code</p>
            </div>
            <Badges />
        </div>
    );
};

export default ProfileView;
