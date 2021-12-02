const Form = () => {
    return (
        <div className="container d-flex align-items-center justify-content-center h-100">
            <form className="text-start my-5">
                <div className="mb-3">
                    <label for="Input_Username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="Input_Username"
                        aria-describedby="username_help"
                    />
                    <div id="username_help" className="form-text">
                        Pick a cool username! There are plenty available.
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                    <div id="username_help" className="form-text">
                        <p>Password tips:</p>
                        <ul>
                            <li>
                                Make your password at least 8 characters long.
                            </li>
                            <li>
                                Avoid using your user name as your password.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Confirm Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
