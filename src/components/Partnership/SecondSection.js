import React from 'react';
import photo1 from './image/nirob-1.png'



const SecondSection = () => {
    return (


        <div className='container'>
            <div className=''>
                <div className='second-section-container'>
                    <div className='second-section-photo'>
                        <img src={photo1} />
                    </div>
                    <div className='second-section-text'>
                        <p>The KOW Company is elated to announce its pivotal partnership under the visionary leadership of Kowser Ahmed, a luminary in content post-production, and <a href='https://www.covisionmedialab.com/en' target='_blank'><b>Covision Media</b></a> led by the tech whiz <a href='https://www.linkedin.com/in/franz-tschimben/' target='_blank'><b>Franz Tschimben</b></a> leading the charge in Product 3D scanning </p>
                        <p>This collaboration promises to reshape the 3D content production landscape. By synergizing Covision Media's state-of-the-art 3D scanning capabilities with KOW Company's expertise in post-processing, we aim to deliver flawless 3D outputs with minimal friction. The benefits of this collaboration are manifold, not just for our businesses but for our esteemed customers as well. </p>
                        <p>Brands and businesses can now look forward to unparalleled quality and precision in their 3D content, paving the way for immersive experiences and deeper customer engagement. As we embark on this journey together, we’re certain that together, we'll be raising the bar and redefine the future of 3D content production. </p>
                    </div>

                </div>


            </div>

        </div>


    );
};

export default SecondSection;