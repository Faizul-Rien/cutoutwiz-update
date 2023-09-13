import React, { useState } from 'react';
import a from './image/1.png'
import b from './image/2.png'
import c from './image/3.png'
import { Link } from 'react-router-dom';

const ForMenuSections = () => {

    return (
        <div>

            <div className="partnarship-nav">
                <div>
                    3D VISIONARIES UNITE FOR EVOLUTION!
                </div>

                <div className='partnership-button'>
                    <Link to='/partnership' target="_blank">Explore Partnership</Link>
                </div>



            </div>


        </div>
    );
};


export default ForMenuSections;