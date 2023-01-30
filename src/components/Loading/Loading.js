import React from 'react';
import './style.css'; 
const Loading = () => {
    return (
        <>
        <div id="loading_spin_wrap">
            <div className='loading_spin'>
            <span className="loader"></span>
            </div>
        </div>
        </>
    );
};

export default Loading;