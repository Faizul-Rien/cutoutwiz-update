import React, { useState } from 'react';
import bannerImage from './img/banner_2.jpg';
import banner_mobImage from './img/banner_mob_2.jpg';
import paperPlane from './img/plane_2.png';

import './bstyle.css';

const Banner = () => {
    const [getClose, setClose] = useState('activeBanner')
    const [getDisplay, setDisplay] = useState('block')

    const closeBanner = () => {
        setClose('closeBanner')

        setTimeout(() => {
            setDisplay('none')
        }, 900);
    }

    const openBannerBtn =() =>{
        setDisplay('block')
        setClose('activeBanner')
    }

    return (
        <>
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
            <div onClick={openBannerBtn} id='popupIcon' className={getClose}>
                <img src={paperPlane}/> <span>PHOTO STUDIO OPERATIONS <br/> LONDON 2023</span>
            </div>
        </>
    );
};

export default Banner; 