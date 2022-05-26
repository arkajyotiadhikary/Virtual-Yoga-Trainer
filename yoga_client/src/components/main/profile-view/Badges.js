import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Badges = () => {
    return (
        <div className="badges ">
            <p className="">Badges</p>
            <div className="d-flex justify-content-center">
                <div className="badge-container mb-2 p-2 ">
                    <div className="row justify-content-start">
                        <div className="col-3 badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-3 badge-col">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="col-3 badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3 badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faShield} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="col-3  badge-col">
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Badges;
