import React from 'react';
import MapIntegrate from './MapIntegrate';
import './style.css';

/* Shafayat */

const Map = () => {
    return (
        <div id='mapArea' className="fwidth">
            <div className='mapWrap'>
                <img
                    className="rounded mx-auto d-block"
                    width="100%"
                    src="assets/images/addressIcon_2.png"
                />
                     
                <div className='mapIntList'>
                    <div className='mapIntListRel'>
                        <div className='intIcon' id='canada'><MapIntegrate country='CANADA' /></div>
                        <div className='intIcon' id='USA'><MapIntegrate country='USA' /></div>
                        <div className='intIcon' id='DENMARK'><MapIntegrate country='DENMARKS' /></div>
                        <div className='intIcon' id='NEDERLAND'><MapIntegrate country='NEDERLAND' /></div>
                        <div className='intIcon' id='UK'><MapIntegrate  country='UK' /></div>
                        <div className='intIcon' id='GERMANY'><MapIntegrate country='GERMANY' /></div>
                        <div className='intIcon' id='PORTUGAL'><MapIntegrate country='PORTUGAL' /></div>
                        <div className='intIcon' id='HUNGARY'><MapIntegrate country='HUNGARY' /></div>
                        <div className='intIcon' id='SPAIN'><MapIntegrate country='SPAIN' /></div>   
                        <div className='intIcon' id='DUBAI'><MapIntegrate country='DUBAI' /></div>   
                        
                        <div className='intIcon' id='INDIA'><MapIntegrate country='INDIA' /></div>    
                        <div className='intIcon' id='HONGKONG'><MapIntegrate country='HONGKONG' /></div>    
                        <div className='intIcon' id='THAILAND'><MapIntegrate country='THAILAND' /></div>    
                        <div className='intIcon' id='VIETNAM'><MapIntegrate country='VIETNAM' /></div>    
                        <div className='intIcon' id='PHILIPPINES'><MapIntegrate country='PHILIPPINES' /></div>    
                        <div className='intIcon' id='SINGAPORE'><MapIntegrate country='SINGAPORE' /></div>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;