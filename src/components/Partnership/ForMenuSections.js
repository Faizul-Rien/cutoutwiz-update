import React from 'react';
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'

const ForMenuSections = () => {
    return (
        <div className='for-menu-secttion'>
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
                    <div className='partnership-heading'>
                        <h1><span>3D VISIONARIES UNITE FOR EVOLUTION!</span></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ForMenuSections;