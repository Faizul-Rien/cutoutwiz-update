import React from 'react';

const BannerCard = () => {
  return (
    <>

      <div className="cardid fwidth">
        <div className="container" id="left-card">
          <div className="row">
            <div className="col-6 col-md-3 col-lg">
              <div
                className="card"
                style={{
                  border: "black",
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#e3e6d8",
                  color: "white",
                  boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                }}
              >
                <img
                  src="assets/images/image.png"
                  width="30%"
                  height="10%"
                  alt="Image icon"
                />
                <br />
                <div className="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} className="card-title">
                    45,000+
                  </h4>
                  <hr
                    style={{
                      width: "32%",
                      border: "1px solid #000000",
                      backgroundColor: "#000000",
                      opacity: "1",
                      marginTop: "-1%",
                    }}
                  ></hr>
                  <p
                    className="card-text"
                    style={{
                      marginTop: "-7%",
                      fontWeight: "500",
                      color: "#000000",
                    }}
                  >
                    Image
                    <br />
                    Processed Daily
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3  col-lg">
              <div
                className="card"
                style={{
                  border: "black",
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#e3e6d8",
                  color: "white",
                  boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                }}
              >
                <img
                  src="assets/images/team.png"
                  width="30%"
                  height="10%"
                  alt="Team icon"
                />
                <br />
                <div className="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} className="card-title">
                    500+
                  </h4>
                  <hr
                    style={{
                      width: "32%",
                      border: "1px solid #000000",
                      backgroundColor: "#000000",
                      opacity: "1",
                      marginTop: "-1%",
                    }}
                  ></hr>
                  <p
                    className="card-text"
                    style={{
                      marginTop: "-7%",
                      fontWeight: "500",
                      color: "#000000",
                    }}
                  >
                    Team
                    <br />
                    Members
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3  col-lg">
              <div
                className="card"
                style={{
                  border: "black",
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#e3e6d8",
                  color: "white",
                  boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                }}
              >
                <img
                  src="assets/images/support.png"
                  width="30%"
                  height="10%"
                  alt="Support icon"
                />
                <br />
                <div className="card-body" style={{ marginTop: "-3%" }} id="text">
                  <h4 style={{ color: "#000000" }} className="card-title">
                    365 Days
                  </h4>
                  <hr
                    style={{
                      width: "32%",
                      border: "1px solid #000000",
                      backgroundColor: "#000000",
                      opacity: "1",
                      marginTop: "-1%",
                    }}
                  ></hr>
                  <p
                    className="card-text"
                    style={{
                      marginTop: "-7%",
                      fontWeight: "500",
                      color: "#000000",
                    }}
                  >
                    Customer
                    <br />
                    Support
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3  col-lg">
              <div
                className="card"
                style={{
                  border: "black",
                  width: "100%",
                  borderRadius: "10px",
                  backgroundColor: "#e3e6d8",
                  color: "white",
                  boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                }}
              >
                <img
                  src="assets/images/delivery.png"
                  width="30%"
                  height="10%"
                  alt="clock icon"
                />
                <br />
                <div className="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} className="card-title">
                    12 Hours
                  </h4>
                  <hr
                    style={{
                      width: "32%",
                      border: "1px solid #000000",
                      backgroundColor: "#000000",
                      opacity: "1",
                      marginTop: "-1%",
                    }}
                  ></hr>
                  <p
                    className="card-text"
                    style={{
                      marginTop: "-7%",
                      fontWeight: "500",
                      color: "#000000",
                    }}
                  >
                    Or Less
                    <br />
                    Delivery Time
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md  col-lg">
              <div className="card-hidden">
                <div
                  className="card"
                  style={{
                    border: "black",
                    borderRadius: "10px",
                    width: "100%",
                    backgroundColor: "#e3e6d8",
                    color: "white",
                    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                  }}
                >
                  <img
                    src="assets/images/free-trial.png"
                    width="30%"
                    height="10%"
                    alt="Free trial icon"
                  />
                  <br />
                  <div className="card-body" style={{ marginTop: "-3%" }}>
                    <h4 style={{ color: "#000000" }} className="card-title">
                      10+
                    </h4>
                    <hr
                      style={{
                        width: "32%",
                        border: "1px solid #000000",
                        backgroundColor: "#000000",
                        opacity: "1",
                        marginTop: "-1%",
                      }}
                    ></hr>
                    <p
                      className="card-text"
                      style={{
                        marginTop: "-7%",
                        fontWeight: "500",
                        color: "#000000",
                      }}
                    >
                      Free
                      <br />
                      Trial Images
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <p
            id="abtHd"
            style={{
              textAlign: "center",
              fontFamily: "Branch",
              marginTop: "7%",
              fontSize: "38px",
              fontWeight: "700",
            }}
          >
            About us
          </p>

          <p
            id="ab"
            style={{
              textAlign: "justify",
              marginTop: "4%",
              textAlignLast: "center",
              fontSize: "19px",
            }}
          >
            The KOW Company is one of the leading image and video editing company for
            businesses all over the world. As the world moves towards a virtual
            future, with online product photo editing becoming more and more
            accessible, HD product pictures are what essentially drive sales. We
            are the trusted online image editing partner for many renowned
            ecommerce companies all over the world across a diverse range of
            industries. We offer every possible image editing (processing)
            service from commonly used services such as background image
            removal, color correction, image retouching, invisible mannequin, to
            even complex services such as image manipulation. The reason behind
            our success is that we believe in customer first and providing the
            best quality service.
          </p>
        </div>
      </div>

    </>
  );
};

export default BannerCard;