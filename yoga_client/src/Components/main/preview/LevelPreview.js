const LevelPreview = () => {
    return (
        <div
            id="carouselExampleIndicators"
            class="carousel slide  d-flex justify-content-center"
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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa_8MdULfZD8Iqrc1rn1vtIG2O9ANWpVMuw35na2rNTO-C7SpMM-AGQJaqkJh1ocT0j4&usqp=CAU"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
                <div class="carousel-item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLa_8MdULfZD8Iqrc1rn1vtIG2O9ANWpVMuw35na2rNTO-C7SpMM-AGQJaqkJh1ocT0j4&usqp=CAU"
                        class="d-block w-100"
                        alt="..."
                    />
                </div>
            </div>
        </div>
    );
};

export default LevelPreview;
