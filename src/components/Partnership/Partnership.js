import React from 'react';
import './style.css'
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'
import NewNavbar from '../NewNavbar/NewNavbar';

const Partnership = () => {
    return (
        <>
            <div className='partnership-background'>
                <NewNavbar></NewNavbar>
                <div className='container'>
                    <div className='row'>
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
                            <p>Witness the future of 3D as <span>Covision Media</span>’s AI-powered scanners, <span>NUREG GmbH</span>'s <br />  unrivaled expertise in content production and photography studio services along with <br /> our post-production magic has come together!<br /></p>

                            <p>From inception to flawlessness, we're pushing boundaries, breaking limits & crafting<br />the future with each polygon.</p>

                            <p>Join us, Covision Media & Nureg on this electrifying partnership journey!</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Partnership;