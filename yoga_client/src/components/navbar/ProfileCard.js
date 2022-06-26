import React from "react";
import profileImg from "../main/images/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

const ProfileCard = () => {
    return (
        <div className="dropdown-item h-100 me-0">
            <div className="h-100">
                <div className="d-flex justify-content-center">
                    <img
                        className=" mx-auto rounded-circle"
                        src={profileImg}
                        alt="profile_picture"
                        height="80px"
                    />
                </div>
                <h1 className=" text-center h3 py-2">James</h1>
                <div className="d-flex flex-column align-items-start justify-content-around h-50">
                    <a className="nav-link p-0" href="">
                        Profile
                    </a>
                    <a className="nav-link p-0" href="">
                        Settings
                    </a>
                    <a className="nav-link p-0" href="">
                        Doante
                    </a>
                    <a href="/signout" style={{ textDecoration: "none" }}>
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
