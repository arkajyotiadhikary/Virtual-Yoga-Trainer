import "./ProfileView.css";
import Badges from "./Badges";

const ProfileView = () => {
    return (
        <div className="profile-card-preview d-flex flex-column align-items-center rounded border mx-5 text-white">
            <img
                className="profile-pic mg-thumbnail bg-white"
                src="https://img-01.stickers.cloud/packs/0e1824ba-545e-4bff-9078-572a1047556e/webp/b2e4202f-4f31-475e-a5a0-a75ca3dc01a6.webp"
                alt=""
            />
            <div>
                <h2 className="fw-bold">Arka</h2>
                <p>Code</p>
            </div>
            <Badges />
        </div>
    );
};

export default ProfileView;
