import React, { Component } from "react";
import {Helmet} from "react-helmet";
 function Thankyounl(props) {

    return(
        <div className="postphoto"style={{backgroundColor:"#c5da9c"}}>
             <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
                <meta name="robots" content="noindex"></meta>
            </Helmet>

            <div className="row">
                <p style={{fontWeight:"700",fontSize:"100px",marginTop:"4%",color:"black",textAlign:"center"}}>Bedankt</p>
                <p className="text-center"style={{fontSize:"25px",color:"black"}}>Bedankt dat u contact heeft opgenomen.
                  Een van onze teamleden zal bereiken<br/>binnen de kortst mogelijke tijd naar u toe.
                   Als je een project nodig hebt:<br/>hulp kunt u contact met ons opnemen via:<br/><br/><u>info@cutoutwiz.com</u></p>
            </div>
        </div>
        );

    }
   
    export default Thankyounl;