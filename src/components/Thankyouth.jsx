import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationth} from "./";
 function Thankyouth(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#c5da9c"}}>
               <Router >
      <Navigationth />
      </Router>
             <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div className="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>ขอบคุณ</p>
                <p className="text-center"style={{fontSize:"25px",color:"black"}}>ขอบคุณสำหรับการติดต่อ.
                 หนึ่งในสมาชิกในทีมของเราจะไปถึง<br/> ออกไปให้คุณภายในเวลาที่สั้นที่สุด
                  หากคุณต้องการโครงการ<br/> ความช่วยเหลือ คุณสามารถติดต่อเราได้ที่:<br/><br/><u>info@cutoutwiz.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyouth;