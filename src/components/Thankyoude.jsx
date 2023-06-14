import React, { Component } from "react";
import {Helmet} from "react-helmet";

 function Thankyoude(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#c5da9c"}}>
               
             <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>
 
            <div className="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Danke</p>
                <p className="text-center"style={{fontSize:"25px",color:"black"}}>Vielen Dank für Ihre Kontaktaufnahme.
                Einer unserer Teammitglieder wird Sie erreichen<br/> in kürzester Zeit an Sie aus.
                   Wenn Sie Projektunterstützung benötigen, erreichen Sie uns unter:<br/><br/><u>info@thekowcompany.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyoude;