import React, { useContext } from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import model from "./img/model_2.png";
import round from "./img/round_y.png";
import "./nstyle.css";
import { ManageContext } from "../../App";

const NewBanner = () => {
  
  const [localData, getUserLocation] = useContext(ManageContext); 

  return (
    <>
      <div id="toppart_wrap">
        <div className="container">
          <div className="row">
            <div id="type-text" className="col-md-6 col-sm-12">
              <p
                id="we-do"
                style={{
                  fontSize: "38px",
                  fontFamily: "Branch",
                  fontWeight: "700",
                }}
              >
                Elevate your visuals with our:
                {/* We do Image & Video */}
              </p>
              <div
                id="we-doI"
                style={{
                  fontSize: "38px",
                  fontFamily: "Branch",
                  marginTop: "-30px",
                  fontWeight: "700",
                }}
              >
                
                <Typical
                  steps={[
                    "3D Modeling",
                    1000,
                    " ",
                    500,
                  ]}
                  loop={Infinity} 
                  wrapper="p"
                />
                {/* <Typical
                  steps={[
                    "Editing",
                    1000,
                    "Recoloring",
                    500,
                    "Retouching",
                    500,
                    "Automation",
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                /> */}
              </div>

              <p style={{ fontSize: "20px", fontFamily: "Poppins" }}>
                Your one-stop
                <br />
                content post production solution
              </p>

              <div className="row">
                <div className="col-6 col-sm-6 col-md-5 col-xl-4">
                  <a
                    className=""
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button2">FREE TRIAL</button>
                  </a>
                </div>

                <div className="col-6 col-sm-6 col-md-7 col-xl-8">
                  <Link to="/contact-us">
                    <button type="button" id="button2" className="button2">
                      FREE QUOTE
                    </button>
                  </Link>
                </div>
                
                <div className="col-6 col-sm-6 col-md-5 col-xl-4">
                  <a
                    className=""
                    href="https://kowstudios.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button1">KOW CGI</button>
                  </a>
                </div>
              </div>
              {/* circle animation  */}
              <div className="circle-animation ">
                <div className="round">
                  <img src={round} alt="" />
                </div>
                <div className="ring"></div>
                <div className="model">
                  <img src={model} alt="model" />
                </div>
              </div>
            </div>
            {/* animation end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBanner;
