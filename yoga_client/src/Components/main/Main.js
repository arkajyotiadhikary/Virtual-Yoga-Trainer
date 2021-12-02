import Navbar from "../navbar/Navbar";
const Main = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">Profile Card</div>
                    <div className="col-md-9">Acitiry chart</div>
                </div>
            </div>
        </div>
    );
};

export default Main;
