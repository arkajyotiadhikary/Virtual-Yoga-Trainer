import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileCard = () => {
    return (
        <div className="dropdown profile-card">
            <a
                className="btn"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="true"
            >
                <FontAwesomeIcon icon={faUser} />
            </a>
            <div
                className="dropdown-menu dropdown-menu-end p-0"
                data-bs-popper="none"
            >
                <div className="dropdown-item card p-0">
                    <div className="card-header">
                        <div className="d-flex justify-content-center">
                            <img
                                className="mx-auto  "
                                src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                                alt="profile_picture"
                                height="80px"
                            />
                        </div>
                        <h1 className="card-title text-center h3">Arka</h1>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item bg-transparent border-0">
                                <a className="nav-link p-0" href="">
                                    Profile
                                </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                                <a className="nav-link p-0">Report</a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                                <a className="nav-link p-0">Change Password</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer bg-transparent">
                        <button class="btn btn-sm btn-outline-primary text-end">
                            <a href="/signout">Logout</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
