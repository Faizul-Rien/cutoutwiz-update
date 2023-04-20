import React from "react";
import Slider from "react-slick";
import "./Reviews.css";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 778,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div>
        <div   id="apps" className="reviewWrap fwidth">
        <div id="apps-large">
          <div>
            <p style={{ color: "#c5da9c" }}>sadasd</p>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "700",
                marginTop: "3%",
                fontFamily: "Branch",
              }}
            >
              Apps & Integrations
            </h1>
            <br />
            <p
              style={{
                textAlign: "center",
                marginTop: "-1%",
                fontSize: "20px",
              }}
            >
              Our apps are featured in major E-commerce platforms
            </p>
            <br />
            <br />
          </div>

          <div className="logopopWrap">
            <div id="logopop">
              <a
                href="https://apps.shopify.com/cutoutwiz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="logo-big"
                  src="assets/images/shopify-01.png"
                  className="rounded mx-auto d-block"
                  height="85px"
                  width="220px"
                  alt="Shopify logo"
                />
              </a>{" "}
            </div>

            <div id="logopop" style={{ marginTop: "7px" }}>
              <a
                href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="logo-big"
                  src="assets/images/amazon-01.png"
                  className="rounded mx-auto d-block"
                  height="85px"
                  width="220px"
                  alt="Amazon logo"
                />
              </a>
            </div>

            <div id="logopop">
              <a
                href="https://app.cutoutwiz.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="logo-big"
                  src="assets/images/cutoutwiz-01.png"
                  className="rounded mx-auto d-block"
                  height="85px"
                  width="220px"
                  alt="The KOW Company logo"
                />
              </a>
            </div>

            <div id="logopop">
              <a
                href="https://www.bigcommerce.com/apps/cutoutwiz/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="logo-big"
                  src="assets/images/Big commerce-01.png"
                  className="rounded mx-auto d-block"
                  height="85px"
                  width="220px"
                  alt="Bigcommerce logo"
                />
              </a>
            </div>

            <div id="logopop">
              <a
                href="https://www.shotflow.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  id="logo-big"
                  src="assets/images/shotflow-01.png"
                  className="rounded mx-auto d-block"
                  height="85px"
                  width="220px"
                  alt="Shotflow logo"
                />
              </a>
            </div>
          </div>

          <div className="container" id="overflow" style={{ marginTop: "60px" }}>
            <Slider {...settings}>
              <div
                className="card"
                id="cardBack"
                style={{
                  borderRadius: "10px",
                  border: "black",
                }}
              >
                <img
                  src="assets/images/quotes.png"
                  className="rounded mx-auto d-block"
                  width="60"
                  height="40"
                  alt=""
                  style={{ marginTop: "11%" }}
                />
                <br />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    I am very pleased with their work. The team is very patient
                    and accommodating to all my requests. I will definitely work
                    with them.
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#ffcc33",
                    }}
                  >
                    zasy chua
                  </p>
                </div>
                <hr
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "black",
                    height: "2px",
                    marginTop: "-5%",
                  }}
                />
                <img
                  src="assets/images/star5.png"
                  style={{ marginTop: "3%" }}
                  className="rounded mx-auto d-block"
                  width="30%"
                  height="30%"
                  alt=""
                />
                <br />
                <br />
              </div>

              <div
                className="card"
                id="cardBack"
                style={{ borderRadius: "10px", border: "black" }}
              >
                <img
                  src="assets/images/quotes.png"
                  className="rounded mx-auto d-block"
                  width="60"
                  height="40"
                  alt=""
                  style={{ marginTop: "11%" }}
                />
                <br />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    Very good service, was very patient with me in my back and
                    fro amendments. I would say it's very affordable too. Jobs
                    are delivered.
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#ffcc33",
                    }}
                  >
                    Jia Jia
                  </p>
                </div>
                <hr
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "black",
                    marginTop: "-5%",
                    height: "2px",
                  }}
                />
                <img
                  src="assets/images/star5.png"
                  style={{ marginTop: "3%" }}
                  className="rounded mx-auto d-block"
                  width="30%"
                  height="30%"
                  alt=""
                />
                <br />
                <br />
              </div>

              <div
                className="card"
                id="cardBack"
                style={{ borderRadius: "10px", border: "black" }}
              >
                <img
                  src="assets/images/quotes.png"
                  className="rounded mx-auto d-block"
                  width="60"
                  height="40"
                  alt=""
                  style={{ marginTop: "11%" }}
                />
                <br />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      textAlign: "center",

                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    I love this app. We've been using The KOW Company for some time. I
                    am continually impressed with the results and stellar
                    customer support.
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#ffcc33",
                    }}
                  >
                    Kamo Fitness
                  </p>
                </div>
                <hr
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "black",
                    marginTop: "-5%",
                    height: "2px",
                  }}
                />
                <img
                  src="assets/images/star5.png"
                  style={{ marginTop: "3%" }}
                  className="rounded mx-auto d-block"
                  width="30%"
                  height="30%"
                  alt=""
                />
                <br />
                <br />
              </div>

              <div
                className="card"
                id="cardBack"
                style={{ borderRadius: "10px", border: "black" }}
              >
                <img
                  src="assets/images/quotes.png"
                  className="rounded mx-auto d-block"
                  width="60"
                  height="40"
                  alt=""
                  style={{ marginTop: "11%" }}
                />
                <br />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    I was having difficulties with proper images and quality but
                    the Rep called and walked me through proper image sizing and
                    lighting.
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#ffcc33",
                    }}
                  >
                    Bèl Bagay Swimwear
                  </p>
                </div>
                <hr
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "black",
                    marginTop: "-5%",
                    height: "2px",
                  }}
                />
                <img
                  src="assets/images/star5.png"
                  style={{ marginTop: "3%" }}
                  className="rounded mx-auto d-block"
                  width="30%"
                  height="30%"
                  alt=""
                />
                <br />
                <br />
              </div>

              <div
                className="card"
                id="cardBack"
                style={{ borderRadius: "10px", border: "black" }}
              >
                <img
                  src="assets/images/quotes.png"
                  className="rounded mx-auto d-block"
                  width="60"
                  height="40"
                  alt=""
                  style={{ marginTop: "11%" }}
                />
                <br />
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      textAlign: "center",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    I have tried several image background removal services, some
                    cheaper than here. But remember you get what you pay.Thank
                    you.
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#ffcc33",
                    }}
                  >
                    General Unique
                  </p>
                </div>
                <hr
                  style={{
                    width: "50%",
                    margin: "auto",
                    backgroundColor: "black",
                    marginTop: "-5%",
                    height: "2px",
                  }}
                />
                <img
                  src="assets/images/star5.png"
                  style={{ marginTop: "3%" }}
                  className="rounded mx-auto d-block"
                  width="30%"
                  height="30%"
                  alt=""
                />
                <br />
                <br />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
