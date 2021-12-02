import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {} from "react-router";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
// componets
import WorkoutWindow from "./components/workout_window/WorkoutWindow";
import Main from "./components/main/Main";
import Signup from "./components/Sign-up/Signup";

function App() {
    return (
        <div className="App h-100">
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
        </div>
    );
}

export default App;
