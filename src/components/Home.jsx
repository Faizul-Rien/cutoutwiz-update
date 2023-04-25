import { render } from "@testing-library/react";
// import React from "react";
import React, { Component, useState, useEffect, useRef } from "react";
import NewBanner from "./NewBanner/NewBanner";
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import PriceCard from "./PriceCard/PriceCard";
import Map from "./Map/Map";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";

import ImageService from "./ImageService/ImageService";
import BannerCard from "./BannerCard/BannerCard";
import CountRecord from "./CountRecord/CountRecord";
import ImageEditing from "./ImageEditing/ImageEditing";
import VideoEditing from "./VideoEditing/VideoEditing";
import PlaceOrder from "./PlaceOrder/PlaceOrder";
import Contact from "./Contact/Contact";
import Blog from "./Blog/Blog";
import BannerCGI from "./Banner/BannerCGI";
const $ = window.$;

var c = 1,
  p = 1,
  o = 1,
  timer;

function Home(props) {

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

/*

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "https://ip-api.io/json?api_key="+process.env.REACT_APP_IPAPI,
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
*/
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
        <title>The KOW Company : Image and Video Post Production</title>
        <meta
          name="description"
          keywords="Product photo edinting company"
          content="The KOW Company is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "
        />
      </Helmet>
      <BannerCGI/>
    {/* <Banner /> */}  
      {/*Banner section */}
      <NewBanner />
      {/* Banner card section */}
       <BannerCard/>
      {/* Count Record */}
      <CountRecord/>
      {/* Image editing service */}


      {/* <ImageService></ImageService> */}


      <ImageEditing/>

      {/* Video editing service */}
      <VideoEditing/>
      {/* Apps with testimonial slider */}
      <Reviews></Reviews>
      {/* Plan  */}
      <PriceCard></PriceCard>




      {/* Place an order */}
      <PlaceOrder/>
      {/* Contact us */}
      <Contact/>
      {/* Blog Banner with blog section */}
      <Blog/>
      {/* Ourr presence section */}
      {/* map */}
      <Map />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
