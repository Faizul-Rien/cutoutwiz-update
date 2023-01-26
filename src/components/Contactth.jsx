import React, { useEffect } from "react";
import emailjs from "emailjs-com";
// import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./";
const $ = window.$;
// import Form from 'customisable-contact-form';
// import {Heading, FirstName, LastName, Email, Message, SubmitButton} from 'customisable-contact-form'
export default function Contactth() {

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
                        <p style={{ textAlign: "center", fontSize: "30px", fontFamily: "Branch", fontWeight: "700" }}>ติดต่อกับพวกเรา</p>


                        <p style={{ marginBottom: "-1%", textAlign: "center", color: "#ff9900", fontWeight: "700", marginTop: "-1%" }}>ติดต่อเรา</p>
                        <form onSubmit={sendEmail}>
                            {/* {renderAlert()} */}



                            <div className="row pt-5 mx-auto">
                                <div id="nameid" className="col-8 form-group mx-auto">
                                    <input type="text" className="form-control" placeholder="ชื่อ" name="name" required />
                                </div>
                                <div class="col-8 form-group mx-auto">
                                    <select id="inputState" class="form-control" name="option">
                                        <option selected> --เลือกตัวเลือก-- </option>
                                        <option>บริการแก้ไขภาพ</option>
                                        <option>บริการตัดต่อวิดีโอ</option>
                                    </select>
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="email" className="form-control" placeholder="อีเมล" name="email" required />
                                </div>
                                <div className="col-8 form-group pt-2 mx-auto">
                                    <input type="text" className="form-control" placeholder="เรื่อง" name="subject" required />
                                </div>


                                <div className="col-8 form-group pt-2 mx-auto">
                                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="ข้อความของคุณ" name="message" required></textarea>
                                </div>

                                <div className="col-8 form-group pt-2 mx-auto" hidden>
                                    <textarea cols="30" rows="3" type="number" className="form-control" name="uniqueid" id="hello" />
                                </div>


                                <div className="col-8 pt-3 mx-auto">


                                    <div class="text-center">
                                        <input type="submit" id="button-19" className="btn btn-info" value="ส่ง"></input>
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
