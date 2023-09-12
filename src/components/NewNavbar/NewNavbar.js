import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import './style.css'
import logo from "./images/logo.png"
const $ = window.$;


function NewNavbar() {

    return (
        <div id="new-navbar" className="new-navbar nav-sticky">
            <Navbar collapseOnSelect expand="lg" className="navbar-bg " >
                <Container>
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img
                                id="logowiz"
                                src={logo}
                                width="80"
                                height="30"
                                alt="thekow_logo"
                            />
                        </Link>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="mx-auto"></div>

                        <div>
                            <ul className="navbar-nav " style={{ fontSize: "14px" }}>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDarkDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                       Service
                                    </a>
                                    <ul
                                        className="dropdown-menu dropdown-menu-dark"
                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                    >
                                        <li>
                                            <a className="dropdown-item" href="/#image-editing-service">
                                              Images
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/#video-editing-service">
                                               Videos
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#apps">
                                       Apps
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#prices">
                                      Price
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#how-it-works">
                                     How it works
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/#blog">
                                        Blogs
                                    </a>
                                </li>

                                <div className="">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/virtual-tour">
                                          Virtual Tour
                                        </Link>
                                    </li>
                                </div>
                                <div className="">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/partnership">
                                          Partnership
                                        </Link>
                                    </li>
                                </div>
                                <li className="nav-item">
                                    <Link className="nav-link" target="_blank" to="/contact-us">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-auto"></div>

                        <div className="nav-home-wrap">
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a
                                        className="nav-link sign-up"
                                        href="https://app.cutoutwiz.com/"
                                        target="_blank"
                                    >
                                        <button className="button-new-nav" >Sign Up</button>
                                    </a>
                                </li>
                                <li className="nav-item nav-home">
                                    <a href="/">
                                        <img src={require('./images/home.png')} />
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Outlet />

        </div>

    );
}

export default NewNavbar;
