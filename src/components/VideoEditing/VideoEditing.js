import React from 'react';

const VideoEditing = () => {
    return (
        <>
            
      <div id="video-editing-service" className="fwidth">
        <div id="video_service">
          <div className="container">
            <div className="row">
              <div id="vdo_des_wrap" className="col-md-12 col-lg-5">
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

              <div id="vdo-item" className="col-md-12 col-lg-7">
                <br />
                <div className="text-center" id="vdoSer">
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
                    className="btn1show"
                    type="radio"
                    defaultChecked
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    className="btn2show"
                    type="radio"
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    className="btn3show"
                    type="radio"
                  ></input>
                  &emsp;
                  <input
                    name="origin"
                    style={{ height: "20px", width: "20px" }}
                    className="btn4show"
                    type="radio"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default VideoEditing;