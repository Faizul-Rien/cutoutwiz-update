import React from 'react';
import photo1 from './image/p1.jpg'
import photo2 from './image/p2.jpg'
import photo3 from './image/p3.jpg'

const SecondSection = () => {
    return (

        <div className='container'>
        <div className='row ' style={{ marginTop: "110px", }}>
            <div className='second-section-image-container'>
                <div className='second-section-photo-1'>
                    <img src={photo1} />
                </div>
                <div className='second-section-photo-2'>
                    <img src={photo2} />
                </div>
                <div className='second-section-photo-3'>
                    <img src={photo3} />
                </div>
            </div>

            <div className='second-section-text'>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <br /> dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus-<br />cipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in </p>
            </div>
        </div>

    </div>
    );
};

export default SecondSection;