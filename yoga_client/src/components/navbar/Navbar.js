import ProfileCard from "./ProfileCard";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mt-4 p-0">
            <div className="d-flex justify-content-between w-100">
                <div className="mb-0 ms-5  bg-primary brand-name-background">
                    <h1 className="brand-name h5 mb-0 p-2">Virtual Trainer</h1>
                </div>
                <ProfileCard />
            </div>
        </nav>
    );
};
export default Navbar;
