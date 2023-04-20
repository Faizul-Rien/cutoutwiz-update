import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
           
      <div className="fwidth"  id="fot-phn">
        <div
          className="footer"
          style={{
            backgroundColor: "#e3e6d8",
            width: "100%",
            marginTop: "0%",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3" style={{ marginTop: "4%" }}>
                <Link to="/" target="_blank">
                  <img
                    src="assets/images/logo-footer.png"
                    style={{ marginTop: "3%" }}
                    width="100"
                    height="40"
                    alt=""
                  />
                </Link>

                <p
                  style={{
                    textAlign: "justify",
                    color: "#01302b",
                    marginTop: "4%",
                    fontWeight: "500",
                  }}
                >
                  The KOW Company is one of the leading image and video editing
                  company for businesses all over the world.
                </p>
                <a
                  href="https://www.facebook.com/cutoutwiz"
                  target="_blank"
                  className="fa fa-facebook"
                ></a>
                <a
                  href="https://twitter.com/cut_wiz?s=09"
                  target="_blank"
                  className="fa fa-twitter"
                ></a>
                <a
                  href="https://www.linkedin.com/company/cutoutwiz-ltd"
                  target="_blank"
                  className="fa fa-linkedin"
                ></a>
                <a
                  href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"
                  target="_blank"
                  className="fa fa-youtube"
                ></a>
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                  className="fa fa-instagram"
                ></a>
              </div>

              <div className="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>Menu</b>

                <p style={{ color: "#b7b9bb", marginTop: "8%" }}>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Home
                  </a>{" "}
                  <br />
                  <a
                    href="/#apps"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Features
                  </a>
                  <br />
                  <a
                    href="/#image-editing-service"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Services
                  </a>
                  <br />
                  <a
                    href="/#prices"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Pricing
                  </a>
                  <br />
                  <a
                    href="/#blog"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Blogs
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>Features</b>
                <p style={{ color: "#01302b", marginTop: "8%" }}>
                  <a
                    href="https://apps.shopify.com/cutoutwiz"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Shoppify App
                  </a>{" "}
                  <br />
                  <a
                    href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    AmazonSPN{" "}
                  </a>
                  <br />
                  <a
                    href="https://app.cutoutwiz.com"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Cutoutwiz
                  </a>
                  <br />
                  <a
                    href="https://www.bigcommerce.com/apps/cutoutwiz"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    BigCommerce App
                  </a>
                  <br />
                  <a
                    href="https://www.shotflow.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Shotflow
                  </a>
                </p>
              </div>

              <div className="col-6 col-md-2" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>
                  Useful Links
                </b>

                <p style={{ color: "#01302b", marginTop: "8%" }}>
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Privacy Policy{" "}
                  </Link>{" "}
                  <br />
                  <Link
                    to="/terms-and-conditions"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    {" "}
                    Terms & Condition
                  </Link>
                  <br />
                  <Link
                    to="/contact-us"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Contact Us
                  </Link>{" "}
                  <br />
                  <a
                    href="https://app.cutoutwiz.com/"
                    target="_blank"
                    style={{ textDecoration: "none", color: "#01302b" }}
                  >
                    Sign Up
                  </a>{" "}
                  <br />
                </p>
              </div>

              <div className="col-6 col-md-3" style={{ marginTop: "5%" }}>
                <b style={{ color: "#01302b", fontSize: "20px" }}>
                  Our Address
                </b>{" "}
                <br /> <br />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
                  width="70%"
                  height="50%"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <p
            style={{
              marginBottom: "0",
              textAlign: "center",
              color: "white",
              padding: "8px",
              backgroundColor: "black",
            }}
          >
            Designed & Developed by
            <Link
              to="/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            > {" "}
              The KOW Company
            </Link>
          </p>
        </div>
      </div> 
        </>
    );
};

export default Footer;