import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigationth(props) {
  function refreshPage(){
    window.location.reload();
}
  return (
    

    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
    <Container>

    <div className="" onClick={refreshPage}>
    <Link className="navbar-brand" to="/th">
      <img src="../../assets/images/ailogo.png" width="170" height="40" alt=""/>
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
        <ul className="navbar-nav">



              {/* <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Tools & API
                </Link>
              </li> */}

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="../../th#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          บริการ
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="./th#image-editing-service">รูปภาพ</a></li>
            <li><a className="dropdown-item" href="./th#video-editing-service">วิดีโอ</a></li>
          </ul>
        </li>

              <li className="nav-item">
                <a className="nav-link" href="./th#apps">
                APPS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="./th#prices">
                ราคา
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="./th#how-it-works">
                มันทำงานอย่างไร
                </a>
              </li>

               <li className="nav-item">
                <a className="nav-link" href="./th#blog">
                บล็อก
                </a>
              </li> 
              
              {/* <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  
                  CONTACT
                </a>
              </li> */}

              <li className="nav-item">
              <Link className="nav-link"target="_blank" to="/th/contact-us">
              ติดต่อ
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://app.cutoutwiz.com/"target="_blank"><button id="button9">
                ลงชื่อ</button>
                </a>
              </li>
             

        </ul>
      </div>
    </Container>
  </Navbar>

  );
}

export default Navigationth;