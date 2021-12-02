import PoseDetect from "./PoseDetect";
import Navbar from "../navbar/Navbar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

const WorkoutWindow = () => {
    return (
        <div>
            <Navbar />
            <PoseDetect />
            <Body />
            <Footer />
        </div>
    );
};
export default WorkoutWindow;
