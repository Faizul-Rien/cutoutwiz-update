import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
const $ = window.$;

function Navigation(props) {
  function refreshPage() {
    window.location.reload("/");
  }
 
  function refreshPagees() {
    window.location.href = "./es";
  }

  function refreshPagefr() {
    window.location.href = "./fr";
  }

  function refreshPagenl() {
    window.location.href = "./nl";
  }

  function refreshPageth() {
    window.location.href = "./th";
  }

  function refreshPagede() {
    window.location.href = "./de";
  }
  return (
    <div id="appWrap">
    <Navbar collapseOnSelect sticky="top" expand="md" bg="black" variant="dark">
      <Container>
        <div class="" onClick={refreshPage}>
          <Link class="navbar-brand" to="/">
            <img
              id="logowiz"
              src="../../assets/images/ailogo.png"
              width="170"
              height="40"
              alt=""
            />
          </Link>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICE
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="/#image-editing-service">
                    IMAGES
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/#video-editing-service">
                    VIDEOS
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#apps">
                APPS
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#prices">
                PRICE
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#how-it-works">
                HOW IT WORKS
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/#blog">
                BLOGS
              </a>
            </li>

            <div class="">
              <li class="nav-item">
                <Link class="nav-link" to="/explore-our-services">
                  EXPLORE
                </Link>
              </li>
            </div>

            <li class="nav-item">
              <Link class="nav-link" target="_blank" to="/contact-us">
                CONTACT
              </Link>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                href="https://app.cutoutwiz.com/"
                target="_blank"
              >
                <button id="button9">SIGN UP</button>
              </a>
            </li>

            {/* <li class="nav-item">
              <Link class="nav-link"onClick={refreshPagees}>
                   <img src="../../assets/images/spain-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              

              <li class="nav-item">
              <Link class="nav-link"  to="./fr"onClick={refreshPagefr}>
              <img src="../../assets/images/france-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link" to="./nl"onClick={refreshPagenl}>
              <img src="../../assets/images/netherland-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li>

             

              <li class="nav-item">
              <Link class="nav-link" to="./th"onClick={refreshPageth}>
              <img src="../../assets/images/thailand-flag.png" width="20" height="13.5" alt=""/>
                </Link>
              </li>

              <li class="nav-item">
              <Link class="nav-link" to="./de"onClick={refreshPagede}>
              <img src="../../assets/images/germany-flag.png" width="20" height="20" alt=""/>
                </Link>
              </li> */}

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="../../assets/images/uk-flag.png"
                  width="20"
                  height="13.5"
                  alt=""
                />
                English
              </a>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li onClick={refreshPage}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/uk-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    English
                  </a>
                </li>
                <li onClick={refreshPagefr}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/france-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    French
                  </a>
                </li>
                <li onClick={refreshPagede}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/germany-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    German
                  </a>
                </li>
                <li onClick={refreshPagees}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/spain-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Spanish
                  </a>
                </li>
                <li onClick={refreshPage}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/thailand-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Thai
                  </a>
                </li>
                <li onClick={refreshPagenl}>
                  <a class="dropdown-item" href="/#images">
                    <img
                      src="../../assets/images/netherland-flag.png"
                      width="20"
                      height="13.5"
                      alt=""
                    />
                    Dutch
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
    <Outlet />

    </div>

  );
}

export default Navigation;
