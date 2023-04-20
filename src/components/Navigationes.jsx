import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navigationes(props) {
  function refreshPage(){
    window.location.reload();
}
  return (
    

    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark'>
    <Container>

    <div className="" onClick={refreshPage}>
    <Link className="navbar-brand" to="/es">
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
          <a className="nav-link dropdown-toggle" href="../../es#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          SERVICIO
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a className="dropdown-item" href="./es#image-editing-service">IMÁGENES</a></li>
            <li><a className="dropdown-item" href="./es#video-editing-service">VÍDEOS</a></li>
          </ul>
        </li>

              <li className="nav-item">
                <a className="nav-link" href="./es#apps">
                APLICACIONES
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="./es#prices">
                PRECIO
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="./es#how-it-works">
                CÓMO FUNCIONA
                </a>
              </li>

               <li className="nav-item">
                <a className="nav-link" href="./es#blog">
                  BLOGS
                </a>
              </li> 
              
              {/* <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  
                  CONTACT
                </a>
              </li> */}

              <li className="nav-item">
              <Link className="nav-link"target="_blank" to="/es/contact-us">
              CONTÁCTENOS
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://app.cutoutwiz.com/"target="_blank"><button id="button9">
                INSCRIBIRSE</button>
                </a>
              </li>
             

        </ul>
      </div>
    </Container>
  </Navbar>

  );
}

export default Navigationes;