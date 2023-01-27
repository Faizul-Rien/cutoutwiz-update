import React from "react";
import { Link } from "react-router-dom";
import "./PriceCard.css";

const PriceCard = () => {
  return (
    <div>
      <div class="planWrap fwidth">
        <div id="grenPhn">
          <div id="prices"></div>
          <div class="container">
            <h1
              id="choose-plan"
              style={{
                textAlign: "center",
                fontFamily: "Branch",
                fontWeight: "700",
              }}
            >
              Choose your plan
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "-1%",
                fontSize: "20px",
              }}
            >
              Our packages are just what your store needs
            </p>
            <br />

            <div class="row">
              <p style={{ textAlign: "center", fontWeight: "700" }}>
                We offer multiple pricing options to choose from that will help
                you achieve your goals. Choose the one that meets your demands
                perfectly. In case you are looking for something else, or want a
                quote from us for any sort of customization, feel free to send
                us a text through our Contact Us form.
              </p>
            </div>

            <div class="row" style={{ marginTop: "6%" }}>
              <div class="col-md-4">
                <div class="plan_card">
                  <br />
                  <div className="cube" id="animation-cube"></div>
                  <div
                    class="card"
                    style={{
                      width: "100%",
                      marginLeft: "11%",
                      marginTop: "3%",
                      borderRadius: "10px",
                      backgroundColor: "#e3e6d8",
                      fontWeight: "600",
                      border: "black",
                      boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    }}
                  >
                    <div class="card-title">
                      <br />
                      <br />
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: "23px",
                          marginTop: "1%",
                        }}
                      >
                        BASIC PLAN
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "-5%",
                          fontSize: "13px",
                        }}
                      >
                        starts from
                      </p>
                    </div>
                    <div class="card-body" style={{ marginTop: "-9%" }}>
                      <img
                        src="assets/images/1.19.png"
                        class="rounded mx-auto d-block"
                        width="100px"
                        height="113px"
                        alt=""
                      />
                    </div>

                    <div class="text-center">
                      <p style={{ marginTop: "-3%" }}>1-100 IMAGES/ORDER</p>
                      <p style={{ marginTop: "-4%" }}>10 IMAGES-FREE</p>
                      <p style={{ marginTop: "-4%" }}>1 MONTH FREE STORAGE</p>
                      <p style={{ marginTop: "-4%" }}>24/7 CUSTOMER SUPPORT</p>

                      <a
                        href="https://app.cutoutwiz.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <button type="button" id="button-order">
                          Order Now
                        </button>
                      </a>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="plan_card">
                  <br />
                  <div className="cube" id="animation-cube"></div>
                  <div
                    class="card"
                    style={{
                      width: "100%",
                      marginLeft: "11%",
                      marginTop: "3%",
                      borderRadius: "10px",
                      backgroundColor: "#e3e6d8",
                      fontWeight: "600",
                      border: "black",
                      boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    }}
                  >
                    <div class="card-title">
                      <br />
                      <br />
                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: "23px",
                          marginTop: "1%",
                        }}
                      >
                        STANDARD PLAN
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "-5%",
                          fontSize: "13px",
                        }}
                      >
                        starts from
                      </p>
                    </div>
                    <div class="card-body" style={{ marginTop: "-9%" }}>
                      <img
                        src="assets/images/0.99.png"
                        class="rounded mx-auto d-block"
                        width="100px"
                        height="113px"
                        alt=""
                      />
                    </div>

                    <div class="text-center">
                      <p style={{ marginTop: "-3%" }}>101-500 IMAGES/ORDER</p>
                      <p style={{ marginTop: "-4%" }}>10 IMAGES-FREE</p>
                      <p style={{ marginTop: "-4%" }}>2 MONTH FREE STORAGE</p>
                      <p style={{ marginTop: "-4%" }}>24/7 CUSTOMER SUPPORT</p>

                      <a
                        href="https://app.cutoutwiz.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        <button type="button" id="button-order">
                          Order Now
                        </button>
                      </a>
                    </div>
                    <br />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="plan_card">
                  <br />
                  <div className="cube" id="animation-cube"></div>
                  <div
                    class="card"
                    style={{
                      width: "100%",
                      marginLeft: "11%",
                      marginTop: "3%",
                      borderRadius: "10px",
                      backgroundColor: "#e3e6d8",
                      fontWeight: "600",
                      border: "black",
                      boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    }}
                  >
                    <div class="card-title">
                      <button
                        style={{
                          backgroundColor: "#c5da98",
                          marginLeft: "60%",
                          padding: "6px 5px",
                          border: "none",
                          borderRadius: "0px 0px 10px 10px",
                        }}
                      >
                        POPULAR
                      </button>

                      <p
                        style={{
                          textAlign: "center",
                          fontWeight: "700",
                          fontSize: "23px",
                          marginTop: "4%",
                        }}
                      >
                        PREMIUM PLAN
                      </p>
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "-5%",
                          fontSize: "13px",
                          color: "#e3e6d8",
                        }}
                      >
                        starts from
                      </p>
                    </div>
                    <div class="card-body" style={{ marginTop: "-9%" }}>
                      <img
                        src="assets/images/contact-us.png"
                        class="rounded mx-auto d-block"
                        width="100px"
                        height="113px"
                        alt=""
                      />
                    </div>

                    <div class="text-center">
                      <p style={{ marginTop: "-3%" }}>500-ꝏ IMAGES/ORDER</p>
                      <p style={{ marginTop: "-4%" }}>10 IMAGES-FREE</p>
                      <p style={{ marginTop: "-4%" }}>3 MONTH FREE STORAGE</p>
                      <p style={{ marginTop: "-4%" }}>24/7 CUSTOMER SUPPORT</p>

                      <Link to="/contact-us" target="_blank">
                        {" "}
                        <button type="button" id="button-order">
                          Contact Us
                        </button>
                      </Link>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
