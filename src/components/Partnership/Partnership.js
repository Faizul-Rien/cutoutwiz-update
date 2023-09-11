import React from 'react';
import './style.css'
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'
import photo1 from './image/p1.jpg'
import photo2 from './image/p2.jpg'
import photo3 from './image/p3.jpg'
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
                <div className='container'>
                    <div className='row ' style={{ marginTop: "110px", }}>
                        <div className='second-section-image-container'>
                            <div className='second-section-photo-1'>
                                <img src={photo1} />
                            </div>
                            <div className='second-section-photo-2'>
                                <img src={photo2} />
                            </div>
                            <div className='second-section-photo-3'>
                                <img src={photo3} />
                            </div>
                        </div>

                        <div className='second-section-text'>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <br /> dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper sus-<br />cipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in </p>
                        </div>
                    </div>

                </div>
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
                <div className='container'>
                    <div className='row ' style={{ marginTop: "110px", }}>
                        <div className='fourth-section-container'>
                            <div className='fourth-section-button'>
                                <a>Visit KOW Studio</a>
                            </div>
                            <div className='fourth-section-button'>
                                <a>Request a Quote</a>
                            </div>

                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default Partnership;