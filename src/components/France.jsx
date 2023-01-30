import { render } from "@testing-library/react";
// import React from "react";
import React, { Component, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
//import Testimonial from 'react-testimonial';
//import Carousel from 'react-multi-carousel';
 
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import Slider from "react-slick";
 
import Typical from 'react-typical';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigationfr} from ".";
const $ = window.$;

var c=1,p=1,o=1,timer;

function France(props)  {

  
const settingsimg = {
  dots: false,
  swipe: false,
  pauseOnHover:false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  breakpoint: 0,
  speed: 4000,
  autoplaySpeed: 8000,

  responsive: [{
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      speed: 2700,
      autoplaySpeed: 7000
    }
  }]
};

$.ajax({
  type: "GET",
  dataType: "json",
  url: 'https://ip-api.io/json?api_key=ceae0f9fbb24a7f45f12d479595194fc',
  success: function(data) {
    console.log(
      'Your ip address is ' + data.ip
        + ' city: ' + data.city
        + ' region: ' + data.region_name
        + ' country: ' + data.country_name
    );
    if(data.country_name=='France'){
      window.location.href = "https://cutoutwiz.com/fr";
    }
    if(data.country_name=='Spain'){
      window.location.href = "https://cutoutwiz.com/es";
    }
    if(data.country_name=='Germany'){
      window.location.href = "https://cutoutwiz.com/de";
    }
    if(data.country_name=='Netherlands'){
      window.location.href = "https://cutoutwiz.com/nl";
    }
    if(data.country_name=='Thailand'){
      window.location.href = "https://cutoutwiz.com/th";
    }

  }
});

$(document).ready(function() {



$('.btn1show').click(function() {
  $('#js-nametag1').show();
  $('#video-size1').show();
  $('#video-size2').hide();
  $('#video-size3').hide();
  $('#video-size4').hide();
  $('#js-nametag2').hide();
  $('#js-nametag3').hide();
  $('#js-nametag4').hide();
});


$('.btn2show').click(function() {
  $('#js-nametag2').show();
  $('#video-size2').show();
  $('#video-size1').hide();
  $('#video-size4').hide();
  $('#video-size3').hide();
  $('#js-nametag1').hide();
  $('#js-nametag3').hide();
  $('#js-nametag4').hide();
});

$('.btn3show').click(function() {
  $('#js-nametag3').show();
  $('#video-size3').show();
  $('#video-size1').hide();
  $('#video-size2').hide();
  $('#video-size4').hide();
  $('#js-nametag2').hide();
  $('#js-nametag1').hide();
  $('#js-nametag4').hide();
});

$('.btn4show').click(function() {
  $('#js-nametag4').show();
  $('#video-size4').show();
  $('#video-size1').hide();
  $('#video-size2').hide();
  $('#video-size3').hide();
  $('#js-nametag2').hide();
  $('#js-nametag1').hide();
  $('#js-nametag3').hide();
});



var quotea = $(".quotea");

if(c==1){
var quoteIndex = -1;

function showNextQuote() {
  ++quoteIndex;c++;
  quotea.eq(quoteIndex % 8)
      .fadeIn(900)
      .delay(6500)
      .fadeOut(900, showNextQuote);

}

showNextQuote();
}




$('.termly-styles-module-root-28a62e termly-styles-module-primary-348988 termly-styles-module-solid-f59bb1 termly-styles-declineButton-35ef05 t-declineButton').click(function() {
  window.location.reload('/');
});

// setTimeout(function() {
//   $("#refresh").reload(window.location.href + " #refresh"); 
//     }, 5000);


// var y = document.getElementById('refresh').innerHTML;

// setTimeout(function() {
//      document.getElementById('refresh').innerHTML = y;
//     }, 9000);

});


function refreshPage(){
  window.location.reload('/');
}

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }]
  };



  window.addEventListener('scroll',()=>{
    let content= document.querySelector('.fade-in-text');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition){
      content.classList.add('active');
    }
    else{
      content.classList.remove('active');
    }
  })

  window.addEventListener('scroll',()=>{
    let content= document.querySelector('.fade-in-text40k');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition){
      content.classList.add('active');
    }
    else{
      content.classList.remove('active');
    }
  })

  window.addEventListener('scroll',()=>{
    let content= document.querySelector('.fade-in-text92k');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition){
      content.classList.add('active');
    }
    else{
      content.classList.remove('active');
    }
  })


  window.addEventListener('scroll',()=>{
    let content= document.querySelector('.fade-in-text54k');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if(contentPosition < screenPosition){
      content.classList.add('active');
    }
    else{
      content.classList.remove('active');
    }
  });



// if (!localStorage.getItem('/')) {
//   setTimeout(function() {
//    localStorage.setItem('/', true)
//    window.location.href = "/";
//   }, 2000);
// }




// $(document).ready(function() {
// function slide(){
//   if(o==1){
//   window.location.href = "/#";o++;}
//   else
//   clearInterval(time);
// }

// var time=setInterval(slide,'2000');
// });
// window.onload = function afterWebPageLoad() { 
   
//   $("#logowiz").trigger('click');
// }

// setTimeout(function(){
//   window.location.reload(1);
// }, 90000);

// setTimeout(function() {
//   window.location.href = "v";
// }, 2000);





  return (

    <div className="home">
      <Router >
       <Navigationfr />
      </Router>
      <Helmet>
                <title>CutOutWiz : Image and Video Post Production</title>
                <meta  name="description" keywords="Product photo edinting company" content="CutOutWiz is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "
                />
     </Helmet>



{/*Banner section */}


<div id="homeid" style={{backgroundImage: `url('assets/images/CUTOUTWIZ WEBSITE LIGHT VERSION L-02.png')`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        marginTop:'-7%'}}>
      {/* <img src="assets/images/bannerpic.png"/> */}
      <div className="container" style={{marginTop:"5%"}}>
          <div className="row">

            <div id="type-text" className="col-md-5"style={{marginTop:"13%"}}>
                <p id="we-do" style={{fontSize:"38px",fontFamily:"Branch",fontWeight:"700"}}>Nous faisons

                Image et Vidéo</p>
                <p id="we-doI" style={{fontSize:"38px",fontFamily:"Branch",marginTop:"-30px",fontWeight:"700"}}>
                <Typical
                    steps={['Édition', 1000, 'Recoloration', 500, 'Retouche', 500, 'Automatisation', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
                </p>


                <p style={{fontSize:"20px",fontFamily:"Poppins"}}>Votre guichet unique<br/>
                solution de post-production de contenu</p>

                <div className="row">
                  <div className="col-6 col-md-4">
                  <a className="" href="https://app.cutoutwiz.com/"target="_blank"><button className="button1">ESSAI GRAT.</button> </a></div>

                <div className="col-6 col-md-8">
                <Link to="/contact-us" ><button type="button" id="button2">DEVIS GRATUIT</button></Link>
                </div>

                </div>

              </div>

              <div id="img-banner" className="col-md-7">
<div style={{marginTop:"10%"}} >
                 <img id="back-cover"style={{}} src="assets/images/banner-model-before.png"height="100%" width="100%" /> 
</div>



                <div className="hide-large">
                 <div style={{marginTop:"10%"}}></div>
                 <img id="back-ban" src="assets/images/bannertest.png"style={{ position: "relative",
                top: "27px"}} height="92%" width="92%"  />

                 <img id="back-cove" src="assets/images/banner-model-before.png"  style={{ position: "absolute",
                  top: "0px",marginTop:"10%",
                  left: "0px"}} height="100%" width="100%" />
                </div>
             



              </div>
          </div>
        </div>
      </div>
      



{/* Banner card section */}

<div className="cardid" style={{backgroundImage: `url('assets/images/CUTOUTWIZ WEBSITE LIGHT VERSION L-03.png')`, backgroundPosition: 'center',
backgroundColor:"#062220",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'104vh',
        width:'100vw'
}}>

      <div className="container">
      <div className="row">
            <div className="col-6 col-md">
          <div className="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/image.png"  width="30%" height="10%" alt="Image icon"/><br/>
              <div className="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  className="card-title">16,500+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Image<br/>Traité quotidien</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/team.png" width="30%" height="10%" alt="Team icon"/><br/>
              <div className="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  className="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Équipe<br/>Membres</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div className="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 style={{color:"#000000"}}  className="card-title">365 Días</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Cliente<br/>Soutien
</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div className="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  className="card-title">12 Horas</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Ou moins<br/>Heure de livraison</p>
              </div>
              </div>
          </div>

          <div className="col-md">
          <div className="card-hidden">
          <div className="card" style={{border:"black",borderRadius:"10px",width: "100%",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/free-trial.png"  width="30%" height="10%" alt="Free trial icon"/><br/>
              <div className="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}} className="card-title">10+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Libre<br/>Images d'essai</p>
              </div>
              </div>
              </div>
          </div>

          </div>
        <p id="abtHd" style={{textAlign:"center",fontFamily:"Branch",marginTop:"7%",fontSize:"38px",fontWeight:"700"}}>À propos de nous</p>

        <p id="ab" style={{textAlign:"justify",marginTop:"4%", textAlignLast: "center",fontSize:"19px"}}>CutOutWiz est l'un des principaux éditeurs d'images et de vidéos
    entreprise pour les entreprises du monde entier. Alors que le monde bouge
     vers un futur virtuel, la retouche photo de produits en ligne devenant
      de plus en plus accessibles, les images de produits HD sont ce qui
       stimuler les ventes. Nous sommes le partenaire de confiance en matière d'édition d'images en ligne pour
        de nombreuses entreprises de commerce électronique renommées dans le monde entier à travers un
         gamme variée d'industries. Nous proposons toutes les retouches d'image possibles
          service (de traitement) des services couramment utilisés tels que
           suppression de l'image d'arrière-plan, correction des couleurs, retouche d'image,
            mannequin invisible, jusqu'aux services même complexes comme l'image
             manipulation. La raison de notre succès est que nous croyons en
              client d'abord et fournir le meilleur service de qualité.</p>



       <p id="sucRcd" style={{textAlign:"center",fontSize:"38px",fontFamily:"Branch",marginTop:"7%",fontWeight:"700"}}>Enregistrement de réussite</p>
       <p style={{textAlign:"center",marginTop:"-2%",fontSize:"20px"}}>En chiffres</p>

        </div>
      </div>




{/* Count Record */}

<div className="spacew" style={{ backgroundPosition: 'center',
        backgroundColor:"#c5da9c",
        backgroundSize: 'cover',marginTop:'0%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '45vh'}}>



<div className="container">
<div className="row">
   
       <div className="col-md-3" id="countAnimFirst" style={{marginTop:'10%'}}>
        <div id="retouchCount" className="text-center">
          <img id="sucphn" src="assets/images/18m.png" height="90%" width="90%" />
       </div>
       <div className="fade-in-text">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>IMAGE <br/> PRODUCTION</p>
       <div className="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>2020-2021</button>
       </div>
       </div>

     </div>


       <div className="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" className="text-center">
       <img id="sucphn" src="assets/images/40k.png" height="90%" width="90%" />
       </div>
       <div className="fade-in-text40k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>IMAGE <br/> PRODUCTION</p>
       <div className="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>PER DAY</button>
       </div>
       </div>

       </div>

       <div className="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" className="text-center">
       <img id="sucphn" src="assets/images/9.2k.png" height="90%" width="90%" />
       </div>

       <div className="fade-in-text92k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>VIDÉO <br/> PRODUCTION</p>
       <div className="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>2020-2021</button>
       </div>
       </div>
       </div>

       <div className="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" className="text-center">
       <img id="sucphn" src="assets/images/54k.png" height="90%" width="90%" />
       </div>

       <div className="fade-in-text54k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>VIDÉO <br/> PRODUCTION</p>
       <div className="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>FIVE YEAR</button>
       </div>
       </div>
       </div>


       </div>



</div>


</div>

<br/>
<div className="row">
<div id="mobileViewOrange" style={{backgroundColor: '#c5da9c', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '286vh',marginTop:"-7%"}}></div>
</div>


{/* Image editing service */}


<div className="row">
 
<div id="service-top" style={{backgroundColor:"#e3e6d8",width:"100vw",marginTop:"-2%"}}>


   <div className="row"  style={{marginTop:"21%",marginBottom:"3%",height:"100vh"}}><div id="image-editing-service"></div>
  <div className="col-md-7">
    <div className="card-img-hidden">



<img src="assets/images/round for services.png"style={{ position: "absolute",
                marginTop: "60px",
                left: "0",marginLeft:"10%" }} height="70%" width="70%"  />


              <Slider {...settingsimg}>

              <div id="cf3">
              <img className="bottom" src="assets/images/Hair-Masking-after.png" height="100%" width="65%"style={{left:"7%" }}  />
              <img className="top" src="assets/images/Hair-Masking-before.png"height="100%" width="65%"style={{left:"7%"}}  />
              </div>





              <div id="cf3">
                <img className="bottom" src="assets/images/Ghost manniquin-01.png" height="100%" width="80%"  />
                <img className="top" src="assets/images/Ghost manniquin-02.png"height="100%" width="80%" />
                </div>

              <div id="cf3">
              <img className="bottom" src="assets/images/recolor-02.png"height="100%" width="80%" />
                <img className="top" src="assets/images/recolor-01.png" height="100%" width="80%"   />

                </div>


              <div id="cf3">
              <img className="top" src="assets/images/Shadow creation-02.png"height="80%" width="55%"style={{marginLeft:"18%",marginTop:"1%"}} />

                <img className="bottom" src="assets/images/Shadow creation-01.png" height="80%" width="55%" style={{marginLeft:"18%",marginTop:"1%"}}  />
              </div>


              <div id="cf3">
              <img className="bottom" src="assets/images/prafter.png"height="100%" width="70%" />
              <img className="top" src="assets/images/prbefore.png" height="100%" width="70%"  />

                </div>




              <div id="cf3">
              <img className="bottom" src="assets/images/color correction-01.png" height="80%" width="55%" style={{marginLeft:"17%",marginTop:"1%"}} />
              <img className="top" src="assets/images/color correction-02.png"height="80%" width="55%"style={{marginLeft:"17%",marginTop:"1%"}} />
              </div>


              <div id="cf3">
              <img className="bottom" src="assets/images/manipulation-before-1.png" height="70%" width="70%" style={{left:"17%",top:"15%"}}/>
              <img className="top" src="assets/images/manipulation-after-1.png"height="70%" width="70%" style={{left:"17%",top:"15%"}}/>
              </div>


              <div id="cf3">
              <img className="bottom" src="assets/images/Background-remove-after.png" height="70%" width="70%"style={{left:"17%",top:"13%"}}   />
             <img className="top" src="assets/images/Background-remove-before.png"height="70%" width="70%" style={{left:"17%",top:"13%"}}/>

              </div>


             </Slider><br/><br/>
    </div>
  </div>

  <div className="col-md-5">
  
    <p id="servicePar">Prestations de service</p>
    <p id="imgser" style={{marginTop:"-5%"}}>Service d'édition d'images</p>
    <hr  id="border10"/>

    <div className="card-img-hidden">
   <div id="text-changes-slider" >


   <div className="quotea"><p style={{fontSize:"46px"}}>D'IMAGE</p>
    <p   id="testret-re">MASQUAGE</p>
    </div>


    <div className="quotea" ><p style={{fontSize:"46px"}}>FANTÔME</p>
    <p   id="testret-re">MANNEQUIN</p>
    </div>

    <div className="quotea" ><p style={{fontSize:"46px"}}>DES PHOTOS</p>
    <p   id="testret-re">RECOLORATION</p>
    </div>

    <div className="quotea" ><p style={{fontSize:"46px"}}>D'OMBRE</p>
    <p   id="testret-re">CRÉATION</p>
    </div>

    <div className="quotea" ><p style={{fontSize:"46px"}}>PHOTO</p>
    <p   id="testret-ret">RETOUCHE</p>
    </div>


    <div className="quotea"><p style={{fontSize:"46px"}}>DE COULEUR</p>
    <p   id="testret-re">CORRECTION</p>
    </div>

    <div className="quotea"><p style={{fontSize:"46px"}}>D'IMAGES</p>
    <p   id="testret-re">MANIPULATION</p>
    </div>

    <div className="quotea"><p style={{fontSize:"46px"}}>DE L'ARRIÈRE-PLAN</p> 
    <p  id="testret">SUPPRESSION</p>
    </div>


  </div>




  </div>
</div>


<div id="refresh">
  <div className="col-md-7" id="service-ipad">
  <div className="large-screen-hidden">
  {/* <button onClick={refreshPage}>Refresh</button> */}

  <img src="assets/images/bannertest.png"style={{ position: "absolute",
                marginTop: "42%",
                left: "0"}} height="48%" width="100%"  />


            <Slider {...settingsimg}>


            <div id="cf3">
            <div className="quot"><p style={{fontSize:"46px",color:"#e4801c"}}>D'IMAGE</p>
             <p   id="testret-re">MASQUAGE</p>
           </div>
              <img className="bottom" src="assets/images/Hair-Masking-after.png" height="100%" width="65%"style={{left:"7%" }}  />
              <img className="top" src="assets/images/Hair-Masking-before.png"height="100%" width="65%"style={{left:"7%"}}  />
              </div>



              <div id="cf3">
              <div className="quot"><p style={{fontSize:"46px"}}>FANTÔME</p>
             <p   id="testret-re">MANNEQUIN</p>
           </div>
                <img className="bottom" src="assets/images/Ghost manniquin-01.png" height="100%" width="80%"  />
                <img className="top" src="assets/images/Ghost manniquin-02.png"height="100%" width="80%" />
                </div>

              <div id="cf3">
              <div className="quot"><p style={{fontSize:"46px"}}>DES PHOTOS</p>
             <p   id="testret-re">RECOLORATION</p>
           </div>
              <img className="bottom" src="assets/images/recolor-02.png"height="100%" width="80%" />
                <img className="top" src="assets/images/recolor-01.png" height="100%" width="80%"   />

                </div>

                <div id="cf3">
                <div className="quot"><p style={{fontSize:"46px"}}>D'OMBRE</p>
                 <p   id="testret-re">CRÉATION</p>
                </div>
              <img className="top" src="assets/images/Shadow creation-02.png"height="65%" width="38%"style={{marginLeft:"10%",marginTop:"1%"}} />

                <img className="bottom" src="assets/images/Shadow creation-01.png" height="65%" width="38%" style={{marginLeft:"10%",marginTop:"1%"}}  />
              </div>


              <div id="cf3">

              <div className="quot"><p style={{fontSize:"46px"}}>PHOTO</p>
                <p   id="testret-re">RETOUCHE</p>
              </div>
              <img className="bottom" src="assets/images/prafter.png"height="100%" width="70%" />
              <img className="top" src="assets/images/prbefore.png" height="100%" width="70%"  />

                </div>




              <div id="cf3">
              <div className="quot"><p style={{fontSize:"46px"}}>DE COULEUR</p>
                <p   id="testret-re">CORRECTION</p>
              </div>
              <img className="bottom" src="assets/images/color correction-01.png" height="80%" width="55%" style={{marginLeft:"10%",marginTop:"1%"}} />
              <img className="top" src="assets/images/color correction-02.png"height="80%" width="55%"style={{marginLeft:"10%",marginTop:"1%"}} />
              </div>


              <div id="cf3">
              <div className="quot"><p style={{fontSize:"46px"}}>D'IMAGES</p>
                <p   id="testret-remani  ">MANIPULATION</p>
              </div>
              <img className="bottom" src="assets/images/manipulation-before-1.png" height="70%" width="70%" style={{left:"10%",top:"15%"}}/>
              <img className="top" src="assets/images/manipulation-after-1.png"height="70%" width="70%" style={{left:"7%",top:"15%"}}/>
              </div>



            <div id="cf3">
              <div className="quot"><p style={{fontSize:"46px"}}>DE L'ARRIÈRE-PLAN</p>
                <p   id="testret-re">SUPPRESSION</p>
              </div>
              <img className="bottom" src="assets/images/Background-remove-after.png" height="70%" width="70%"style={{left:"10%",top:"18%"}} />
             <img className="top" src="assets/images/Background-remove-before.png"height="70%" width="70%" style={{left:"10%",top:"18%"}}/>

              </div>


             

              

             </Slider>

  </div>
</div>

<div className="col-md-5">

</div>

</div>


  </div>


</div>

</div>








{/* Video editing service */}

<div id="video-editing-service">
<div style={{backgroundColor:"#ffffff",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '85vh',marginTop:"-6%"}}>



<div className="container">
      <div className="row"style={{marginTop:"5%"}}>
    

  <div id="vdo-item" className="col-md-5">
        <p id="servicePar">Prestations de service</p>
    <p id="imgser" style={{marginTop:"-3%"}}>Service de montage vidéo</p>
    <hr  id="border11"/>

  <div id="container-target">
    <div id="js-nametag1"  style={{marginTop:"-4%"}}><p style={{fontSize:"46px"}}>VIDÉO</p>
    <p id="testret-add">RECADRAGE</p>
    </div>

    <div id="js-nametag2"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>TITRE</p>
      <p id="testret-add">D'AJOUT</p>
    </div>

    <div id="js-nametag3"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>SOUS-TITRES</p>
    <p id="testret-add">DÉPENDANCE</p>
    </div>

    <div id="js-nametag4"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>AUDIO</p>
    <p id="testret-add">MONTAGE</p>
    </div>
  </div>
</div>


  <div id="vdo-item" className="col-md-7">
        <br/>
   <div className="text-center" id="vdoSer" style={{marginTop:"9%"}}>

      <div id="container-target">
       <div id="video-size1" >  <video  height="80%" width="80%" controls="controls" poster="assets/images/cropping-large.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video></div>
       <div id="video-size2" style={{display:"none"}}>   <video  height="80%" width="80%" controls="controls" poster="assets/images/tittle.png"alt="video-cropping-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video></div>
       <div id="video-size3" style={{display:"none"}}>  <video  height="80%" width="80%" controls="controls" poster="assets/images/subtittle.png"alt="video-cropping-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video></div>
       <div id="video-size4" style={{display:"none"}}>  <video  height="80%" width="80%" controls="controls" poster="assets/images/Screenshot (7).png"alt="video-cropping-service-poster"> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video></div>
       </div>

       <input name="origin"style={{height:"20px", width:"20px"}} className="btn1show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} className="btn2show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} className="btn3show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} className="btn4show"type="radio" checked></input>

       </div>
   </div>

   
</div>


      <div id="apps"></div>
      </div>

</div>
</div>

{/* Apps with testimonial slider */}

<div className="row">
<div id="apps-large" style={{backgroundColor:"#c5da9c",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '122vh'}}>
<div>

  <p style={{color:"#c5da9c"}}>sadasd</p>
    <h1 style={{textAlign:"center",fontWeight:"700",marginTop:"3%",fontFamily:"Branch"}}>Applications et intégrations</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Nos applications sont présentes sur les principales plateformes de commerce électronique</p><br/><br/>
    </div>


    <div className="container">
    <div className="row">

      <div className="col-md"id="logopop">
      <a href="https://apps.shopify.com/cutoutwiz" target="_blank"><img src="assets/images/shopify-01.png" className="rounded mx-auto d-block" height="85px" width="220px" alt="Shopify logo"/>
     </a> </div>

      <div className="col-md" id="logopop"style={{marginTop:"7px"}}>
      <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank"><img src="assets/images/amazon-01.png" className="rounded mx-auto d-block" height="85px" width="220px" alt="Amazon logo"/>
      </a></div>

      <div className="col-md"id="logopop">
      <a href="https://app.cutoutwiz.com/" target="_blank"><img src="assets/images/cutoutwiz-01.png" className="rounded mx-auto d-block" height="85px" width="220px" alt="Cutoutwiz logo"/>
      </a></div>

      <div className="col-md"id="logopop">
      <a href="https://www.bigcommerce.com/apps/cutoutwiz/" target="_blank"><img src="assets/images/Big commerce-01.png"className="rounded mx-auto d-block" height="85px" width="220px" alt="Bigcommerce logo"/>
      </a></div>

      <div className="col-md"id="logopop">
      <a href="https://www.shotflow.com/" target="_blank"><img src="assets/images/shotflow-01.png" className="rounded mx-auto d-block" height="85px" width="220px"  alt="Shotflow logo"/>
      </a></div>

    </div>
    </div>

    <div className="container"id="overflow" style={{marginTop:"9%"}}>

        <Slider {...settings}>
          <div className="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" className="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div className="card-body">
                <p className="card-text"style={{textAlign:"center",fontSize:"13px",fontWeight:"600"}}>I am very pleased with their work.
                 The team is very patient and accommodating to all my requests. I will definitely work with them.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>zasy chua</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",height:"2px",marginTop:"-5%"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} className="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>


          <div className="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" className="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div className="card-body">
                <p className="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>Very good service, was very
                patient with me in my back and fro amendments. I would say it's very affordable too. Jobs are delivered.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Jia Jia</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} className="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div className="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" className="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div className="card-body">
                <p className="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I love this app. We've
                 been using CutOutWiz for some time. I am continually impressed with the results and stellar customer support.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Kamo Fitness</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} className="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div className="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" className="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div className="card-body">
                <p className="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I was having difficulties
                 with proper images and quality but the Rep called and walked me through proper image sizing and lighting.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Bèl Bagay Swimwear</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} className="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div className="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" className="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div className="card-body">
                <p className="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I have tried several image background removal services, some cheaper
than here. But remember you get what you pay.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>General Unique</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} className="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

        </Slider>
      </div>
  </div>

  </div>


{/* Plan  */}
<div className="row">
<div id="grenPhn" style={{backgroundColor:"#ffffff",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '88vh'}}>
<div id="prices"></div>
<div className="container">
  <p style={{color:"#ffffff"}}>asdasdasda</p>
  <p style={{color:"#ffffff"}}>asdasdasda</p>
    <h1 id="choose-plan" style={{textAlign:"center",fontFamily:"Branch",fontWeight:"700"}}>Consultez nos prix</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Nos forfaits sont exactement ce dont votre magasin a besoin</p><br/>

    <div className="row">

      <p style={{textAlign: "center",fontWeight:"700"}}>Nous proposons plusieurs options de tarification au choix
         de cela vous aidera à atteindre vos objectifs.
          Choisissez celui qui répond à vos exigences
           à la perfection. Au cas où vous chercheriez
            autre chose, ou souhaitez un devis de notre part pour
             toute sorte de personnalisation, n'hésitez pas à nous envoyer
              un texte via notre formulaire Contactez-nous.</p>

            </div>



           <div className="row"style={{marginTop:"6%"}}>


           <div className="col-md-4">


          <div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
        backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
          <br/>


            <div className="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
            <div className="card-title">
              <br/><br/>
            <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"1%"}}>RÉGIME DE BASE</p>
            <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px"}}>commence à partir de</p>
            </div>
              <div className="card-body"style={{marginTop:"-9%"}}>
                 <img src="assets/images/f-1.png" className="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
           </div>

          <div className="text-center">
            <p style={{marginTop:"-3%"}}>1-100 IMAGES/ORDRE</p>
            <p style={{marginTop:"-4%"}}>10 SANS-IMAGES</p>
            <p style={{marginTop:"-4%"}}>1 MOIS DE STOCKAGE GRATUIT</p>
            <p style={{marginTop:"-4%"}}>24/7 SERVICE CLIENT</p>

            <a href="https://app.cutoutwiz.com/" target="_blank">  <button type="button" id="button-order">COMMANDE</button></a>
          </div>
            <br/>
          </div>

          </div>


      </div>

      <div className="col-md-4">


<div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
<br/>


  <div className="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
  <div className="card-title">
    <br/><br/>
  <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"1%"}}>LA NORME</p>
  <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px"}}>commence à partir de</p>
  </div>
    <div className="card-body"style={{marginTop:"-9%"}}>
       <img src="assets/images/f-2.png" className="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
 </div>

<div className="text-center">
  <p style={{marginTop:"-3%"}}>101-500 IMAGES/ORDRE</p>
  <p style={{marginTop:"-4%"}}>10 SANS-IMAGES</p>
  <p style={{marginTop:"-4%"}}>2 MOIS DE STOCKAGE GRATUIT</p>
  <p style={{marginTop:"-4%"}}>24/7 SERVICE CLIENT</p>

  <a href="https://app.cutoutwiz.com/" target="_blank">   <button type="button" id="button-order">COMMANDE</button></a>
</div>
  <br/>
</div>

</div>


</div>

<div className="col-md-4">


<div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
<br/>


  <div className="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
  <div className="card-title">
    <button style={{backgroundColor:"#c5da98",marginLeft:"60%",padding:"6px 5px",border:"none",borderRadius:"0px 0px 10px 10px"}}>POPULAR</button>
    
  <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"4%"}}>PREMIUM PLAN</p>
  <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px",color:"#e3e6d8"}}>starts from</p>
  </div>
    <div className="card-body"style={{marginTop:"-9%"}}>
       <img src="assets/images/f-3.png" className="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
 </div>

<div className="text-center">
  <p style={{marginTop:"-3%"}}>500-ꝏ IMAGES/ORDRE</p>
  <p style={{marginTop:"-4%"}}>10 SANS-IMAGES</p>
  <p style={{marginTop:"-4%"}}>3 MOIS DE STOCKAGE GRATUIT</p>
  <p style={{marginTop:"-4%"}}>24/7 SERVICE CLIENT</p>

  <Link to="/contact-us" target="_blank"> <button type="button" id="button-order">NOUS CONTACTER</button></Link>
</div>
  <br/>
</div>

</div>


</div>



        </div>

    </div>

</div>
</div>
<div className="row">
<div id="priceColor" style={{backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '170vh'}}></div>
</div>


{/* Place an order */}

<div className="row">
<div id="place-order" style={{backgroundColor:"#c5da9c",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}><div id="how-it-works"></div>

      <div>
        <br/>
          <p style={{fontSize:"38px",textAlign:"center",fontWeight:"700",marginTop:"2%",fontFamily:"Branch"}}>Comment passer une commande</p>
             <p style={{fontSize:"20px",textAlign:"center",marginTop:"-1%"}}>Suivez simplement ces étapes simples, et nous partirons de là</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
              <video height="100%" width="100%"style={{marginTop:"2%"}}  controls autoplay> <source src="assets/images/Key-features-Video.mp4"></source></video>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>


          <div className="row" style={{paddingLeft:"2%",paddingRight:"2%",marginTop:"5%"}}>
            <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-1.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div className="card-body">
                <h4 className="card-title">Étape 1:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"id="btmspace" style={{fontWeight:"700",fontSize:"13px"}}>s'identifier<br/> <span  style={{color:"white"}}>abonnement préféré</span> </p>
              </div>

              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>

              <img src="assets/images/S-2.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div className="card-body">
                <h4 className="card-title">Étape 2:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Choisi ton<br/>plan d'abonnement préféré<span id="prefer" style={{color:"white"}}><br/>preferred</span></p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-3.png"  width="30%" height="30%" alt="Image icon"/><br/>

              <div className="card-body">
                <h4 className="card-title">Étape 3:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Allez à votre<br/>compte pour passer une commande</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-4.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div className="card-body">
                <h4 className="card-title">Étape 4:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Télécharger le<br/>les images que vous souhaitez que nous modifiions</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-5.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div className="card-body">
                <h4 className="card-title">Étape 5:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p className="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Le meilleur éditeur de photos<br/>traiter les photos pour vous</p>
              </div>
              </div>
          </div>

          <div className="col-6 col-md">
          <div className="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-6.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div className="card-body">
                <h4 className="card-title">Étape 6:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p  className="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Download<br/>les photos retouchées<span id="prefer"  style={{color:"white"}}>for you</span></p>
              </div>
              </div>
          </div>

          </div>


</div>
</div>





{/* Contact us */}
<div className="row">
<div style={{backgroundColor:"#e3e6d8",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '114vh'}}>


      <div className="row"id="hidecol3">
        <div  className="col-md-3"></div>
        <div className="col-md-5">
        <img src="assets/images/We are here illustration.png" id="cont-pic"style={{marginTop:"31%"}} className="rounded mx-auto d-block" width="70%" height="70%" alt=""/>

        <a href="/contact-us" target="_blank"><img id="iconPM" src="assets/images/contact us-01.png"  style={{marginTop:"-57%",position:"absolute",left:"57%"}}/></a>


        </div>


        <div className="col-md-4"></div>
      </div>


      <div className="row"id="hide-on-large-col3">
        <img src="assets/images/We are here illustration.png" id="cont-pic"style={{position:"relative"}} className="rounded mx-auto d-block" width="70%" height="70%" alt=""/>
        <a href="/contact-us" target="_blank"><img id="iconPM" src="assets/images/contact us-01.png"  style={{marginTop:"-52%",position:"absolute",left:"57%"}}/></a>
      </div>




        <div className="row" style={{marginTop:"-2%"}}>
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <p id="we-are-here" style={{fontSize:"38px"}}>Nous sommes ici pour</p>
          </div>
          </div>
          <div id="blogs-id"></div>
          <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <p id="we-are-here-sec" style={{fontSize:"45px",fontWeight:"700",textAlign:"center",marginTop:"-4%",fontFamily:"Branch"}}>Répondez à toutes vos questions</p>

          </div>

          <div className="col-md-3"></div>


          </div>

          <div id="blog"></div>

        </div>
 </div>


 <div className="row">
        <div id="grensp" style={{backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:'39vh',width:'100vw'}}></div>
</div>

{/* Blog Banner with blog section */}

<div className="row">
        <div id="blogphn" style={{backgroundImage: `url(assets/images/Last-part-Green.png)`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:'130vh',width:'100vw'}}>

          <p style={{color:"#c5da9c"}}>asdasdasd<br/></p>

<h1 style={{textAlign:"center",fontFamily:"Branch",fontWeight:"700"}}>Nos blogs</h1>

<p style={{fontSize:"20px",textAlign:"center"}}>En savoir plus sur les différents secteurs verticaux et pratiques de l'industrie dans nos blogs</p>


            <div className="container">
              <div className="row" style={{marginTop:"6%"}}>
                <div className="col-md-4">

        <Card style={{boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <div className="containerback">

          <Link to='/blog'>
          <img src="assets/images/white-back642-863.png" width="100%" height="100%" alt="Read Our Blogs photo"/>

        <div className="centered">
          <h2 style={{color:"black"}}>Lisez notre</h2>
          <h3 style={{color:"black",fontWeight:"600",fontSize:"35px"}}>BLOGS</h3>

        </div>
        </Link>
        </div>
        </Card>
                </div>


                <div className="col-md-4">
      <Card  style={{height:"98%",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
        <img src="assets/images/types-of-photography.jpg" height="58%" width="100%" alt="Celebratory lights and decorations on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/types-of-photography-which-one-drive-your-inner-passion-most" style={{textDecoration:"none",color:"black"}}><b>Types of Photography: Which one drives your inner passion most?</b></Link>
          <p style={{textAlign:"justify"}}>Photographs are our way of capturing the world as we see it. It’s a medium of expressing our inner thoughts and holding...</p>
          <Link to="/types-of-photography-which-one-drive-your-inner-passion-most"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>


      <div className="col-md-4">
      <Card  style={{height:"98%",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
        <img src="assets/images/Blog-23.jpg" height="58%" width="100%" alt="Celebratory lights and decorations on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/easy-product-photography-solutions-for-small-business" style={{textDecoration:"none",color:"black"}}><b>Easy Product Photography Solutions for Small Business</b></Link>
          <p style={{textAlign:"justify"}}>Since you are considering starting your own small business, we can guess that you are a cheerful aspirant filled with passion...</p>
          <Link to="/easy-product-photography-solutions-for-small-business"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>



              </div>

              
            </div>


        </div>
        </div>

{/* Ourr presence section */}


<div className="row">


          <br/><br/><br/><br/>

          <p id="mapid" style={{fontSize:"45px",fontWeight:"700",textAlign:"center",fontFamily:"Branch"}}>Notre présence</p>

</div>


{/* map */}

<div className="containerss" >
<div className="row">
<div id="fotphn" >

        <img  id="map-img-phn" src="assets/images/map.png" className="rounded mx-auto d-block" width="100%" height="100%" alt=""/>
        
       <img className="rounded mx-auto d-block" width="100%" height="100%" src="assets/images/map-(1871-900).png" />


      </div>

      </div>
      </div>



{/* Footer */}

<div className="row" id="fot-phn">
        <div className="footer"style={{backgroundColor:"#e3e6d8",width:"100vw",marginTop:"0%"}}>
    <div className="container">
    <div className="row">
    <div className="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/logo-footer.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#01302b",marginTop:"4%",fontWeight:"500"}}>CutOutWiz est l'une des principales sociétés de montage d'images et de vidéos pour les entreprises du monde entier.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" className="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" className="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" className="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" className="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" className="fa fa-instagram"></a>
    </div>

        <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"#01302b",fontSize:"20px"}}>Menu</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <a href="/"   style={{textDecoration:"none",color:"#01302b"}}>Maison</a> <br/>
         <a href="/#apps" style={{textDecoration:"none",color:"#01302b"}}>Fonctionnalités</a><br/>
         <a href="/#image-editing-service" style={{textDecoration:"none",color:"#01302b"}}>Prestations de service</a><br/>
         <a href="/#prices"   style={{textDecoration:"none",color:"#01302b"}}>Tarification</a><br/>
         <a href="/#blog"  style={{textDecoration:"none",color:"#01302b"}}>Blogues</a>
            </p>
        </div>

        <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"#01302b",fontSize:"20px"}}>Fonctionnalités</b>
            <p style={{color:"#01302b",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#01302b"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> Shotflow</a>
            </p>
        </div>

        <div className="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"#01302b",fontSize:"20px"}}>Liens utiles</b>

          <p style={{color:"#01302b",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#01302b"}}>Politique de confidentialité</Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#01302b"}}>Termes et conditions</Link><br/>
         <Link to="/contact-us" target="_blank"style={{textDecoration:"none",color:"#01302b"}}>Nous contacter</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#01302b"}}>S'inscrire</a> <br/>
          </p>
        </div>


      <div className="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"#01302b",fontSize:"20px"}}>Notre adresse</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>

      </div>
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Conçu et développé par <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>

  </div>
  </div>

   </div>


  );
 }

export default France;


