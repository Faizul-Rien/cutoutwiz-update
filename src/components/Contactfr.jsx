import React, { useEffect } from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationfr } from "./";
const $ = window.$;
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contactfr() {

    function randomDate(end) {
        return new Number(end + Math.random());
    }
    var p = randomDate(new Number()) * 10000000000000000;
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_1zfatsb', 'template_0ciuxfr', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
            .then((result) => {
                console.log(result.text);
                window.location.href = "./thank-you/" + p;
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    
    }

    useEffect(()=>{
        document.getElementById('hello').innerHTML = p;
    },[])

    return (
        <div className="containe">
            <Helmet>
                <style>{'body { background-color: #c5da9c; }'}</style>
            </Helmet>
            <div class="container">
                <div class="row">
                    <div style={{ marginTop: "4%" }}>
                        <p style={{ textAlign: "center", fontSize: "30px", fontFamily: "Branch", fontWeight: "700" }}>PRENEZ CONTACT AVEC NOUS</p>


                        <p style={{ marginBottom: "-1%", textAlign: "center", color: "#ff9900", fontWeight: "700", marginTop: "-1%" }}>Contactez-nous</p>
                        <form onSubmit={sendEmail}>
                            {/* {renderAlert()} */}



                            <div className="row pt-5 mx-auto">
                                <div id="nameid" className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="Nom" name="name" required />
                                </div>
                                <div class="col-8 form-group mx-auto">
                                    <select id="inputState" class="form-control" name="option">
                                        <option selected> --Sélectionnez Option-- </option>
                                        <option>Service d'édition d'images</option>
                                        <option>Service de montage vidéo</option>
                                    </select>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="Email" name="email" required />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="Matière" name="subject" required />
                                </div>


                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Votre message" name="message" required></textarea>
                                </div>

                                <div className="col-8 form-group pt-2 mx-auto" hidden>
                                    <textarea cols="30" rows="3" type="number" className="form-control" name="uniqueid" id="hello" />
                                </div>


                                <div className="col-8 pt-3 mx-auto">


                                    <div class="text-center">
                                        <input type="submit" id="button-19" className="btn btn-info" value="NOUS FAIRE PARVENIR"></input>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <br />
        </div>


    );
}
