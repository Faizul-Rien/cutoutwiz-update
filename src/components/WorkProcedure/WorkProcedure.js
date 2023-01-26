import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation';

const WorkProcedure = () => {
    return (
        <>
              <Navigation />
                <Helmet>
                <title>CutOutWiz : Image and Video Post Production</title>
                <meta
                    name="description"
                    keywords="Product photo edinting company"
                    content="CutOutWiz is one of the leading image and video editing company for businesses all over the world. As the world moves towards a virtual business base, product photo editing has been a very important part for any E-commerce business "
                />
                </Helmet>
            <div id='workprocedure_wrap'>
                <div id='pdfview_wrap'>
                    
                </div>
                <div id='submitInfoWrap'></div>
            </div>
            <Footer/>
        </>
    );
};

export default WorkProcedure;