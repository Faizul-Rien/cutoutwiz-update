import React from 'react';
import photo3 from './image/p3.jpg'

const ThirdSection = () => {
    return (

        <div className='container'>
        <div className='row ' style={{ marginTop: "110px", }}>
            <div className='third-section-container'>
                <div className='third-section-text'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in</p>
                </div>
                <div className='third-section-photo-3'>
                    <img src={photo3} />
                </div>
            </div>


        </div>

    </div>
    );
};

export default ThirdSection;