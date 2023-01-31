import React from 'react';

const CountRecord = () => {
    return (
        <>
            
      <div id="countRecord" className="spacew fwidth">
        <div className="container">
          <div className="row">
            <div className="successTxt">
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
            <div className="row">
              <div className="col-md-3" id="countAnimFirst">
                <div id="retouchCount" className="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/18m.png"
                    height="90%"
                    width="90%"
                  />
                </div>
                <div className="fade-in-text">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    IMAGE <br /> PRODUCTION
                  </p>
                  <div className="text-center" style={{ marginTop: "-5%" }}>
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

              <div className="col-md-3" id="countAnim">
                <div id="retouchCount" className="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/40k.png"
                    height="90%"
                    width="90%"
                  />
                </div>
                <div className="fade-in-text40k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    IMAGE <br /> PRODUCTION
                  </p>
                  <div className="text-center" style={{ marginTop: "-5%" }}>
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

              <div className="col-md-3" id="countAnim">
                <div id="retouchCount" className="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/9.2k.png"
                    height="90%"
                    width="90%"
                  />
                </div>

                <div className="fade-in-text92k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    VIDEO <br /> PRODUCTION
                  </p>
                  <div className="text-center" style={{ marginTop: "-5%" }}>
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

              <div className="col-md-3" id="countAnim">
                <div id="retouchCount" className="text-center">
                  <img
                    id="sucphn"
                    src="assets/images/54k.png"
                    height="90%"
                    width="90%"
                  />
                </div>

                <div className="fade-in-text54k">
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    VIDEO <br /> PRODUCTION
                  </p>
                  <div className="text-center" style={{ marginTop: "-5%" }}>
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

        </>
    );
};

export default CountRecord;