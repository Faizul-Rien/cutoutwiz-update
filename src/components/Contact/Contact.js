import React from 'react';

const Contact = () => {
    return (
        <>
            
      <div className="contactusWrap fwidth">
        <div id="blog-section-big">
          <div id="contact_wrap_area">
            <div id="contactInfo">
              <div className="img_4">
                <img
                  src="assets/images/We are here illustration.png"
                  id="cont-pic"
                  style={{ marginTop: "31%" }}
                  className="rounded mx-auto d-block"
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
        </>
    );
};

export default Contact;