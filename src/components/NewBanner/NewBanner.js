import React, { useContext, useEffect, useState } from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import model from "./img/model_2.png";
import round from "./img/round_y.png";
import "./nstyle.css";
import { ManageContext } from "../../App";

const NewBanner = () => {

  const [localData, getUserLocation] = useContext(ManageContext);
  const [switchBool, setSwithBool] = useState(true)

  var myLoop = true;
  const switchingFunc = () => {
    const elemntOne = document.getElementById("animText_1");
    const elemntTow = document.getElementById("animText_2");

    setInterval(() => {
      elemntOne.style.display = myLoop ? 'none' : 'block';
      elemntTow.style.display = myLoop ? 'block' : 'none';
      myLoop = !myLoop;
      console.log(myLoop)
    }, 7000)


  }
  let i = 0;
  useEffect(() => {
    i++;

    i == 1 && switchingFunc()
  }, [])
  return (
    <>
      {console.log(switchBool)}
      <div id="toppart_wrap">
        <div className="container">
          <div className="row">
            <div id="type-text" className="col-md-6 col-sm-12">
              <div id="animText_1">
                <p
                  id="we-do"
                  style={{
                    fontSize: "38px",
                    fontFamily: "Branch",
                    fontWeight: "700",
                  }}
                >
                  We do Image & Video
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
                  />
                </div>
              </div>
              <div id="animText_2" style={{ display: "none" }}>
                <p
                  id="we-do"
                  style={{
                    fontSize: "38px",
                    fontFamily: "Branch",
                    fontWeight: "700",

                  }}
                >
                  Elevate your visuals with our:
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
                      "Texture Creation",
                      1000,
                      "Architectural Visualization",
                      500,
                      "3D modeling",
                      500,

                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </div>
              </div>
              <p style={{ fontSize: "20px", fontFamily: "Poppins" }}>
                Your one-stop
                <br />
                content post production solution
              </p>

              <div className="row">
                <div className="col-4 col-sm-4 col-md-4 col-xl-4">
                  <a
                    className=""
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="button2">FREE TRIAL</button>
                  </a>
                </div>

                <div className="col-4 col-sm-4 col-md-4 col-xl-4">
                  <Link to="/contact-us">
                    <button type="button" id="button1" className="button2">
                      FREE QUOTE
                    </button>
                  </Link>
                </div>

                <div className="col-4 col-sm-4 col-md-4 col-xl-4">
                  <a href="https://kowstudios.com/" target="_blank">
                    <button type="button" id="button2" className="button2">
                      KOW CGI
                    </button>
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
