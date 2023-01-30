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
const $ = window.$;

var c=1,p=1,o=1,timer;

function Dutch(props)  {

  
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
      <div class="container" style={{marginTop:"5%"}}>
          <div class="row">

            <div id="type-text" class="col-md-5"style={{marginTop:"13%"}}>
                <p id="we-do" style={{fontSize:"38px",fontFamily:"Branch",fontWeight:"700"}}>Wij doen

Afbeelding en video</p>
                <p id="we-doI" style={{fontSize:"38px",fontFamily:"Branch",marginTop:"-30px",fontWeight:"700"}}>
                <Typical
                    steps={['Bewerken', 1000, 'Opnieuw kleuren', 500, 'Retoucheren', 500, 'Automatisering', 500]}
                    loop={Infinity}
                    wrapper="p"
                />
                </p>


                <p style={{fontSize:"20px",fontFamily:"Poppins"}}>Uw one-stop<br/>
                oplossing voor postproductie van inhoud</p>

                <div class="row">
                  <div class="col-6 col-md-4">
                  <a class="" href="https://app.cutoutwiz.com/"target="_blank"><button class="button1">GRATIS PROEF</button> </a></div>

                <div class="col-6 col-md-8">
                <Link to="/nl/contact-us" ><button type="button" id="button2">GRATIS OFFERTE</button></Link>
                </div>

                </div>

              </div>

              <div id="img-banner" class="col-md-7">
<div style={{marginTop:"10%"}} >
                 <img id="back-cover"style={{}} src="assets/images/banner-model-before.png"height="100%" width="100%" /> 

                 {/* <div id="cf3s">

<img id="back-cover" class="bottom" src="assets/images/banner-model-after.png"height="100%" width="100%" />
<img id="back-cover" class="top" src="assets/images/banner-model-before.png" height="100%" width="100%"  />

  </div> */}

</div>



                <div class="hide-large">
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

<div class="cardid" style={{backgroundImage: `url('assets/images/CUTOUTWIZ WEBSITE LIGHT VERSION L-03.png')`, backgroundPosition: 'center',
backgroundColor:"#062220",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height:'104vh',
        width:'100vw'
}}>

      <div class="container">
      <div class="row">
            <div class="col-6 col-md">
          <div class="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/image.png"  width="30%" height="10%" alt="Image icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  class="card-title">16,500+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Afbeelding<br/>Dagelijks verwerkt</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/team.png" width="30%" height="10%" alt="Team icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  class="card-title">500+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Team<br/>Leden</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/support.png"  width="30%" height="10%" alt="Support icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}id="text">
                <h4 style={{color:"#000000"}}  class="card-title">365 Dagen</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Klant<br/>Steun
</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{border:"black",width: "100%",borderRadius:"10px",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/delivery.png"  width="30%" height="10%" alt="clock icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}}  class="card-title">12 Uren</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Of minder<br/>Tijd om te bezorgen</p>
              </div>
              </div>
          </div>

          <div class="col-md">
          <div class="card-hidden">
          <div class="card" style={{border:"black",borderRadius:"10px",width: "100%",backgroundColor:"#e3e6d8",color:"white",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
              <img src="assets/images/free-trial.png"  width="30%" height="10%" alt="Free trial icon"/><br/>
              <div class="card-body"style={{marginTop:"-3%"}}>
                <h4 style={{color:"#000000"}} class="card-title">10+</h4>
                <hr style={{width:"32%",border:"1px solid #000000",backgroundColor:"#000000",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{marginTop:"-7%",fontWeight:"500",color:"#000000"}}>Vrij<br/>Proefafbeeldingen</p>
              </div>
              </div>
              </div>
          </div>

          </div>
        <p id="abtHd" style={{textAlign:"center",fontFamily:"Branch",marginTop:"7%",fontSize:"38px",fontWeight:"700"}}>Over ons</p>

        <p id="ab" style={{textAlign:"justify",marginTop:"4%", textAlignLast: "center",fontSize:"19px"}}>CutOutWiz is een van de toonaangevende bedrijven voor beeld- en videobewerking voor bedrijven over de hele wereld. Nu de wereld op weg is naar een virtuele toekomst, waarbij het online bewerken van productfoto's steeds toegankelijker wordt, zijn HD-productfoto's in wezen de drijvende kracht achter de verkoop. Wij zijn de vertrouwde online beeldbewerkingspartner voor veel gerenommeerde e-commercebedrijven over de hele wereld in een breed scala van industrieën. Wij bieden alle mogelijke beeldbewerkings- (verwerkings)diensten, van veelgebruikte diensten als achtergrondafbeelding verwijderen, kleurcorrectie, beeldretouchering, onzichtbare paspop tot zelfs complexe diensten zoals beeldmanipulatie. De reden achter ons succes is dat we geloven in de klant eerst en het leveren van de beste kwaliteit service.</p>



       <p id="sucRcd" style={{textAlign:"center",fontSize:"38px",fontFamily:"Branch",marginTop:"7%",fontWeight:"700"}}>Succesverslag</p>
       <p style={{textAlign:"center",marginTop:"-2%",fontSize:"20px"}}>In cijfers</p>

        </div>
      </div>




{/* Count Record */}

<div class="spacew" style={{ backgroundPosition: 'center',
        backgroundColor:"#c5da9c",
        backgroundSize: 'cover',marginTop:'0%',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '45vh'}}>



<div class="container">
<div class="row">
   
       <div class="col-md-3" id="countAnimFirst" style={{marginTop:'10%'}}>
        <div id="retouchCount" class="text-center">
          <img id="sucphn" src="assets/images/18m.png" height="90%" width="90%" />
       </div>
       <div class="fade-in-text">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>AFBEELDING <br/> PRODUCTIE</p>
       <div class="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>2020-2021</button>
       </div>
       </div>

     </div>


       <div class="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" class="text-center">
       <img id="sucphn" src="assets/images/40k.png" height="90%" width="90%" />
       </div>
       <div class="fade-in-text40k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>AFBEELDING <br/> PRODUCTIE</p>
       <div class="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>PER DAY</button>
       </div>
       </div>

       </div>

       <div class="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" class="text-center">
       <img id="sucphn" src="assets/images/9.2k.png" height="90%" width="90%" />
       </div>

       <div class="fade-in-text92k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>VIDEO <br/> PRODUCTIE</p>
       <div class="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>2020-2021</button>
       </div>
       </div>
       </div>

       <div class="col-md-3"id="countAnim" style={{marginTop:'10%'}}>
       <div id="retouchCount" class="text-center">
       <img id="sucphn" src="assets/images/54k.png" height="90%" width="90%" />
       </div>

       <div class="fade-in-text54k">
       <p style={{fontSize:"17px",fontWeight:"700",textAlign:"center"}}>VIDEO <br/> PRODUCTIE</p>
       <div class="text-center"style={{marginTop:"-5%"}}>
       <button id="rest" style={{backgroundColor:"#c5da9c",borderRadius:"20px",padding:"3px 21px",border:"none"}}>FIVE YEAR</button>
       </div>
       </div>
       </div>


       </div>



</div>


</div>

<br/>
<div class="row">
<div id="mobileViewOrange" style={{backgroundColor: '#c5da9c', backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '286vh',marginTop:"-7%"}}></div>
</div>


{/* Image editing service */}


<div class="row">
 
<div id="service-top" style={{backgroundColor:"#e3e6d8",width:"100vw",marginTop:"-2%"}}>


   <div class="row"  style={{marginTop:"21%",marginBottom:"3%",height:"100vh"}}><div id="image-editing-service"></div>
  <div class="col-md-7">
    <div class="card-img-hidden">



<img src="assets/images/round for services.png"style={{ position: "absolute",
                marginTop: "60px",
                left: "0",marginLeft:"10%" }} height="70%" width="70%"  />


              <Slider {...settingsimg}>

              <div id="cf3">
              <img class="bottom" src="assets/images/Hair-Masking-after.png" height="100%" width="65%"style={{left:"7%" }}  />
              <img class="top" src="assets/images/Hair-Masking-before.png"height="100%" width="65%"style={{left:"7%"}}  />
              </div>





              <div id="cf3">
                <img class="bottom" src="assets/images/Ghost manniquin-01.png" height="100%" width="80%"  />
                <img class="top" src="assets/images/Ghost manniquin-02.png"height="100%" width="80%" />
                </div>

              <div id="cf3">
              <img class="bottom" src="assets/images/recolor-02.png"height="100%" width="80%" />
                <img class="top" src="assets/images/recolor-01.png" height="100%" width="80%"   />

                </div>


              <div id="cf3">
              <img class="top" src="assets/images/Shadow creation-02.png"height="80%" width="55%"style={{marginLeft:"18%",marginTop:"1%"}} />

                <img class="bottom" src="assets/images/Shadow creation-01.png" height="80%" width="55%" style={{marginLeft:"18%",marginTop:"1%"}}  />
              </div>


              <div id="cf3">
              <img class="bottom" src="assets/images/prafter.png"height="100%" width="70%" />
              <img class="top" src="assets/images/prbefore.png" height="100%" width="70%"  />

                </div>




              <div id="cf3">
              <img class="bottom" src="assets/images/color correction-01.png" height="80%" width="55%" style={{marginLeft:"17%",marginTop:"1%"}} />
              <img class="top" src="assets/images/color correction-02.png"height="80%" width="55%"style={{marginLeft:"17%",marginTop:"1%"}} />
              </div>


              <div id="cf3">
              <img class="bottom" src="assets/images/manipulation-before-1.png" height="70%" width="70%" style={{left:"17%",top:"15%"}}/>
              <img class="top" src="assets/images/manipulation-after-1.png"height="70%" width="70%" style={{left:"17%",top:"15%"}}/>
              </div>


              <div id="cf3">
              <img class="bottom" src="assets/images/Background-remove-after.png" height="70%" width="70%"style={{left:"17%",top:"13%"}}   />
             <img class="top" src="assets/images/Background-remove-before.png"height="70%" width="70%" style={{left:"17%",top:"13%"}}/>

              </div>


             </Slider><br/><br/>
    </div>
  </div>

  <div class="col-md-5">
  
    <p id="servicePar">Services</p>
    <p id="imgser" style={{marginTop:"-5%"}}>Beeldbewerkingsservice</p>
    <hr  id="border10"/>

    <div class="card-img-hidden">
   <div id="text-changes-slider" >


   <div class="quotea"><p style={{fontSize:"46px"}}>AFBEELDING</p>
    <p   id="testret-re">MASKEREN</p>
    </div>


    <div class="quotea" ><p style={{fontSize:"46px"}}>GEEST</p>
    <p   id="testret-re">MANNEQUIN</p>
    </div>

    <div class="quotea" ><p style={{fontSize:"46px"}}>FOTO</p>
    <p   id="testret-re">HERKLEUREN</p>
    </div>

    <div class="quotea" ><p style={{fontSize:"46px"}}>SCHADUW</p>
    <p   id="testret-re">CREATIE</p>
    </div>

    <div class="quotea" ><p style={{fontSize:"46px"}}>FOTO</p>
    <p   id="testret-ret">RETOUCHEREN</p>
    </div>


    <div class="quotea"><p style={{fontSize:"46px"}}>KLEUR</p>
    <p   id="testret-re">CORRECTIE</p>
    </div>

    <div class="quotea"><p style={{fontSize:"46px"}}>AFBEELDING</p>
    <p   id="testret-re">MANIPULATIE</p>
    </div>

    <div class="quotea"><p style={{fontSize:"46px"}}>ACHTERGROND</p>
    <p  id="testret">VERWIJDERING</p>
    </div>


  </div>




  </div>
</div>


<div id="refresh">
  <div class="col-md-7" id="service-ipad">
  <div class="large-screen-hidden">
  {/* <button onClick={refreshPage}>Refresh</button> */}

  <img src="assets/images/bannertest.png"style={{ position: "absolute",
                marginTop: "42%",
                left: "0"}} height="48%" width="100%"  />


            <Slider {...settingsimg}>


            <div id="cf3">
            <div class="quot"><p style={{fontSize:"46px",color:"#e4801c"}}>AFBEELDING</p>
             <p   id="testret-re">MASKEREN</p>
           </div>
              <img class="bottom" src="assets/images/Hair-Masking-after.png" height="100%" width="65%"style={{left:"7%" }}  />
              <img class="top" src="assets/images/Hair-Masking-before.png"height="100%" width="65%"style={{left:"7%"}}  />
              </div>



              <div id="cf3">
              <div class="quot"><p style={{fontSize:"46px"}}>GEEST</p>
             <p   id="testret-re">MANNEQUIN</p>
           </div>
                <img class="bottom" src="assets/images/Ghost manniquin-01.png" height="100%" width="80%"  />
                <img class="top" src="assets/images/Ghost manniquin-02.png"height="100%" width="80%" />
                </div>

              <div id="cf3">
              <div class="quot"><p style={{fontSize:"46px"}}>FOTO</p>
             <p   id="testret-re">HERKLEUREN</p>
           </div>
              <img class="bottom" src="assets/images/recolor-02.png"height="100%" width="80%" />
                <img class="top" src="assets/images/recolor-01.png" height="100%" width="80%"   />

                </div>

                <div id="cf3">
                <div class="quot"><p style={{fontSize:"46px"}}>SCHADUW</p>
                 <p   id="testret-re">CREATIE</p>
                </div>
              <img class="top" src="assets/images/Shadow creation-02.png"height="65%" width="38%"style={{marginLeft:"10%",marginTop:"1%"}} />

                <img class="bottom" src="assets/images/Shadow creation-01.png" height="65%" width="38%" style={{marginLeft:"10%",marginTop:"1%"}}  />
              </div>


              <div id="cf3">

              <div class="quot"><p style={{fontSize:"46px"}}>FOTO</p>
                <p   id="testret-re">RETOUCHEREN</p>
              </div>
              <img class="bottom" src="assets/images/prafter.png"height="100%" width="70%" />
              <img class="top" src="assets/images/prbefore.png" height="100%" width="70%"  />

                </div>




              <div id="cf3">
              <div class="quot"><p style={{fontSize:"46px"}}>KLEUR</p>
                <p   id="testret-re">CORRECTIE</p>
              </div>
              <img class="bottom" src="assets/images/color correction-01.png" height="80%" width="55%" style={{marginLeft:"10%",marginTop:"1%"}} />
              <img class="top" src="assets/images/color correction-02.png"height="80%" width="55%"style={{marginLeft:"10%",marginTop:"1%"}} />
              </div>


              <div id="cf3">
              <div class="quot"><p style={{fontSize:"46px"}}>AFBEELDING</p>
                <p   id="testret-remani  ">MANIPULATIE</p>
              </div>
              <img class="bottom" src="assets/images/manipulation-before-1.png" height="70%" width="70%" style={{left:"10%",top:"15%"}}/>
              <img class="top" src="assets/images/manipulation-after-1.png"height="70%" width="70%" style={{left:"7%",top:"15%"}}/>
              </div>



            <div id="cf3">
              <div class="quot"><p style={{fontSize:"46px"}}>ACHTERGROND</p>
                <p   id="testret-re">VERWIJDERING</p>
              </div>
              <img class="bottom" src="assets/images/Background-remove-after.png" height="70%" width="70%"style={{left:"10%",top:"18%"}} />
             <img class="top" src="assets/images/Background-remove-before.png"height="70%" width="70%" style={{left:"10%",top:"18%"}}/>

              </div>
             </Slider>

  </div>
</div>

<div class="col-md-5">

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



<div class="container">
      <div class="row"style={{marginTop:"5%"}}>
    

  <div id="vdo-item" class="col-md-5">
        <p id="servicePar">Diensten</p>
    <p id="imgser" style={{marginTop:"-3%"}}>Videobewerkingsservice</p>
    <hr  id="border11"/>

  <div id="container-target">
    <div id="js-nametag1"  style={{marginTop:"-4%"}}><p style={{fontSize:"46px"}}>VIDEO</p>
    <p id="testret-add">BIJSNIJDEN </p>
    </div>

    <div id="js-nametag2"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>TITEL</p>
    <p id="testret-add"> BEWERKEN</p>
    </div>

    <div id="js-nametag3"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>ONDERTITEL</p>
    <p id="testret-add"> TOEVOEGING</p>
    </div>

    <div id="js-nametag4"  style={{marginTop:"-4%",display:"none"}}><p style={{fontSize:"46px"}}>AUDIO</p>
    <p id="testret-add"> TOEVOEGING</p>
    </div>
  </div>
</div>


  <div id="vdo-item" class="col-md-7">
        <br/>
   <div class="text-center" id="vdoSer" style={{marginTop:"9%"}}>

      <div id="container-target">
       <div id="video-size1" >  <video  height="80%" width="80%" controls="controls" poster="assets/images/cropping-large.png"alt="video-cropping-service-poster"> <source src="assets/images/Video_Cropping_Service_1.mp4"></source></video></div>
       <div id="video-size2" style={{display:"none"}}>   <video  height="80%" width="80%" controls="controls" poster="assets/images/tittle.png"alt="video-cropping-service-poster"> <source src="assets/images/Title_Addition_Service_1.mp4"></source></video></div>
       <div id="video-size3" style={{display:"none"}}>  <video  height="80%" width="80%" controls="controls" poster="assets/images/subtittle.png"alt="video-cropping-service-poster"> <source src="assets/images/Subtitile_Addition_Service_1.mp4"></source></video></div>
       <div id="video-size4" style={{display:"none"}}>  <video  height="80%" width="80%" controls="controls" poster="assets/images/Screenshot (7).png"alt="video-cropping-service-poster"> <source src="assets/images/Audio_Editing_Service_1.mp4"></source></video></div>
       </div>

       <input name="origin"style={{height:"20px", width:"20px"}} class="btn1show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} class="btn2show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} class="btn3show"type="radio" checked></input>&emsp;
        <input name="origin"style={{height:"20px", width:"20px"}} class="btn4show"type="radio" checked></input>

       </div>
   </div>

   
</div>


      <div id="apps"></div>
      </div>

</div>
</div>

{/* Apps with testimonial slider */}

<div class="row">
<div id="apps-large" style={{backgroundColor:"#c5da9c",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '122vh'}}>
<div>

  <p style={{color:"#c5da9c"}}>sadasd</p>
    <h1 style={{textAlign:"center",fontWeight:"700",marginTop:"3%",fontFamily:"Branch"}}>Apps en integraties</h1><br/>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Onze apps zijn opgenomen in de belangrijkste e-commerceplatforms</p><br/><br/>
    </div>


    <div class="container">
    <div class="row">

      <div class="col-md"id="logopop">
      <a href="https://apps.shopify.com/cutoutwiz" target="_blank"><img src="assets/images/shopify-01.png" class="rounded mx-auto d-block" height="85px" width="220px" alt="Shopify logo"/>
     </a> </div>

      <div class="col-md" id="logopop"style={{marginTop:"7px"}}>
      <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank"><img src="assets/images/amazon-01.png" class="rounded mx-auto d-block" height="85px" width="220px" alt="Amazon logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://app.cutoutwiz.com/" target="_blank"><img src="assets/images/cutoutwiz-01.png" class="rounded mx-auto d-block" height="85px" width="220px" alt="Cutoutwiz logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.bigcommerce.com/apps/cutoutwiz/" target="_blank"><img src="assets/images/Big commerce-01.png"class="rounded mx-auto d-block" height="85px" width="220px" alt="Bigcommerce logo"/>
      </a></div>

      <div class="col-md"id="logopop">
      <a href="https://www.shotflow.com/" target="_blank"><img src="assets/images/shotflow-01.png" class="rounded mx-auto d-block" height="85px" width="220px"  alt="Shotflow logo"/>
      </a></div>

    </div>
    </div>

    <div class="container"id="overflow" style={{marginTop:"9%"}}>

        <Slider {...settings}>
          <div class="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" class="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontSize:"13px",fontWeight:"600"}}>I am very pleased with their work.
                 The team is very patient and accommodating to all my requests. I will definitely work with them.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>zasy chua</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",height:"2px",marginTop:"-5%"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>


          <div class="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" class="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>Very good service, was very
                patient with me in my back and fro amendments. I would say it's very affordable too. Jobs are delivered.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Jia Jia</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div class="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" class="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I love this app. We've
                 been using CutOutWiz for some time. I am continually impressed with the results and stellar customer support.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Kamo Fitness</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div class="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" class="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I was having difficulties
                 with proper images and quality but the Rep called and walked me through proper image sizing and lighting.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>Bèl Bagay Swimwear</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

          <div class="card"id="cardBack" style={{borderRadius:"10px",border:"black"}}>
              <img src="assets/images/quotes.png" class="rounded mx-auto d-block"  width="60" height="40" alt=""style={{marginTop:"11%"}}/><br/>
              <div class="card-body">
                <p class="card-text"style={{textAlign:"center",fontWeight:"200",fontSize:"13px",fontWeight:"600"}}>I have tried several image background removal services, some cheaper
than here. But remember you get what you pay.</p>
                 <p style={{textAlign:"center",fontWeight:"700",color:"#ffcc33"}}>General Unique</p>
              </div>
              <hr style={{width:"50%",margin: "auto",backgroundColor:"black",marginTop:"-5%",height:"2px"}}/>
              <img src="assets/images/star5.png" style={{marginTop:"3%"}} class="rounded mx-auto d-block"  width="30%" height="30%" alt=""/>
              <br/><br/>
          </div>

        </Slider>
      </div>
  </div>

  </div>


{/* Plan  */}
<div class="row">
<div id="grenPhn" style={{backgroundColor:"#ffffff",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '88vh'}}>
<div id="prices"></div>
<div class="container">
  <p style={{color:"#ffffff"}}>asdasdasda</p>
  <p style={{color:"#ffffff"}}>asdasdasda</p>
    <h1 id="choose-plan" style={{textAlign:"center",fontFamily:"Branch",fontWeight:"700"}}>Kies je abonnement</h1>
    <p style={{textAlign:"center",marginTop:"-1%",fontSize:"20px"}}>Onze pakketten zijn precies wat uw winkel nodig heeft</p><br/>

    <div class="row">

      <p style={{textAlign: "center",fontWeight:"700"}}>We bieden meerdere prijsopties om uit te kiezen
        van dat zal u helpen uw doelen te bereiken.
         Kies degene die aan uw eisen voldoet
          perfect. Voor het geval u op zoek bent naar
           iets anders, of wilt u een offerte van ons voor
            elke vorm van maatwerk, stuur ons gerust!
             een tekst via ons contactformulier.</p>

            </div>



           <div class="row"style={{marginTop:"6%"}}>


           <div class="col-md-4">


          <div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
        backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
          <br/>


            <div class="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
            <div class="card-title">
              <br/><br/>
            <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"1%"}}>BASIS PLAN</p>
            <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px"}}>begint vanaf</p>
            </div>
              <div class="card-body"style={{marginTop:"-9%"}}>
                 <img src="assets/images/1.19.png" class="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
           </div>

          <div class="text-center">
            <p style={{marginTop:"-3%"}}>1-100 AFBEELDINGEN/BESTEL</p>
            <p style={{marginTop:"-4%"}}>10 AFBEELDINGEN-GRATIS</p>
            <p style={{marginTop:"-4%"}}>1 MAAND GRATIS OPSLAG</p>
            <p style={{marginTop:"-4%"}}>24/7 KLANTEN SERVICE</p>

            <a href="https://app.cutoutwiz.com/" target="_blank">  <button type="button" id="button-order">Bestel nu</button></a>
          </div>
            <br/>
          </div>

          </div>


      </div>

      <div class="col-md-4">


<div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
<br/>


  <div class="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
  <div class="card-title">
    <br/><br/>
  <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"1%"}}>STANDAARD PLAN</p>
  <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px"}}>begint vanaf</p>
  </div>
    <div class="card-body"style={{marginTop:"-9%"}}>
       <img src="assets/images/0.99.png" class="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
 </div>

<div class="text-center">
  <p style={{marginTop:"-3%"}}>101-500 AFBEELDINGEN/BESTEL</p>
  <p style={{marginTop:"-4%"}}>10 AFBEELDINGEN-GRATIS</p>
  <p style={{marginTop:"-4%"}}>2 MAAND GRATIS OPSLAG</p>
  <p style={{marginTop:"-4%"}}>24/7 KLANTEN SERVICE</p>

  <a href="https://app.cutoutwiz.com/" target="_blank">   <button type="button" id="button-order">Bestel nu</button></a>
</div>
  <br/>
</div>

</div>


</div>

<div class="col-md-4">


<div style={{backgroundImage: `url(assets/images/1.19back.png)`,height:"100%",width:"70%",
backgroundRepeat: 'no-repeat',marginLeft:"11%"}}>
<br/>


  <div class="card"style={{width: "100%",marginLeft:"11%",marginTop:"3%" ,borderRadius:"10px",backgroundColor:"#e3e6d8",fontWeight:"600" ,border:"black",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)"}}>
  <div class="card-title">
    <button style={{backgroundColor:"#c5da98",marginLeft:"60%",padding:"6px 5px",border:"none",borderRadius:"0px 0px 10px 10px"}}>POPULAR</button>
    
  <p style={{textAlign:"center",fontWeight:"700",fontSize:"23px",marginTop:"4%"}}>PREMIUM PLAN</p>
  <p style={{textAlign:"center",marginTop:"-5%",fontSize:"13px",color:"#e3e6d8"}}>starts from</p>
  </div>
    <div class="card-body"style={{marginTop:"-9%"}}>
       <img src="assets/images/contact-us.png" class="rounded mx-auto d-block"  width="47%" height="47%" alt=""/>
 </div>

<div class="text-center">
  <p style={{marginTop:"-3%"}}>500-ꝏ AFBEELDINGEN/BESTEL</p>
  <p style={{marginTop:"-4%"}}>10 AFBEELDINGEN-GRATIS</p>
  <p style={{marginTop:"-4%"}}>3 MAAND GRATIS OPSLAG</p>
  <p style={{marginTop:"-4%"}}>24/7 KLANTEN SERVICE</p>

  <Link to="/nl/contact-us" target="_blank"> <button type="button" id="button-order">Neem contact met ons op</button></Link>
</div>
  <br/>
</div>

</div>


</div>



        </div>

    </div>

</div>
</div>
<div class="row">
<div id="priceColor" style={{backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '170vh'}}></div>
</div>


{/* Place an order */}

<div class="row">
<div id="place-order" style={{backgroundColor:"#c5da9c",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}><div id="how-it-works"></div>

      <div>
        <br/>
          <p style={{fontSize:"38px",textAlign:"center",fontWeight:"700",marginTop:"2%",fontFamily:"Branch"}}>Hoe een bestelling te plaatsen</p>
             <p style={{fontSize:"20px",textAlign:"center",marginTop:"-1%"}}>Volg gewoon deze eenvoudige stappen, en we zullen het vanaf daar overnemen</p>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-6">
              <video height="100%" width="100%"style={{marginTop:"2%"}}  controls autoplay> <source src="assets/images/Key-features-Video.mp4"></source></video>
              </div>
              <div class="col-md-3"></div>
            </div>
          </div>


          <div class="row" style={{paddingLeft:"2%",paddingRight:"2%",marginTop:"5%"}}>
            <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-1.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div class="card-body">
                <h4 class="card-title">Stap 1:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"id="btmspace" style={{fontWeight:"700",fontSize:"13px"}}>Log in <br/> <span  style={{color:"white"}}>preferred subscription</span> </p>
              </div>

              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>

              <img src="assets/images/S-2.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div class="card-body">
                <h4 class="card-title">Stap 2:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Choose your<br/>voorkeur abonnement<span id="prefer" style={{color:"white"}}><br/>preferred</span></p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-3.png"  width="30%" height="30%" alt="Image icon"/><br/>

              <div class="card-body">
                <h4 class="card-title">Stap 3:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Ga naar je<br/>account om een ​​bestelling te plaatsen</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-4.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div class="card-body">
                <h4 class="card-title">Stap 4:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Upload de<br/>afbeeldingen die u door ons wilt laten bewerken</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-5.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div class="card-body">
                <h4 class="card-title">Stap 5:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p class="card-text"style={{fontWeight:"700",fontSize:"13px"}}>De beste foto-editor<br/>verwerk de foto's voor je</p>
              </div>
              </div>
          </div>

          <div class="col-6 col-md">
          <div class="card" style={{width: "100%",borderRadius:"10px",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <img src="assets/images/S-6.png"  width="30%" height="30%" alt="Image icon"/><br/>
              <div class="card-body">
                <h4 class="card-title">Stap 6:</h4>
                <hr style={{width:"32%",border:"1px solid #ffcc33",backgroundColor:"#ffcc33",opacity:"1",marginTop:"-1%"}}></hr>
                <p  class="card-text"style={{fontWeight:"700",fontSize:"13px"}}>Downloaden<br/>de bewerkte foto's<span id="prefer"  style={{color:"white"}}>for you</span></p>
              </div>
              </div>
          </div>

          </div>


</div>
</div>





{/* Contact us */}
<div class="row">
<div style={{backgroundColor:"#e3e6d8",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '114vh'}}>


      <div class="row"id="hidecol3">
        <div  class="col-md-3"></div>
        <div class="col-md-5">
        <img src="assets/images/We are here illustration.png" id="cont-pic"style={{marginTop:"31%"}} class="rounded mx-auto d-block" width="70%" height="70%" alt=""/>

        <a href="/nl/contact-us" target="_blank"><img id="iconPM" src="assets/images/contact us-01.png"  style={{marginTop:"-57%",position:"absolute",left:"57%"}}/></a>


        </div>


        <div class="col-md-4"></div>
      </div>


      <div class="row"id="hide-on-large-col3">
        <img src="assets/images/We are here illustration.png" id="cont-pic"style={{position:"relative"}} class="rounded mx-auto d-block" width="70%" height="70%" alt=""/>
        <a href="/nl/contact-us" target="_blank"><img id="iconPM" src="assets/images/contact us-01.png"  style={{marginTop:"-52%",position:"absolute",left:"57%"}}/></a>
      </div>




        <div class="row" style={{marginTop:"-2%"}}>
          <div class="col-md-6"></div>
          <div class="col-md-6">
            <p id="we-are-here" style={{fontSize:"38px"}}>We zijn hier om</p>
          </div>
          </div>
          <div id="blogs-id"></div>
          <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6">
          <p id="we-are-here-sec" style={{fontSize:"45px",fontWeight:"700",textAlign:"center",marginTop:"-4%",fontFamily:"Branch"}}>Beantwoord al uw vragen</p>

          </div>

          <div class="col-md-3"></div>


          </div>

          <div id="blog"></div>

        </div>
 </div>


 <div class="row">
        <div id="grensp" style={{backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:'39vh',width:'100vw'}}></div>
</div>

{/* Blog Banner with blog section */}

<div class="row">
        <div id="blogphn" style={{backgroundImage: `url(assets/images/Last-part-Green.png)`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:'130vh',width:'100vw'}}>

          <p style={{color:"#c5da9c"}}>asdasdasd<br/></p>

<h1 style={{textAlign:"center",fontFamily:"Branch",fontWeight:"700"}}>Onze blogs</h1>

<p style={{fontSize:"20px",textAlign:"center"}}>Lees meer over verschillende branches en praktijken in onze blogs</p>


            <div class="container">
              <div class="row" style={{marginTop:"6%"}}>
                <div class="col-md-4">

        <Card style={{boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
          <div class="containerback">

          <Link to='/blog'>
          <img src="assets/images/white-back642-863.png" width="100%" height="100%" alt="Read Our Blogs photo"/>

        <div class="centered">
          <h2 style={{color:"black"}}>Lees onze</h2>
          <h3 style={{color:"black",fontWeight:"600",fontSize:"35px"}}>BLOGS</h3>

        </div>
        </Link>
        </div>
        </Card>
                </div>


                <div class="col-md-4">
      <Card  style={{height:"98%",boxShadow:"1px 2px 3px 4px rgba(12,12,12,0.2)",border:"black"}}>
        <img src="assets/images/types-of-photography.jpg" height="58%" width="100%" alt="Celebratory lights and decorations on a yellow background"/>
        <div style={{padding:"2%"}}>
        <Link to="/types-of-photography-which-one-drive-your-inner-passion-most" style={{textDecoration:"none",color:"black"}}><b>Types of Photography: Which one drives your inner passion most?</b></Link>
          <p style={{textAlign:"justify"}}>Photographs are our way of capturing the world as we see it. It’s a medium of expressing our inner thoughts and holding...</p>
          <Link to="/types-of-photography-which-one-drive-your-inner-passion-most"><button id="button7">Read More</button></Link>
         </div>
    </Card>
      </div>


      <div class="col-md-4">
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


<div class="row">


          <br/><br/><br/><br/>

          <p id="mapid" style={{fontSize:"45px",fontWeight:"700",textAlign:"center",fontFamily:"Branch"}}>Onze aanwezigheid</p>

</div>


{/* map */}

<div class="containerss" >
<div class="row">
<div id="fotphn" >

        <img  id="map-img-phn" src="assets/images/map.png" class="rounded mx-auto d-block" width="100%" height="100%" alt=""/>
        
       <img class="rounded mx-auto d-block" width="100%" height="100%" src="assets/images/map-(1871-900).png" />


      </div>

      </div>
      </div>



{/* Footer */}

<div class="row" id="fot-phn">
        <div class="footer"style={{backgroundColor:"#e3e6d8",width:"100vw",marginTop:"0%"}}>
    <div class="container">
    <div class="row">
    <div class="col-md-3"style={{marginTop:"4%"}}>
    <Link to="/" target="_blank"><img src="assets/images/logo-footer.png"style={{marginTop:"3%"}} width="170" height="40" alt=""/></Link>

    <p style={{textAlign:"justify",color:"#01302b",marginTop:"4%",fontWeight:"500"}}>CutOutWiz is een van de toonaangevende bedrijven voor beeld- en videobewerking voor bedrijven over de hele wereld.</p>
    <a href="https://www.facebook.com/cutoutwiz"target="_blank" class="fa fa-facebook"></a>
    <a href="https://twitter.com/cut_wiz?s=09"target="_blank" class="fa fa-twitter"></a>
    <a href="https://www.linkedin.com/company/cutoutwiz-ltd"target="_blank" class="fa fa-linkedin"></a>
    <a href="https://www.youtube.com/channel/UClIkCcEBksZigP56p593fDQ"target="_blank" class="fa fa-youtube"></a>
    <a href="https://www.instagram.com/accounts/login/"target="_blank" class="fa fa-instagram"></a>
    </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
            <b style={{color:"#01302b",fontSize:"20px"}}>Menu</b>

            <p style={{color:"#b7b9bb",marginTop:"8%"}}>
         <a href="/"   style={{textDecoration:"none",color:"#01302b"}}> Huis</a> <br/>
         <a href="/#apps" style={{textDecoration:"none",color:"#01302b"}}> Functies</a><br/>
         <a href="/#image-editing-service" style={{textDecoration:"none",color:"#01302b"}}>  Diensten</a><br/>
         <a href="/#prices"   style={{textDecoration:"none",color:"#01302b"}}>  Prijzen</a><br/>
         <a href="/#blog"  style={{textDecoration:"none",color:"#01302b"}}> Blogs</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"#01302b",fontSize:"20px"}}>Functies</b>
            <p style={{color:"#01302b",marginTop:"8%"}}>
            <a href="https://apps.shopify.com/cutoutwiz" target="_blank"  style={{textDecoration:"none",color:"#01302b"}}>Shoppify App</a> <br/>
            <a href="https://sellercentral.amazon.com/gspn/provider-details/Imaging/284b7303-cec9-403e-b763-375399824520?ref_=sc_gspn_ilst_idt-284b7303&localeSelection=en_US&sellFrom=US&sellIn=US" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> AmazonSPN </a><br/>
            <a href="https://app.cutoutwiz.com" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> Cutoutwiz</a><br/>
            <a href="https://www.bigcommerce.com/apps/cutoutwiz" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> BigCommerce App</a><br/>
            <a href="https://www.shotflow.com/" target="_blank" style={{textDecoration:"none",color:"#01302b"}}> Shotflow</a>
            </p>
        </div>

        <div class="col-6 col-md-2"style={{marginTop:"5%"}}>
        <b style={{color:"#01302b",fontSize:"20px"}}>Handige links</b>

          <p style={{color:"#01302b",marginTop:"8%"}}>
         <Link to="/privacy-policy" target="_blank"style={{textDecoration:"none",color:"#01302b"}}> Privacy beleid</Link> <br/>
         <Link to="/terms-and-conditions" target="_blank"style={{textDecoration:"none",color:"#01302b"}}> Regels en voorwaarden</Link><br/>
         <Link to="/nl/contact-us" target="_blank"style={{textDecoration:"none",color:"#01302b"}}>Neem contact met ons op</Link> <br/>
          <a href="https://app.cutoutwiz.com/" target="_blank" style={{textDecoration:"none",color:"#01302b"}}>Aanmelden</a> <br/>
          </p>
        </div>


      <div class="col-6 col-md-3"style={{marginTop:"5%"}}>
      <b style={{color:"#01302b",fontSize:"20px"}}>Ons adres</b> <br/>   <br/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10329.283883735325!2d90.39304891556642!3d23.749043274767246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc1fb12dbea63beca!2sCutOutWiz!5e0!3m2!1sbn!2sbd!4v1639129804206!5m2!1sbn!2sbd"
      width="70%" height="50%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>

      </div>

      </div>
    </div>
    <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Ontworpen en ontwikkeld door <Link to="/" target="_blank"  style={{textDecoration:"none",color:"white"}}>CutOutWiz</Link></p>

  </div>
  </div>

   </div>


  );
 }

export default Dutch;


