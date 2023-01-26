import React from "react";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import model from "./img/model_2.png";
import round from "./img/round_y.png";
import "./bstyle.css";

const TopBanner = () => {
  return (
    <>
      <div id="toppart_wrap">
        <div class="container">
          <div class="row">
            <div id="type-text" class="col-md-6 col-sm-12">
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
              <p
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
              </p>

              <p style={{ fontSize: "20px", fontFamily: "Poppins" }}>
                Your one-stop
                <br />
                content post production solution
              </p>

              <div class="row">
                <div class="col-6 col-md-4">
                  <a
                    class=""
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button class="button1">FREE TRIAL</button>
                  </a>
                </div>

                <div class="col-6 col-md-8">
                  <Link to="/contact-us">
                    <button type="button" id="button2">
                      FREE QUOTE
                    </button>
                  </Link>
                </div>

                {/* circle animation  */}

                <div className="circle-animation ">
                  <div className="ring"></div>
                  <div className="round">
                    <img src={round} alt="" />
                  </div>
                  <div className="model">
                    <img src={model} alt="model" />
                  </div>
                </div>

                {/* animation end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
