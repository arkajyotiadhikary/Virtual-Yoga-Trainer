import React from "react";

const BodyFocusPreview = () => {
    return (
        <div>
            <h2 className="my-4 fw-bold">Body Focus</h2>
            <div className="d-flex column-flex justify-content-center w-100">
                <div className="chest">
                    <p className="title">Chest</p>
                    <p className="bodyfocus-para text-start">
                        A bigger chest through yoga gives you the strength for
                        handstands, more push-ups, a better bench press, and a
                        stronger overall upper body
                    </p>
                </div>
                <div className="belly">
                    <p className="title">Belly</p>
                    <p className="bodyfocus-para text-start">
                        Practicing yoga may also help you develop muscle tone
                        and improve your metabolism.
                    </p>
                </div>
                <div className="leg">
                    <p className="title">Leg</p>
                    <p className="bodyfocus-para text-start">
                        Standing yoga poses will build and tone the muscles in
                        your legs, including your quadriceps, hamstrings, and
                        calves
                    </p>
                </div>
                <div className="arm">
                    <p className="title">Arm</p>
                    <p className="bodyfocus-para text-start">
                        Yoga is an incredible way to build upper body strength
                        and tone and sculpt all the muscles in the arms WITHOUT
                        bulking up.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default BodyFocusPreview;
