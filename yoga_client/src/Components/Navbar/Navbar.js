import ProfileCard from "./ProfileCard";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-4">
            <div className="d-flex align-items-center justify-content-between w-100">
                <h1 className="brand-name mb-0 ms-5 h5 bg-white">
                    Virtual Trainer
                </h1>
                <ProfileCard />
            </div>
        </nav>
    );
};
export default Navbar;
