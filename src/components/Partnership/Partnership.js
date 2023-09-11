import React from 'react';
import './style.css'
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'

const Partnership = () => {
    return (
        <div className='partnership-background'>
            <div className='container'>
                <div className='p-i-container'>
                    <div className='p-i-h-a'>
                        <img src={a} />
                    </div>
                    <div className='p-i-h-b'>
                        <img src={b} />
                    </div>
                    <div className='p-i-h-c'>
                        <img src={c} />
                    </div>
                </div>

                <div className='partnership-heading'>
                    <h1>3D VISIONARIES UNITE FOR EVOLUTION!</h1>
                    <p>Witness the future of 3D as Covision Media’s AI-powered scanners, NUREG GmbH's <br />  unrivaled expertise in content production and photography studio services along with <br /> our post-production magic has come together!<br /></p>

                    <p>From inception to flawlessness, we're pushing boundaries, breaking limits & crafting<br />the future with each polygon.</p>

                    <p>Join us, Covision Media & Nureg on this electrifying partnership journey!</p>
                </div>

            </div>

        </div>
    );
};

export default Partnership;