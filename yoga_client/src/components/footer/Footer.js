import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">
                            Ea rebum sadipscing lorem nonumy duo sed elitr amet
                            lorem dolore. Sadipscing erat et diam stet. Sea
                            justo magna voluptua accusam. Nonumy kasd sadipscing
                            eirmod magna sed. Et aliquyam eos sit sed, aliquyam
                            sanctus dolore eirmod kasd justo dolores dolor
                            consetetur, no ipsum et dolores justo vero labore
                            lorem dolor,.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="http://scanfcode.com/category/c-language/">
                                    af
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/category/front-end-development/">
                                    af
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/category/back-end-development/">
                                    af
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/category/java-programming-language/">
                                    af
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/category/android/">
                                    af
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/category/templates/">
                                    af
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li>
                                <a href="http://scanfcode.com/about/">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contact/">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/contribute-at-scanfcode/">
                                    Contribute
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/privacy-policy/">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="http://scanfcode.com/sitemap/">
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
                                <a className="facebook" href="/#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href="/#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dribbble" href="/#">
                                    <i className="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href="/#">
                                    <i className="fa fa-linkedin"></i>
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
