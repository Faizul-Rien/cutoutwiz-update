import { render } from "@testing-library/react";
// import React from "react";
import React, { Component, useState, useEffect, useRef } from "react";
import NewBanner from "./NewBanner/NewBanner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PriceCard from "./PriceCard/PriceCard";
import Map from "./Map/Map";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Slider from "react-slick";

import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
const $ = window.$;

var c = 1,
  p = 1,
  o = 1,
  timer;

function Home(props) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3, setNav3] = useState();
  const slider1 = useRef();
  const slider2 = useRef();
  const slider3 = useRef();

  const settingsimg = {
    dots: false,
    swipe: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    breakpoint: 0,
    speed: 4000,
    autoplaySpeed: 8000,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 2700,
          autoplaySpeed: 7000,
        },
      },
    ],
  };

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://ip-api.io/json?api_key=ceae0f9fbb24a7f45f12d479595194fc",
    success: function (data) {
      console.log(
        "Your ip address is " +
          data.ip +
          " city: " +
          data.city +
          " region: " +
          data.region_name +
          " country: " +
          data.country_name
      );
      if (data.country_name == "France") {
        window.location.href = "https://cutoutwiz.com/fr";
      }
      if (data.country_name == "Spain") {
        window.location.href = "https://cutoutwiz.com/es";
      }
      if (data.country_name == "Germany") {
        window.location.href = "https://cutoutwiz.com/de";
      }
      if (data.country_name == "Netherlands") {
        window.location.href = "https://cutoutwiz.com/nl";
      }
      if (data.country_name == "Thailand") {
        window.location.href = "https://cutoutwiz.com/th";
      }
    },
  });

  $(document).ready(function () {
    $(".btn1show").click(function () {
      $("#js-nametag1").show();
      $("#video-size1").show();
      $("#video-size2").hide();
      $("#video-size3").hide();
      $("#video-size4").hide();
      $("#js-nametag2").hide();
      $("#js-nametag3").hide();
      $("#js-nametag4").hide();
    });

    $(".btn2show").click(function () {
      $("#js-nametag2").show();
      $("#video-size2").show();
      $("#video-size1").hide();
      $("#video-size4").hide();
      $("#video-size3").hide();
      $("#js-nametag1").hide();
      $("#js-nametag3").hide();
      $("#js-nametag4").hide();
    });

    $(".btn3show").click(function () {
      $("#js-nametag3").show();
      $("#video-size3").show();
      $("#video-size1").hide();
      $("#video-size2").hide();
      $("#video-size4").hide();
      $("#js-nametag2").hide();
      $("#js-nametag1").hide();
      $("#js-nametag4").hide();
    });

    $(".btn4show").click(function () {
      $("#js-nametag4").show();
      $("#video-size4").show();
      $("#video-size1").hide();
      $("#video-size2").hide();
      $("#video-size3").hide();
      $("#js-nametag2").hide();
      $("#js-nametag1").hide();
      $("#js-nametag3").hide();
    });

    var quotea = $(".quotea");

    if (c == 1) {
      var quoteIndex = -1;

      function showNextQuote() {
        ++quoteIndex;
        c++;
        quotea
          .eq(quoteIndex % 8)
          .fadeIn(900)
          .delay(6500)
          .fadeOut(900, showNextQuote);
      }

      showNextQuote();
    }

    $(
      ".termly-styles-module-root-28a62e termly-styles-module-primary-348988 termly-styles-module-solid-f59bb1 termly-styles-declineButton-35ef05 t-declineButton"
    ).click(function () {
      window.location.reload("/");
    });
  });

  function refreshPage() {
    window.location.reload("/");
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 4000,
  //   cssEase: "linear",

  //   responsive: [
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // };

  window.addEventListener("scroll", () => {
    let content = document.querySelector(".fade-in-text");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    let content = document.querySelector(".fade-in-text40k");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    let content = document.querySelector(".fade-in-text92k");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  window.addEventListener("scroll", () => {
    let content = document.querySelector(".fade-in-text54k");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });

  return (
    <div className="home fwidth">
      <Helmet>
        <title>CutOutWiz : Image and Video Post Production</title>
        <meta
          name="description"
          keywords="Product photo edinting company"
          content="CutOutWiz is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "
        />
      </Helmet>

      <Banner />

      {/*Banner section */}

      <NewBanner />

      {/* Banner card section */}

      <div class="cardid fwidth">
        <div class="container" id="left-card">
          <div class="row">
            <div class="col-6 col-md-3 col-lg">
              <div
                class="card"
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
                <div class="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} class="card-title">
                    16,500+
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
                    class="card-text"
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

            <div class="col-6 col-md-3  col-lg">
              <div
                class="card"
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
                <div class="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} class="card-title">
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
                    class="card-text"
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

            <div class="col-6 col-md-3  col-lg">
              <div
                class="card"
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
                <div class="card-body" style={{ marginTop: "-3%" }} id="text">
                  <h4 style={{ color: "#000000" }} class="card-title">
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
                    class="card-text"
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

            <div class="col-6 col-md-3  col-lg">
              <div
                class="card"
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
                <div class="card-body" style={{ marginTop: "-3%" }}>
                  <h4 style={{ color: "#000000" }} class="card-title">
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
                    class="card-text"
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

            <div class="col-md  col-lg">
              <div class="card-hidden">
                <div
                  class="card"
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
                  <div class="card-body" style={{ marginTop: "-3%" }}>
                    <h4 style={{ color: "#000000" }} class="card-title">
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
                      class="card-text"
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

        <div class="container">
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
            CutOutWiz is one of the leading image and video editing company for
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

      {/* Count Record */}

      <div id="countRecord" class="spacew fwidth">
        <div class="container">
          <div class="row">
            <div class="successTxt">
              <p id="sucRcd">Success Record</p>
              <p
                style={{
                  textAlign: "center",
                  marginTop: "-2%",
                  fontSize: "20px",
                }}
              >
                In numbers
              </p>
            </div>
          </div>
          <div id="countStartWrap">
            <div class="row">
              <div class="col-md-3" id="countAnimFirst">
                <div id="retouchCount" class="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/18m.png"
                    height="90%"
                    width="90%"
                  />
                </div>
                <div class="fade-in-text">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    IMAGE <br /> PRODUCTION
                  </p>
                  <div class="text-center" style={{ marginTop: "-5%" }}>
                    <button
                      id="rest"
                      style={{
                        backgroundColor: "#c5da9c",
                        borderRadius: "20px",
                        padding: "3px 21px",
                        border: "none",
                      }}
                    >
                      2020-2021
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-3" id="countAnim">
                <div id="retouchCount" class="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/40k.png"
                    height="90%"
                    width="90%"
                  />
                </div>
                <div class="fade-in-text40k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    IMAGE <br /> PRODUCTION
                  </p>
                  <div class="text-center" style={{ marginTop: "-5%" }}>
                    <button
                      id="rest"
                      style={{
                        backgroundColor: "#c5da9c",
                        borderRadius: "20px",
                        padding: "3px 21px",
                        border: "none",
                      }}
                    >
                      PER DAY
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-3" id="countAnim">
                <div id="retouchCount" class="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/9.2k.png"
                    height="90%"
                    width="90%"
                  />
                </div>

                <div class="fade-in-text92k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    VIDEO <br /> PRODUCTION
                  </p>
                  <div class="text-center" style={{ marginTop: "-5%" }}>
                    <button
                      id="rest"
                      style={{
                        backgroundColor: "#c5da9c",
                        borderRadius: "20px",
                        padding: "3px 21px",
                        border: "none",
                      }}
                    >
                      2020-2021
                    </button>
                  </div>
                </div>
              </div>

              <div class="col-md-3" id="countAnim">
                <div id="retouchCount" class="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/54k.png"
                    height="90%"
                    width="90%"
                  />
                </div>

                <div class="fade-in-text54k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    VIDEO <br /> PRODUCTION
                  </p>
                  <div class="text-center" style={{ marginTop: "-5%" }}>
                    <button
                      id="rest"
                      style={{
                        backgroundColor: "#c5da9c",
                        borderRadius: "20px",
                        padding: "3px 21px",
                        border: "none",
                      }}
                    >
                      FIVE YEAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image editing service */}

      <div class="serviceTop_wrap fwidth">
        <div id="service-top">
          <div id="big-service">
            <div id="image-editing-service"></div>

            <div class="card-img-hidden">
              <div className="srv_prt_btn">
                <Link to="/service-portfolio">Service Portfolio</Link>
              </div>
              <div className="cardImage">
                <div className="srvLeftSlide">
                  <img
                    id="service-left"
                    src="assets/images/round for services.png"
                  />
                  <Slider
                    className="mainSlider"
                    autoplay={true}
                    asNavFor={nav2}
                    pauseOnHover={false}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    speed={4000}
                    autoplaySpeed={8000}
                    ref={(slider1) => setNav2(slider1)}
                  >
                    <div id="cf3">
                      <img
                        id="photo1"
                        class="bottom"
                        src="assets/images/Hair-Masking-after.png"
                      />
                      <img
                        id="photo1"
                        class="top"
                        src="assets/images/Hair-Masking-before.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo2"
                        class="bottom"
                        src="assets/images/Ghost manniquin-01.png"
                      />
                      <img
                        id="photo2"
                        class="top"
                        src="assets/images/Ghost manniquin-02.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo3"
                        class="bottom"
                        src="assets/images/recolor-02.png"
                      />
                      <img
                        id="photo3"
                        class="top"
                        src="assets/images/recolor-01.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo4"
                        class="top"
                        src="assets/images/Shadow creation-02.png"
                      />

                      <img
                        id="photo4"
                        class="bottom"
                        src="assets/images/Shadow creation-01.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo5"
                        class="bottom"
                        src="assets/images/prafter.png"
                      />
                      <img
                        id="photo5"
                        class="top"
                        src="assets/images/prbefore.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo6"
                        class="bottom"
                        src="assets/images/color correction-01.png"
                      />
                      <img
                        id="photo6"
                        class="top"
                        src="assets/images/color correction-02.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo7"
                        class="bottom"
                        src="assets/images/manipulation-before-1.png"
                      />
                      <img
                        id="photo7"
                        class="top"
                        src="assets/images/manipulation-after-1.png"
                      />
                    </div>

                    <div id="cf3">
                      <img
                        id="photo8"
                        class="bottom"
                        src="assets/images/Background-remove-after.png"
                      />
                      <img
                        id="photo8"
                        class="top"
                        src="assets/images/Background-remove-before.png"
                      />
                    </div>
                  </Slider>
                </div>

                <div className="srvRighSlide">
                  <p id="servicePar">Services</p>
                  <p id="imgser" style={{ marginTop: "-5%" }}>
                    Image Editing Service
                  </p>
                  <hr id="border10" />
                  <div>
                    <Slider
                      asNavFor={nav1}
                      ref={(slider2) => setNav2(slider2)}
                      slidesToShow={1}
                      autoplay={true}
                      pauseOnHover={false}
                      swipeToSlide={true}
                      focusOnSelect={true}
                      speed={4000}
                      autoplaySpeed={8000}
                    >
                      <div>
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MASKING
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">GHOST</p>
                        <p class="sl_pr" id="testret-re">
                          MANNEQUIN
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-re">
                          RECOLOR
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">SHADOW</p>
                        <p class="sl_pr" id="testret-re">
                          CREATION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-ret">
                          RETOUCH
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">COLOR</p>
                        <p class="sl_pr" id="testret-re">
                          CORRECTION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MANIPULATION
                        </p>
                      </div>

                      <div>
                        <p class="sl_heading">BACKGROUND</p>
                        <p class="sl_pr" id="testret">
                          REMOVAL
                        </p>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div id="forMobileCardImage">
                <div id="srv_heading">
                  <p id="servicePar">Services</p>
                  <p id="imgser">Image Editing Service</p>
                  <hr id="border10" />
                </div>
                <div className="srvLeftSlide">
                  <img
                    id="service-left-2"
                    src="assets/images/round for services.png"
                  />
                  <Slider
                    className="mobi_mainSlider"
                    autoplay={true}
                    asNavFor={nav3}
                    pauseOnHover={true}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    speed={4000}
                    autoplaySpeed={8000}
                    ref={(slider3) => setNav3(slider3)}
                  >
                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MASKING
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo1"
                          class="bottom"
                          src="assets/images/Hair-Masking-after.png"
                        />

                        <img
                          id="photo1"
                          class="top"
                          src="assets/images/Hair-Masking-before.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">GHOST</p>
                        <p class="sl_pr" id="testret-re">
                          MANNEQUIN
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo2"
                          class="bottom"
                          src="assets/images/Ghost manniquin-01.png"
                        />
                        <img
                          id="photo2"
                          class="top"
                          src="assets/images/Ghost manniquin-02.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-re">
                          RECOLOR
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo3"
                          class="bottom"
                          src="assets/images/recolor-02.png"
                        />
                        <img
                          id="photo3"
                          class="top"
                          src="assets/images/recolor-01.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">SHADOW</p>
                        <p class="sl_pr" id="testret-re">
                          CREATION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo4"
                          class="top"
                          src="assets/images/Shadow creation-02.png"
                        />

                        <img
                          id="photo4"
                          class="bottom"
                          src="assets/images/Shadow creation-01.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">PHOTO</p>
                        <p class="sl_pr" id="testret-ret">
                          RETOUCH
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo5"
                          class="bottom"
                          src="assets/images/prafter.png"
                        />
                        <img
                          id="photo5"
                          class="top"
                          src="assets/images/prbefore.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">COLOR</p>
                        <p class="sl_pr" id="testret-re">
                          CORRECTION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo6"
                          class="bottom"
                          src="assets/images/color correction-01.png"
                        />
                        <img
                          id="photo6"
                          class="top"
                          src="assets/images/color correction-02.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">IMAGE</p>
                        <p class="sl_pr" id="testret-re">
                          MANIPULATION
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo7"
                          class="bottom"
                          src="assets/images/manipulation-before-1.png"
                        />
                        <img
                          id="photo7"
                          class="top"
                          src="assets/images/manipulation-after-1.png"
                        />
                      </div>
                    </div>

                    <div id="cf3">
                      <div class="sl_details">
                        <p class="sl_heading">BACKGROUND</p>
                        <p class="sl_pr" id="testret">
                          REMOVAL
                        </p>
                      </div>
                      <div class="slImages">
                        <img
                          id="photo8"
                          class="bottom"
                          src="assets/images/Background-remove-after.png"
                        />
                        <img
                          id="photo8"
                          class="top"
                          src="assets/images/Background-remove-before.png"
                        />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video editing service */}

      <div id="video-editing-service" class="fwidth">
        <div id="video_service">
          <div class="container">
            <div class="row">
              <div id="vdo_des_wrap" class="col-md-12 col-lg-5">
                <div id="vid_des">
                  <p id="servicePars"></p>
                  <p id="imgser">Video Editing Service</p>
                  <hr id="border11" />
                  <div id="container-target">
                    <div id="js-nametag1" style={{ marginTop: "-4%" }}>
                      <p id="vid_txt_2">VIDEO</p>
                      <p id="testret-add">CROPPING </p>
                    </div>

                    <div
                      id="js-nametag2"
                      style={{ marginTop: "-4%", display: "none" }}
                    >
                      <p style={{ fontSize: "46px" }}>TITLE</p>
                      <p id="testret-add"> EDITING</p>
                    </div>

                    <div
                      id="js-nametag3"
                      style={{ marginTop: "-4%", display: "none" }}
                    >
                      <p style={{ fontSize: "46px" }}>SUBTITLE</p>
                      <p id="testret-add"> ADDITION</p>
                    </div>

                    <div
                      id="js-nametag4"
                      style={{ marginTop: "-4%", display: "none" }}
                    >
                      <p style={{ fontSize: "46px" }}>AUDIO</p>
                      <p id="testret-add"> ADDITION</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="vdo-item" class="col-md-12 col-lg-7">
                <br />
                <div class="text-center" id="vdoSer">
                  <div id="container-target">
                    <div id="video-size1">
                      {" "}
                      <video
                        height="80%"
                        width="80%"
                        controls="controls"
                        poster="assets/images/cropping-large.png"
                        alt="video-cropping-service-poster"
                      >
                        {" "}
                        <source src="assets/images/Video_Cropping_Service_1.mp4"></source>
                      </video>
                    </div>
                    <div id="video-size2" style={{ display: "none" }}>
                      {" "}
                      <video
                        height="80%"
                        width="80%"
                        controls="controls"
                        poster="assets/images/tittle.png"
                        alt="video-cropping-service-poster"
                      >
                        {" "}
                        <source src="assets/images/Title_Addition_Service_1.mp4"></source>
                      </video>
                    </div>
                    <div id="video-size3" style={{ display: "none" }}>
                      {" "}
                      <video
                        height="80%"
                        width="80%"
                        controls="controls"
                        poster="assets/images/subtittle.png"
                        alt="video-cropping-service-poster"
                      >
                        {" "}
                        <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source>
                      </video>
                    </div>
                    <div id="video-size4" style={{ display: "none" }}>
                      {" "}
                      <video
                        height="80%"
                        width="80%"
                        controls="controls"
                        poster="assets/images/Screenshot (7).png"
                        alt="video-cropping-service-poster"
                      >
                        {" "}
                        <source src="assets/images/Audio_Editing_Service_1.mp4"></source>
                      </video>
                    </div>
                  </div>
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    class="btn1show"
                    type="radio"
                    checked
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    class="btn2show"
                    type="radio"
                    checked
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    class="btn3show"
                    type="radio"
                    checked
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    class="btn4show"
                    type="radio"
                    checked
                  ></input>
                </div>
              </div>
            </div>

            <div id="apps"></div>
          </div>
        </div>
      </div>

      {/* Apps with testimonial slider */}

      <Reviews></Reviews>

      {/* Plan  */}
      <PriceCard></PriceCard>
      {/* <div class="planWrap fwidth">
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

                      <a href="https://app.cutoutwiz.com/" target="_blank">
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

                      <a href="https://app.cutoutwiz.com/" target="_blank">
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
              <div class="plan_card" >
                  <br />

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
      </div> */}
      {/*
      <div class="row">
        <div
          id="priceColor"
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "170vh",
          }}
        ></div>
      </div>
*/}
      {/* Place an order */}

      <div class="placeOrderWrap fwidth">
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

          <div class="container">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
                <video
                  height="100%"
                  width="100%"
                  style={{ marginTop: "2%" }}
                  controls
                  autoplay
                >
                  {" "}
                  <source src="assets/images/Key-features-Video.mp4"></source>
                </video>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>
        </div>

        <div class="card_Wrap">
          <div class="step_card">
            <div
              class="card"
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
              <div class="card-body">
                <h4 class="card-title">Step 1:</h4>
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
                  class="card-text"
                  id="btmspace"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Sign In <br />{" "}
                  <span style={{ color: "white" }}>preferred subscription</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="step_card">
            <div
              class="card"
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
              <div class="card-body">
                <h4 class="card-title">Step 2:</h4>
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
                  class="card-text"
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

          <div class="step_card">
            <div
              class="card"
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

              <div class="card-body">
                <h4 class="card-title">Step 3:</h4>
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
                  class="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Go to your
                  <br />
                  account to place an order
                </p>
              </div>
            </div>
          </div>

          <div class="step_card">
            <div
              class="card"
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
              <div class="card-body">
                <h4 class="card-title">Step 4:</h4>
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
                  class="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  Upload the
                  <br />
                  images you want us to edit
                </p>
              </div>
            </div>
          </div>

          <div class="step_card">
            <div
              class="card"
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
              <div class="card-body">
                <h4 class="card-title">Step 5:</h4>
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
                  class="card-text"
                  style={{ fontWeight: "700", fontSize: "13px" }}
                >
                  The best photo editor
                  <br />
                  process the photos for you
                </p>
              </div>
            </div>
          </div>

          <div class="step_card">
            <div
              class="card"
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
              <div class="card-body">
                <h4 class="card-title">Step 6:</h4>
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
                  class="card-text"
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

      {/* Contact us */}
      <div class="contactusWrap fwidth">
        <div id="blog-section-big">
          <div id="contact_wrap_area">
            <div id="contactInfo">
              <div class="img_4">
                <img
                  src="assets/images/We are here illustration.png"
                  id="cont-pic"
                  style={{ marginTop: "31%" }}
                  class="rounded mx-auto d-block"
                  width="70%"
                  height="70%"
                  alt=""
                />

                <a href="/contact-us" target="_blank">
                  <img
                    id="iconPM"
                    src="assets/images/contact us-01.png"
                    style={{
                      marginTop: "-57%",
                      position: "absolute",
                      left: "57%",
                    }}
                  />
                </a>
              </div>
              <div id="we-are-here">
                <p style={{ fontSize: "38px", marginLeft: "2.4%" }}>
                  We are Here to
                </p>
              </div>
            </div>

            <p id="we-are-here-sec">Answer Your Every Query</p>
          </div>
        </div>
      </div>
      {/*       
      <div class="row">
              <div
                id="grensp"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "39vh",
                  width: "100%",
                }}
              ></div>
            </div>
      */}

      {/* Blog Banner with blog section */}

      <div id="blog" class="blogBannerWrap fwidth">
        <div id="blogphn">
          <div id="blog_heading">
            <h1
              style={{
                textAlign: "center",
                fontFamily: "Branch",
                fontWeight: "700",
                marginTop: "4%",
              }}
            >
              Our Blogs
            </h1>

            <p style={{ fontSize: "20px", textAlign: "center" }}>
              Learn more on different industry verticals and practices in our
              blogs
            </p>
          </div>

          <div class="container">
            <div class="row" id="back-last">
              <div class="col-md-4">
                <Card
                  style={{
                    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    border: "black",
                  }}
                >
                  <div class="containerback">
                    <Link to="/blog">
                      <img
                        src="assets/images/white-back642-863.png"
                        width="100%"
                        height="100%"
                        alt="Read Our Blogs photo"
                      />

                      <div class="centered">
                        <h2 style={{ color: "black" }}>Read Our</h2>
                        <h3
                          style={{
                            color: "black",
                            fontWeight: "600",
                            fontSize: "35px",
                          }}
                        >
                          BLOGS
                        </h3>
                      </div>
                    </Link>
                  </div>
                </Card>
              </div>

              <div class="col-md-4">
                <Card
                  style={{
                    height: "98%",
                    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    border: "black",
                  }}
                >
                  <img
                    src="assets/images/types-of-photography.jpg"
                    height="58%"
                    width="100%"
                    alt="Celebratory lights and decorations on a yellow background"
                  />
                  <div style={{ padding: "2%" }}>
                    <Link
                      to="/types-of-photography-which-one-drive-your-inner-passion-most"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <b>
                        Types of Photography: Which one drives your inner
                        passion most?
                      </b>
                    </Link>
                    <p style={{ textAlign: "justify" }}>
                      Photographs are our way of capturing the world as we see
                      it. It’s a medium of expressing our inner thoughts and
                      holding...
                    </p>
                    <Link to="/types-of-photography-which-one-drive-your-inner-passion-most">
                      <button id="button7">Read More</button>
                    </Link>
                  </div>
                </Card>
              </div>

              <div class="col-md-4">
                <Card
                  style={{
                    height: "98%",
                    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    border: "black",
                  }}
                >
                  <img
                    src="assets/images/Blog-23.jpg"
                    height="58%"
                    width="100%"
                    alt="Celebratory lights and decorations on a yellow background"
                  />
                  <div style={{ padding: "2%" }}>
                    <Link
                      to="/easy-product-photography-solutions-for-small-business"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <b>
                        Easy Product Photography Solutions for Small Business
                      </b>
                    </Link>
                    <p style={{ textAlign: "justify" }}>
                      Since you are considering starting your own small
                      business, we can guess that you are a cheerful aspirant
                      filled with passion...
                    </p>
                    <Link to="/easy-product-photography-solutions-for-small-business">
                      <button id="button7">Read More</button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ourr presence section */}

      <div class="fwidth" id="big-scren-map">
        <br />
        <br />
        <br />
        <br />

        <p
          id="mapid"
          style={{
            fontSize: "45px",
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "Branch",
          }}
        >
          Our Presence
        </p>
      </div>

      {/* map */}

      <Map />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
