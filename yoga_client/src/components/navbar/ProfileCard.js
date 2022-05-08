/* eslint-disable jsx-a11y/anchor-is-valid */
const ProfileCard = () => {
    return (
        <div className="dropdown profile-card">
            <a
                className="btn btn-secondary bg-transparent border-0"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="true"
            >
                <img
                    className="img px-2 "
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    height="25px"
                    alt=""
                />
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
                        <a href="/signout">
                            Logout
                        </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProfileCard;
