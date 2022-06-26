import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faDribbble,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="d-flex">
                    <div className="">
                        <h6>About</h6>
                        <p className="text-start">
                            Ea rebum sadipscing lorem nonumy duo sed elitr amet
                            lorem dolore. Sadipscing erat et diam stet. Sea
                            justo magna voluptua accusam. Nonumy kasd sadipscing
                            eirmod magna sed. Et aliquyam eos sit sed, aliquyam
                            sanctus dolore eirmod kasd justo dolores dolor
                            consetetur, no ipsum et dolores justo vero labore
                            lorem dolor.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li>
                                <a
                                    className="nav-link p-0"
                                    href="http://scanfcode.com/about/"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link p-0"
                                    href="http://scanfcode.com/contact/"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link p-0"
                                    href="http://scanfcode.com/contribute-at-scanfcode/"
                                >
                                    Contribute
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link p-0"
                                    href="http://scanfcode.com/privacy-policy/"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link p-0"
                                    href="http://scanfcode.com/sitemap/"
                                >
                                    Sitemap
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; 2021 All Rights Reserved
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a
                                    className="facebook d-flex align-items-center justify-content-center text-white"
                                    href="/#"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter d-flex align-items-center justify-content-center text-white"
                                    href="/#"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dribbble d-flex align-items-center justify-content-center text-white"
                                    href="/#"
                                >
                                    <FontAwesomeIcon icon={faDribbble} />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="linkedin d-flex align-items-center justify-content-center text-white"
                                    href="/#"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
