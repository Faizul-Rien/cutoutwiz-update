import React from 'react';

const MapIntegrate = ({country}) => {
    return (
        <div className='mapIntWrap'>
            <img
              class="rounded mx-auto d-block"
              width="100%"
              height="100%"
              src="assets/images/addressIcon_1.png"
            />
            <span>{country}</span>
        </div>

    );
};

export default MapIntegrate;