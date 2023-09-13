import React, { useState } from 'react';
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'
import { Link } from 'react-router-dom';

const ForMenuSections = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>

            <div className={`partnarship-nav  ${isExpanded ? '' : ''}`} onClick={toggleExpansion}>
                3D VISIONARIES UNITE FOR EVOLUTION!


            </div>

            {isExpanded && (
                <div className='for-menu-secttion partnarship-nav' >
                    <div className='container'>
                        <div className='row'>
                            <div className='p-i-container'>
                                <div className='p-i-h-a light-divider'>
                                    <img src={a} />
                                </div>
                                <div className='p-i-h-b light-divider'>
                                    <img src={b} />
                                </div>
                                <div className='p-i-h-c'>
                                    <img src={c} />
                                </div>
                            </div>
                            <div className='partnership-heading d-flex p-b-div'>
                                {/* <h1><span>3D VISIONARIES UNITE FOR EVOLUTION!</span></h1> */}
                                <div className='partnership-button'>
                                    <a href='/partnership' target="_blank">PARTNERSHIP</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default ForMenuSections;