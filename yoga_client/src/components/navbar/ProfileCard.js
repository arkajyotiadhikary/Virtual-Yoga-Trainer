import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
    return (
        <div className="dropdown profile-card">
            <div
                className="btn"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="true"
            >
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="dropdown-menu dropdown-menu-end p-0">
                <div className="dropdown-item card p-0 h-100">
                    <div className="card-header h-100">
                        <div className="d-flex justify-content-center">
                            <img
                                className=" mx-auto rounded-circle"
                                src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                                alt="profile_picture"
                                height="80px"
                            />
                        </div>
                        <h1 className="card-title text-center h3 py-2">Arka</h1>
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
                            <a
                                href="/signout"
                                style={{ textDecoration: "none" }}
                            >
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
