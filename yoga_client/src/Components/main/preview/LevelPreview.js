const LevelPreview = () => {
    return (
        <div className="">
            <h2>Choose Your Plan</h2>
            <div
                id="carouselExampleIndicators"
                class="carousel slide  d-flex justify-content-center m-4"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="controll">
                        <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="carousel-item active">
                        <img
                            src="https://media.istockphoto.com/photos/african-trainer-and-group-of-people-meditating-during-yoga-class-picture-id1222262916?b=1&k=20&m=1222262916&s=170667a&w=0&h=-yKDc2yXo5mJ8SDpyKP-Rz91bR68o9rS9N8g-q7Oak8="
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://media.istockphoto.com/photos/yoga-reverse-warrior-pose-picture-id483465412?b=1&k=20&m=483465412&s=170667a&w=0&h=JBkrata6ox3NikqvL0x-z8lBu30DQkfTKK9NWGPmYQI="
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div class="carousel-item">
                        <img
                            src="https://media.istockphoto.com/photos/strong-male-yogi-standing-on-his-hands-with-both-feet-in-the-air-picture-id1283571490?b=1&k=20&m=1283571490&s=170667a&w=0&h=2T7cT5XAQZRloSIXri6khH9Vo_szVtiVJx-lvCBe4XE="
                            class="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LevelPreview;
