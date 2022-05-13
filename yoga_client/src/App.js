import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {} from "react-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// TODO when `Link` will be used remove the above line and uncomment the below line
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
// component
import WorkoutWindow from "./components/workout_window/WorkoutWindow";
import Yoga from "./components/workout_window/Yoga";
import Main from "./components/main/Main";
import Signup from "./components/sign-up/Signup";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SignIn from "./components/sign-in/Signin";
import SignOut from "./components/sign-out/Signout";

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
                        element={<Yoga />}
                    />
                    <Route
                        path="/signup"
                        caseSensitive={false}
                        element={<Signup />}
                    />
                    <Route
                        path="/signin"
                        caseSensitive={false}
                        element={<SignIn />}
                    />
                    <Route
                        path="/signout"
                        caseSensitive={false}
                        element={<SignOut />}
                    />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
