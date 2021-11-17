import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import PoseDetect from "./Components/PoseDetect";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div className="App h-100">
            <Navbar />
            <PoseDetect />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
