import React, { useState } from 'react';
import bannerImage from './img/p-banner.png';
import banner_mobImage from './img/banner_mob_3.png';
import paperPlane from './img/plane_2.png';

import './pstyle.css';

const PartnerBanner = () => {
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
                <div className='bannerWrap' style={{ height: "100%" }}>
                    <div className='popupBanner web_banner' style={{ height: "100%" }}>
                        <span className='partner-close-btn' onClick={closeBanner}>Close</span>
                        <img style={{ height: "100%" }} src={bannerImage} />
                        <div className='partnership-button-banner'>
                            <a href='/partnership' target="_blank">Explore Partnership</a>
                        </div>
                    </div>


                    {/* <div className='popupBanner mob_banner'>
                        <span onClick={closeBanner}>X</span>
                        <img src={banner_mobImage} />
                    </div> */}
                </div>
            </div>
            {/* <div onClick={openBannerBtn} id='popupIcon' className={getClose}>
                <img src={paperPlane} /> <span>PHOTO STUDIO OPERATIONS <br /> LONDON 2023</span>
            </div> */}
        </>
    );
};

export default PartnerBanner; 