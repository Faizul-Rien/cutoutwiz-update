import React, { Component } from "react";
 
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";

 function PhotoStyle(props) {

    return(
        <div className="postphoto">
                     <Router >
      <Navigation />
      </Router>

            {/* META TAG AND META TITTLE */}

              <Helmet>
                <title>Photography Style Guide - CutOutWiz</title>
                <meta name="description" keywords= "Food Photography, Beginner photography" content="Photographing food lets you play with the ingredients and design the setting that would be most appealing to you. Food photographs bring great joy to both the photographer and the viewer."
                />
            </Helmet>



            <div id="button_back"style={{marginTop:"9%", backgroundColor: "#211f40",height: "100%",width: "100%"}}>

                 {/* BLOG TITTLE */}

            <p id="headpost"style={{color: "white",textAlign: "center",fontSize: "50px",top: "50%",fontWeight: "200"}}>Photography Style Guide</p>
            </div>



            <div class="container" style={{marginTop:"4%"}}>
            <div class="row">
            <div class="col-md-8" style={{height:"max-content"}}>



                  {/* BANNER IMAGE */}

                <img src="../../assets/images/photography-style-guide-1-cover.jpg"  width="100%" height="20%" alt="photography-style-guide-lens-info-marketing-camera-battery-black-yellow"/>


                {/* FIRST PARAGRAPH */}

                 <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>We all know that images are one of the main forms of advertisement and therefore photography is one of the key elements when it comes to advertising your brand. In today’s age of branding and identity, advertising images do much more than promote a product; it sells the persona of the brand as well. </p> <br/>



          


        {/* SECOND PARAGRAPH */}

        <p style={{fontSize:"18px",fontWeight:"700"}}>What is photography style guide?  </p>

                <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>It is exactly what it sounds like - A frame work to follow when creating images for a particular brand. In other words, it defines the standards that images must follow so that all related works have a specific visual language. It’s crucial that you have guidelines to your photo composition in order to maintain your company’s aesthetics. </p>




            {/* SUB-HEADING */}

           <p style={{fontSize:"18px",fontWeight:"700"}}>Why do you need photography style guide? </p>



        {/* DESCRIPTION */}


           <p style={{textAlign:"justify"}}>Consistency in your photography is an important piece of establishing your personal style, and can serve you well in business presenting a clear brand image. With a consistent and clear approach to a style guide and branding, it becomes much easier for a brand to make its mark and become recognizable to its target audience. </p>



        {/* SUB-HEADING */}

           <p style={{fontSize:"18px",fontWeight:"700"}}>How do you create your own style guide?  </p>

           {/* DESCRIPTION */}

           <p style={{textAlign:"justify"}}>The technical and creative set of skills required usually cross more than one photography genre. As a beginner many of us photographers take a snap of whatever we see is exciting without being concerned about the continuity between each photo. If you want to find your photography guideline, ask yourself these following questions: </p>



        <ol>
            <li>What are your company goals with photography? </li>
            <li>Which category of clients are you targeting? </li>
            <li>What are your photography materials? </li>
            <li>What are your photography inspirations? </li>
            <li>What story do you want to convey with your photographs? </li>
        </ol>

        {/* DESCRIPTION */}
           <p style={{textAlign:"justify"}}>These simple questions have much more depth to look into. Once you’ve answered these questions, you’ll be able to understand your style of photography and focus on a common theme. After that you have to understand the various aspects of the photograph itself.  
<br/><br/>
There’s various genre of photography that includes wedding, event, product, abstract, nature, fine art, architectural, wildlife, photojournalism, scientific, aerial, etc. </p>

  

<p style={{fontSize:"18px",fontWeight:"700"}}>Let’s know more about depth of creating a style for your brand.   </p>



<p style={{textAlign:"justify"}}>
If your company is for wedding photography you will most likely focus on the following elements which are; Portraits, natural lighting, candid photographs that express emotions or have wildlife in the background.  
<br/>
On the other hand, we have product photography companies that focusses on lighting terminology, artificial background, all in all making a certain product stand out.  
<br/>
Implementing a photo style guide effectively can be tricky. Choosing your photography style doesn’t just stop at choosing a genre it also includes the composition of your photos such as: 
</p>


<ul>
    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Subjects </p>
    <p style={{textAlign:"justify"}}>
    A single photograph can show several things, the point where you’ve focused in the photograph and also, it’s entire figurative point of views.  
<br/><br/>
For example:  
<br/>
It is the emotions of the subjects or the position of the object that you represent, while keeping in mind what the background is representing in that situation as well.  
<br/>
The image on the left is just a lamp, while on the right we have an image that is visualising a lamp along with other furniture as well. The image on the right simply represents what your brand has to offer in one single photo. 
</p>

<img src="../../assets/images/Lamp-focus-diffence.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="Lamp-focus-diffence"/>
<br/>
    </li>
    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Colour palette </p>

       <p style={{textAlign:"justify"}}>   One particular colour palette is usually followed by brand that the normally matches the established brand-guide or theme. Identify what your brand is about so you can align with relevant colors, example: your company emphasises on the fun or entertaining aspects, you’ll most likely be using bright colours for your palette. On the other hand, or your brand is targeted towards formal and conventional part of audience. In that case you’ll be choosing subtle or pastel colours for your palette. 
   </p>
    </li>
    

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Positioning & framing  </p>

       <p style={{textAlign:"justify"}}>  This might seem like a small function but it represents elements of a scene to create a frame that is within your frame. So, know your focus and be creative. Take a look at the difference between images below. The difference might be very subtle but the image on the right with a good framing is more pleasing to the eye and catches one's attention.  
   </p>

   <img src="../../assets/images/framing-of-glasses.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="framing-of-glasses"/>
<br/>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Consistency </p>

       <p style={{textAlign:"justify"}}> After the following the previous steps, try to use a general idea of what you’ve worked on and go around with those selected contents and elements.  
   </p>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Editing  </p>

       <p style={{textAlign:"justify"}}>   This is the most crucial part of your composition as it solely adds the touch or look that can be identified and can be linked to your specific brand. Take a read through The Importance of Creative Image Editing for Product Photos. to get and overview of how you can add a touch of creativity to make your brand stand out from the others. 
   </p>
    </li>
</ul>


<p style={{textAlign:"justify"}}> 
To get inspiration understand how a brand represents its product or services through photography, look at brands that falls under your genre and study their visual aspects and advertising materials.  

<br/><br/>

We adapt to visual images and process them quickly and profoundly. Style guide is a powerful tool to work with, and can either help or harm your designs depending on how it is used. To know about how A photography style guide can build or break your post-production efficiency keep an eye on our next blog.  
</p>

             </div>







{/* END */}











             <div className="col-md-4">

            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/types-of-photography.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/types-of-photography-which-one-drive-your-inner-passion-most"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>Types Of Photography: Which One Drives Your Inner Passion Most?</p>
                </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>Photographs are our way of capturing the world as we see it. It’s a medium of
                     expressing our inner thoughts and holding onto memories close</p>
            </div>
            </div>
            </div>


            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
                </div>
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>7 Creative Winter Marketing Ideas For E-Commerce Businesses</p>
               </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>The beginning of winter fills our minds with
                numerous excitements. It’s the season of Christmas, snowfall, and New Year. With a sudden change in weather</p>
            </div>
            </div>
            </div>



            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/Blog-21.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/top-shopify-marketing-strategy-for-sellers"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>Top Shopify Marketing Strategy For Sellers</p>
            </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>E-commerce platforms like Shopify are ultimate
                 friends of small business owners. The platform allows you to build your own website and shine in the world</p>
            </div>
            </div>
            </div>

            <div class="row">
            <div class="col-4 col-md-4">
                <div class="row-8">
            <img src="../../assets/images/Blogpost.jpg"  width="100%" height="100%" alt=""/>
                </div>

            {/* <div class="row-4"style={{marginTop:"37%"}}>
            <img src="assets/images/latestblog.jpg"  width="100%" height="100%" alt=""/>
            </div> */}
            </div>

            <div class="col-8 col-md-8">
            <div class="row-4">
            <Link to="/5-important-photography-tips-for-beginners"style={{textDecoration:"none"}}>
                <p style={{fontSize:"18px",fontFamily:"poppins",color:"black"}}>5 Important Photography Tips For Beginners</p>
                </Link>
                </div>
            <div class="row-8">
                <p style={{fontSize:"14px",fontWeight:"100",opacity:"0.6"}}>Photographs help us freeze a
                certain moment and then relive it again and again. It enables us to capture our happiest memories into a frame</p>
            </div>
            </div>
            </div>
<br/>
<br/>
           <p style={{fontWeight:"700",fontSize:"20px",fontFamily:"poppins"}}>Share:</p>
           <hr style={{width:"80%",border:"3px solid",backgroundColor:"black",opacity:"1",marginTop:"-3%"}}></hr>


           <div class="row">
         <div class="col-4 col-md-4">
           <a href="https://www.facebook.com/sharer.php?u=https://cutoutwiz.com/5-important-photography-tips-for-beginners/"target="_blank"><img src="../../assets/images/facebookblack.png"height="100%" width="50%" alt=""/></a>
        </div>

        <div class="col-4 col-md-4">
          <a href="https://twitter.com/intent/tweet?text=%20https://cutoutwiz.com/5-important-photography-tips-for-beginners/"target="_blank"> <img src="../../assets/images/twit.png"height="100%" width="50%" alt=""/></a>
        </div>

        <div class="col-4 col-md-4">
          <a href="    https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fcutoutwiz.com%2F5-important-photography-tips-for-beginners%2F%26title%3D5%2520Important%2520Photography%2520Tips%2520for%2520Beginners%2520%25E2%2580%2593%2520CutOutWiz%26summary%3D%26source%3Dhttps%3A%2F%2Fcutoutwiz.com%2F5-important-photography-tips-for-beginners%2F"target="_blank"> <img src="../../assets/images/linkdn.png"height="100%" width="50%" alt=""/></a>
        </div>
    </div>





</div>
            </div>
        </div>
        <br/><br/>
        <p style={{textAlign:"center",color:"white",padding:"8px",backgroundColor:"black"}}>Designed And Developed By CutOutWiz</p>
        </div>
    );

 }

 export default PhotoStyle;