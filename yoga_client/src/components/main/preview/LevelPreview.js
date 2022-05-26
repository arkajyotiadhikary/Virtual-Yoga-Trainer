const LevelPreview = () => {
    return (
        <div className="level-preview">
            <h2>Choose Your Plan</h2>
            <div
                id="carouselExampleIndicators"
                className="carousel slide  d-flex justify-content-center m-4"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="controll">
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel-item active">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button className="level-selector btn">
                                    Beginner
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                style={{ objectFit: "cover" }}
                                src="https://media.istockphoto.com/photos/african-trainer-and-group-of-people-meditating-during-yoga-class-picture-id1222262916?b=1&k=20&m=1222262916&s=170667a&w=0&h=-yKDc2yXo5mJ8SDpyKP-Rz91bR68o9rS9N8g-q7Oak8="
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button className="level-selector btn">
                                    Intermidiate
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                style={{ objectFit: "cover" }}
                                src="https://media.istockphoto.com/photos/strong-male-yogi-standing-on-his-hands-with-both-feet-in-the-air-picture-id1283571490?b=1&k=20&m=1283571490&s=170667a&w=0&h=2T7cT5XAQZRloSIXri6khH9Vo_szVtiVJx-lvCBe4XE="
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item-inside">
                            <div
                                className="d-flex justify-content-center align-items-center "
                                style={{
                                    position: "absolute",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <button className="level-selector btn">
                                    Expert
                                </button>
                            </div>
                            <img
                                height={"520rem"}
                                style={{ objectFit: "cover" }}
                                src="https://media.istockphoto.com/photos/yoga-reverse-warrior-pose-picture-id483465412?b=1&k=20&m=483465412&s=170667a&w=0&h=JBkrata6ox3NikqvL0x-z8lBu30DQkfTKK9NWGPmYQI="
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelPreview;
