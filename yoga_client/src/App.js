import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import { } from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// TODO when `Link` will be used remove the above line and uncomment the below line
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
// component
import WorkoutWindow from "./components/workout_window/WorkoutWindow";
import Main from "./components/main/Main";
import Signup from "./components/sign-up/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <div className="App h-100">
            <Navbar />
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        caseSensitive={false}
                        element={<Main />}
                    />
                    <Route
                        path="/workout"
                        caseSensitive={false}
                        element={<WorkoutWindow />}
                    />
                    <Route
                        path="/signup"
                        caseSensitive={false}
                        element={<Signup />}
                    />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
