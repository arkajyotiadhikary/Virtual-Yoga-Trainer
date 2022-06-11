import ProfileCard from "./ProfileCard";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-holder d-flex align-items-center w-100">
            <nav className="navbar navbar-expand-lg p-0 w-100">
                <div className="d-flex justify-content-between w-100">
                    <div className="ms-5 brand-name-background">
                        <h1 className="brand-name h5 mb-0 p-2">
                            Virtual Trainer
                        </h1>
                    </div>
                    <div className="dropdown ">
                        <div
                            href="#"
                            id="dropdownMenuLink"
                            data-bs-toggle="dropdown"
                            aria-expanded="true"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className="dropdown-menu dropdown-menu-end p-0">
                            <ProfileCard />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
