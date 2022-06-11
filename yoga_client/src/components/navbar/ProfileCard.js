const ProfileCard = () => {
    return (
        <div className="dropdown-item p-0 h-100">
            <div className="h-100">
                <div className="d-flex justify-content-center">
                    <img
                        className=" mx-auto rounded-circle"
                        src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                        alt="profile_picture"
                        height="80px"
                    />
                </div>
                <h1 className=" text-center h3 py-2">Arka</h1>
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
