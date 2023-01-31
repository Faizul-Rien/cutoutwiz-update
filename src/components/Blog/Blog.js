import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

const Blog = () => {
    return (
        <>
           
      <div id="blog" className="blogBannerWrap fwidth">
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

          <div className="container">
            <div className="row" id="back-last">
              <div className="col-md-4">
                <Card
                  style={{
                    boxShadow: "1px 2px 3px 4px rgba(12,12,12,0.2)",
                    border: "black",
                  }}
                >
                  <div className="containerback">
                    <Link to="/blog">
                      <img
                        src="assets/images/white-back642-863.png"
                        width="100%"
                        height="100%"
                        alt="Read Our Blogs photo"
                      />

                      <div className="centered">
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

              <div className="col-md-4">
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

              <div className="col-md-4">
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
        </>
    );
};

export default Blog;