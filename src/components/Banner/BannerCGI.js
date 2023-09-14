import React, { useState } from 'react';
import bannerImage from './img/cgi.png';
import banner_mobImage from './img/banner_mob_3.png';
import paperPlane from './img/plane_2.png';

import './bstyle.css';

const BannerCGI = () => {
    const [getClose, setClose] = useState('activeBanner')
    const [getDisplay, setDisplay] = useState('block')

    const closeBanner = () => {
        setClose('closeBanner')

        setTimeout(() => {
            setDisplay('none')
        }, 900);
    }

    const openBannerBtn = () => {
        setDisplay('block')
        setClose('activeBanner')
    }

    return (
        <>
            <div id='popupBannerWrapper' style={{ display: getDisplay }} className={getClose + ' fwidth'}>
                <div onClick={closeBanner} className='bgshadow'></div>
                <div className='bannerWrap'>
                    <div className='popupBanner web_banner bannerCigWrap'>
                        <span onClick={closeBanner}>X</span>
                        <a href='https://kowstudios.com/' target='_blank' className='bannerCgi'>
                            <img src={bannerImage} />
                        </a>
                    </div>

                    <div className='popupBanner mob_banner'>
                        <span onClick={closeBanner}>X</span>
                        <a href='https://kowstudios.com/' target='_blank'>
                            <img src={bannerImage} />
                        </a>

                    </div>
                </div>
            </div>
            <div onClick={openBannerBtn} id='popupIcon' className={getClose}>
                <a className='btncgi' style={{ textDecoration: "none" }} href='https://kowstudios.com/' target='_blank'><span className='text-anim'>Visit our CGI Website</span></a>
            </div>
        </>
    );
};

export default BannerCGI; 