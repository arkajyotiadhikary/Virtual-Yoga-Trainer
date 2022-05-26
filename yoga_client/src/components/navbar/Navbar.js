import ProfileCard from "./ProfileCard";
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
                    <ProfileCard />
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
