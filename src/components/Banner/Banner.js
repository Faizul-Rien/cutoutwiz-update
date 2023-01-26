import React, { useState } from 'react';
import bannerImage from './img/banner.png';
import banner_mobImage from './img/banner_mob.png';
import './style.css';

const Banner = () => {
    const [getClose, setClose] = useState('activeBanner')
    const [getDisplay, setDisplay] = useState('block')

    const closeBanner = () => {
        setClose('closeBanner')

        setTimeout(() => {
            setDisplay('none')
        }, 1900);
    }

    return (
        <div id='popupBannerWrapper' style={{ display: getDisplay }} className={getClose + ' fwidth'}>
            <div onClick={closeBanner} className='bgshadow'></div>
            <div className='bannerWrap'>
                <div className='popupBanner web_banner'>
                    <span onClick={closeBanner}>X</span>
                    <img src={bannerImage} />
                </div>
                
                <div className='popupBanner mob_banner'>
                    <span onClick={closeBanner}>X</span>
                    <img src={banner_mobImage} />
                </div>
            </div>
        </div>
    );
};

export default Banner; 