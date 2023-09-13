import React from 'react';
import { Link } from 'react-router-dom';

const FourthSection = () => {
    return (
        <div className='container'>
            <div className='row ' style={{ marginTop: "110px", }}>
                <div className='fourth-section-container'>
                    <div className='fourth-section-button'>
                        <a href='https://kowstudios.com/' target='_blank'>Visit KOW Studio</a>
                    </div>
                    <div className='fourth-section-button'>
                        <Link to='/contact-us' target="_blank">Request a Quote</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;