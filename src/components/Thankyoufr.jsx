import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationfr} from "./";
 function Thankyoufr(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#c5da9c"}}>
               <Router >
      <Navigationfr />
      </Router>
             <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div className="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Merci</p>
                <p className="text-center"style={{fontSize:"25px",color:"black"}}>Merci de rester en contact.
                  L'un des membres de notre équipe atteindra<br/> à vous dans les plus brefs délais.
                   Si vous avez besoin d'un projet<br/>assistance, vous pouvez nous contacter au :<br/><br/><u>info@thekowcompany.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyoufr;