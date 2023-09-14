import React from 'react';
import './style.css'
import NewNavbar from '../NewNavbar/NewNavbar';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';
import FifthSection from './FifthSection';

const Partnership = () => {
    return (
        <>
            <div className='partnership-background'>
                <NewNavbar></NewNavbar>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FifthSection />
                <FourthSection />
            </div>
        </>
    );
};

export default Partnership;