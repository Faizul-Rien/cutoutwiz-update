import React, { Component } from "react";
import html2canvas from "html2canvas";
import Xyz from "./Xyz";
import Test from "./Test";
import { Link } from "react-router-dom";

export default class Screenshoot extends Component {
  ref = React.createRef();

  handleClickTakeScreenShot = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 1400,
      cropHeigth: 1800,
    };

    html2canvas(this.ref.current).then((Canvas) => {
      let croppedCanvas = document.createElement("Canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeigth;

      croppedCanvasContext.drawImage(Canvas, cropPositionLeft, cropPositionTop);

      // const a = document.createElement("a");
      // a.href = Canvas.toDataURL();
      // a.download = "shoe.png";
      // a.click();
    });
  };

  render() {
    return (
      <>
        <div ref={this.ref}>
          <Test />
        </div>
        <form>
          <input
            type="button"
            value="Print This Page"
            onClick={window.alert("test")}
          />
        </form>
      </>
    );
  }
}
