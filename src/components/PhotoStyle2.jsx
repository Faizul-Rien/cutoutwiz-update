import React, { Component } from "react";
 
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";
 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation} from "./";

 function PhotoStyle2(props) {

    return(
        <div className="postphoto">
                     <Router >
      <Navigation />
      </Router>

            {/* META TAG AND META TITTLE */}

              <Helmet>
                <title>Photography Style Guide: How It Can Make or Break Your Image Post-Processing </title>
                <meta name="description" keywords= "Food Photography, Beginner photography" content="Photographing food lets you play with the ingredients and design the setting that would be most appealing to you. Food photographs bring great joy to both the photographer and the viewer."
                />
            </Helmet>



            <div id="button_back"style={{marginTop:"9%", backgroundColor: "#211f40",height: "100%",width: "100%"}}>

                 {/* BLOG TITTLE */}

            <p id="headpost"style={{color: "white",textAlign: "center",fontSize: "50px",top: "50%",fontWeight: "200"}}>Photography Style Guide: How It Can Make or Break Your Image Post-Processing </p>
            </div>



            <div class="container" style={{marginTop:"4%"}}>
            <div class="row">
            <div class="col-md-8" style={{height:"max-content"}}>



                  {/* BANNER IMAGE */}

                <img src="../../assets/images/Photography-Style-Guide-2-Cover.jpg"  width="100%" height="20%" alt="photography-style-guide-info-poster-image-camera-lens"/>


                {/* FIRST PARAGRAPH */}

                 <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>No matter where you are in your photography journey, there is always more to learn. Only when you try to do more than just capture life, you will realize the meaning of photography. You should always keep track of the composition and technical elements that best help you convey what you want to say. 
<br/>
One of the main attributes of a professional photographer is the ability to look consistent. 

To know more about the basics of Photography Style Guide and how to achieve your own style guide check our previous blog<a href="https://www.cutoutwiz.com/photography-style-guide" target="none"> Photography Style Guide: What It Is & Why You Need It</a>. Photo editing is not an afterthought; for today’s photographers, it’s an important part of the creative process. In his blog we’ll talk about how your photography style guide impacts your image post-processing. So, let’s get right to it.   </p> <br/>



          


        {/* SECOND PARAGRAPH */}

        <p style={{fontSize:"18px",fontWeight:"700"}}>How your photography style guide affects our image post processing. </p>

                <p style={{textAlign:"justify",marginTop:"4%",fontFamily:"poppins"}}>Before you click an image, you should imagine what the image looks like after you’ve processed it and then go for your shoot. If it’s the other way round then you’re probably a beginner in photography. You need to edit images in your computer but you don’t know where to get started. So, you sit with your editing software for hours, trying to figure out which of its tools can achieve the look you desperately want to replicate. </p>




            {/* SUB-HEADING */}

           <p style={{fontSize:"18px",fontWeight:"700"}}>Let’s get to know the common photography mistakes and how to avoid them.  </p>


            <ol>
            <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Out-of-focus Images  </p>

       <p style={{textAlign:"justify"}}>  This is the most common and easy mistake to make. One small movement by a subject or a misinterpretation by your camera then you’ll encounter some unpleasant surprises when you view your images later. Make sure to re adjust the focus on your subject whether you’re on manual-mode or auto-mode. If you’ve entered manual mode, you will have to get used to placing your hands on the focus ring and constantly making adjustments as you and your subject move. If you leave it to the camera, in auto mode, you need to make sure it is in the correct focus mode and the grid that tells the camera to focus on is in the correct position. 
   </p>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Unsharp Images  </p>

       <p style={{textAlign:"justify"}}> Photos that aren’t sharp and lack detail is a bit like a blurred image but here the whole image lack details event the focused areas as well. There is still a lot of work to be done to get good details in the photos. You need good lighting to get your details right, and of course keep the camera is focus too! In the image below you can see the slight difference between the sharpness. This causes the image hard to work with while post-processing. 
   </p>

   <img src="../../assets/images/Image-sharpness.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="smiling-girl-short-brown-curly-hair-white-t-shirt-collage-image"/>
<br/>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Images With Spots    </p>

       <p style={{textAlign:"justify"}}>  Do you see small dots all over your images? This happens because you might constantly keep changing your lenses specially outdoors or on windy day.  
   </p>

   <p style={{fontSize:"18px",fontWeight:"700"}}>   Pro tip:  </p>

<p style={{textAlign:"justify"}}>    Know what kind of images you’re going shoot
 before heading out. Consider changing your lenses before head according to your
 shoot for the day.  </p>
    </li>


    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Too Much or too little Exposure   </p>

       <p style={{textAlign:"justify"}}> If your exposure is too bright, your highlights will be blown out and the detail won’t be recoverable when processing. On the other hand, if your exposure is too dark, the shadows will be grainy and discolored when you bring them up in processing. This image is an example of a bright exposure  
   </p>

   <img src="../../assets/images/High exposure.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="happy-smiling-girl-with-brown-hair-blurred-background"/>
<br/>

<p style={{textAlign:"justify"}}>To avoid this, you can use the exposure compensation adjustment along with any of your camera's exposure modes. Or manually adjust your ISO setting while adjusting your focus. 

 <br/><br/>

Avoiding these common mistakes, while using tips from our<a href="https://www.cutoutwiz.com/photography-style-guide" target="none"> previous blog</a> to create your own style guide you can bring a huge difference to your image post-processing. It makes the processing much easier and effortless while these mistakes are avoided. After you’ve kept these in mind and have done your shoot using your style guide.  You may want to know some techniques to keep your photo editing consistent as well.   </p>

    </li>

 </ol>


 <p style={{fontSize:"18px",fontWeight:"700"}}> How to keep your photo editing consistent?  </p>

<p style={{textAlign:"justify"}}> When trying to create a consistent and clean photo editing style, avoid sudden or dramatic color changes that appear false compared to the original image.  
</p>


<ol>
            <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Shoot RAW Images   </p>

       <p style={{textAlign:"justify"}}> Since this file format stores all the information captured by the camera, you can make major changes to the image later without losing too much detail. Most digitals camera these days can shoot in RAW format, offering a much higher range of tones than a JPG image. 
   </p>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}> Unsharp Images  </p>

       <p style={{textAlign:"justify"}}> Photos that aren’t sharp and lack detail is a bit like a blurred image but here the whole image lack details event the focused areas as well. There is still a lot of work to be done to get good details in the photos. You need good lighting to get your details right, and of course keep the camera is focus too! In the image below you can see the slight difference between the sharpness. This causes the image hard to work with while post-processing. 
   </p>
    </li>

    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Stick to Limited Filters     </p>

       <p style={{textAlign:"justify"}}>  The easiest way to edit images is to use filters. If you take Instagram as a basic example, it has multiple filters that you can use to change the appearance of your posts. Just choose one to two filters that are similar to each other. Many editing software have various amounts of filter to work with. Know what truly vibes with your photos and stick to those limited ones.  
   </p>


    </li>


    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Limit Your Color Palette    </p>

       <p style={{textAlign:"justify"}}> Choose the color you want to highlight in your work from two to five colors. This may seem limited at first glance, but it is very effective in maintaining the integrity of the subject. Remember: not all colors must appear in all images. You can include at least two color tones from your palette to maintain your style. Another way can be choosing one color to include in every photo, so that this becomes the dominant color of your shoot. Take a look at the images bellow and how the color yellow is used as the dominant color of the feed.  
   </p>

   <img src="../../assets/images/color-palette.jpg" class="rounded mx-auto d-block"  width="80%" height="20%" alt="collage-three-images-sunflower-girl-lying-on-flower-with-yellow-pants-white-shoes-yellow-flower-mirror"/>
<br/>

    </li>


    <li>
    <p style={{fontSize:"18px",fontWeight:"700"}}>Batch Editing  </p>

       <p style={{textAlign:"justify"}}> Batch processing is especially useful when you have a large folder of pictures from the last vacation, a photo shoot, or to edit for blog posting. it allows you to apply changes to a set of pictures simultaneously. This helps keep the similar highlights, shadows and color tones to all your images at once.  
   </p>


    </li>

 </ol>


 <p style={{textAlign:"justify"}}> The easiest way to find out the style you want is to look at different photos. But remember, you should not just copy the work of an idol that inspires you. It takes time to find your own style. Those who are just starting out may want to explore a variety of topics. If you prefer dark, airy or old photos, or more. Show your enthusiasm and story in a way that reflects them. If you want to succeed, you must define your vision and stick to it. 
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

 export default PhotoStyle2;