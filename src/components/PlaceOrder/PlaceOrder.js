import React from 'react';

const PlaceOrder = () => {
    return (
        <>

<div className="placeOrderWrap fwidth">
        <div id="place-order">
          <div id="how-it-works"></div>

          <div>
            <br />
            <p
              style={{
                fontSize: "38px",
                textAlign: "center",
                fontWeight: "700",
                marginTop: "2%",
                fontFamily: "Branch",
              }}
            >
              How to Place an Order
            </p>
            <p
              style={{
                fontSize: "20px",
                textAlign: "center",
                marginTop: "-1%",
              }}
            >
              Just follow these simple steps, and we will take it from there
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <video
                  height="100%"
                  width="100%"
                  style={{ marginTop: "2%" }}
                  controls
                >
                  {" "}
                  <source src="assets/images/Key-features-Video.mp4"></source>
                </video>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>

        <div className="card_Wrap">
          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-1.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />
              <div className="card-body">
                <h4 className="card-title">Step 1:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  id="btmspace"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Sign In <br />{" "}
                  <span style={{ color: "white" }}>preferred subscription</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-2.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />
              <div className="card-body">
                <h4 className="card-title">Step 2:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Choose your
                  <br />
                  preferred subscription plan
                  <span id="prefer" style={{ color: "white" }}>
                    <br />
                    preferred
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-3.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />

              <div className="card-body">
                <h4 className="card-title">Step 3:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Go to your
                  <br />
                  account to place an order
                </p>
              </div>
            </div>
          </div>

          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-4.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />
              <div className="card-body">
                <h4 className="card-title">Step 4:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Upload the
                  <br />
                  images you want us to edit
                </p>
              </div>
            </div>
          </div>

          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-5.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />
              <div className="card-body">
                <h4 className="card-title">Step 5:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  The best photo editor
                  <br />
                  process the photos for you
                </p>
              </div>
            </div>
          </div>

          <div className="step_card">
            <div
              className="card"
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                border: "black",
              }}
            >
              <img
                src="assets/images/S-6.png"
                width="30%"
                height="30%"
                alt="Image icon"
              />
              <br />
              <div className="card-body">
                <h4 className="card-title">Step 6:</h4>
                <hr
                  style={{
                    width: "32%",
                    border: "1px solid #ffcc33",
                    backgroundColor: "#ffcc33",
                    opacity: "1",
                    marginTop: "-1%",
                  }}
                ></hr>
                <p
                  className="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Download
                  <br />
                  the edited photos
                  <span id="prefer" style={{ color: "white" }}>
                    for you
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    );
};

export default PlaceOrder;