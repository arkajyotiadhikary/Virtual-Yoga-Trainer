import "./ProfileView.css";
import Badges from "./Badges";

const ProfileView = () => {
    return (
        <div className="d-flex flex-column ">
            <div className="profile-pic">
                <img
                    className="img-thumbnail rounded-circle"
                    src="https://img-01.stickers.cloud/packs/0e1824ba-545e-4bff-9078-572a1047556e/webp/b2e4202f-4f31-475e-a5a0-a75ca3dc01a6.webp"
                    alt=""
                />
            </div>
            <div>
                <h2>Arka</h2>
                <p>Code</p>
            </div>
            <Badges />
        </div>
    );
};

export default ProfileView;
