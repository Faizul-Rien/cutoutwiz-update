import React, { useEffect } from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationes} from "./";
const $ = window.$;
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contactes() {

    function randomDate( end) {
        return new Number(end + Math.random());
    }
    var p=randomDate( new Number())*10000000000000000;
    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_1zfatsb', 'template_0ciuxfr', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
        .then((result) => {
        console.log(result.text);
        window.location.href = "./thank-you/"+p;
        }, (error) => {
        console.log(error.text);
        });
        e.target.reset();
        
    }
    
    useEffect(()=>{
        document.getElementById('helloes').innerHTML = p;
    },[])

return (

<div className="containe">
<Helmet>
<style>{'body { background-color: #c5da9c; }'}</style>
</Helmet>



<div className="container">
<div className="row">
<div style={{marginTop:"4%"}}>
<p style={{textAlign:"center",fontSize:"30px",fontFamily:"poppins"}}>PÓNGASE EN CONTACTO CON NOSOTROS</p>
<div className="text-center"style={{marginBottom:"-2%"}}><button id="button-20">CONTÁCTENOS</button></div>
<form onSubmit={sendEmail}>
{/* {renderAlert()} */}
<div className="row pt-5 mx-auto">
<div className="col-8 form-group mx-auto">
<input type="text" className="form-control" placeholder="Nombre" name="name"required/>
</div>
<div className="col-8 form-group mx-auto">
<select id="inputState" className="form-control"name="option">
<option selected> --Seleccionar opción-- </option>
<option>Servicio de edición de imágenes</option>
<option>Servicio de edición de video</option>
</select>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input type="email" className="form-control" placeholder="Correo Electrónico" name="email"required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input type="text" className="form-control" placeholder="Sujeta" name="subject"required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<textarea className="form-control" id="" cols="30" rows="8" placeholder="Tu Mensaje" name="message"required></textarea>
</div>

<div className="col-8 form-group pt-2 mx-auto" hidden>
<textarea cols="30" rows="3" type="number" className="form-control" name="uniqueid" id="helloes"/>
</div>


<div className="col-8 pt-3 mx-auto">
<div className="text-center">
<input type="submit" id="button-19" className="btn btn-info" value="ENTREGAR"></input>
</div>
</div>
</div>
</form>
</div>
</div>
</div>

<br/>
</div>



);

}
