import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './sample.pdf';
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from "emailjs-com";
import { redirect, useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';


const PDFViewer = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageThumbnails, setPageThumbnails] = useState([]);
  const [formActive, setFormActive] = useState("");
  const [getLoading, setLoading] = useState(false); 
  const defaultPageView = 3;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

    let navigate = useNavigate();

    function redirectAfterSubmit() {
      navigate('/thank-you-for-download')
    }

  const handlePageClick = (pageNum) => {
    if (pageNum <= defaultPageView && pageNum > 0) {
      setPageNumber(pageNum);
      formActive == 'active' && setFormActive('deactive')
    } else if (pageNum > defaultPageView) {
      setFormActive('active')
    }
  };

  const functionsendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs.sendForm('service_1zfatsb', 'template_aak2bzj', e.target, 'user_3TcS4pRKMgpo7fArsKmSf')
      .then((result) => {
        setLoading(false)
        redirectAfterSubmit(); 
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  }


  return (
    <div id='pdfViewBodyWrap' class="fwidth">

     {getLoading == true && <Loading/> } 

      <div className='pdfview_wrap'>
        <div className='viewPdfBody fwidth'>
          <div className='viewPdf fwidth'>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} className="pdfViewcon_wrap">
              <Page width={500} devicePixelRatio={2} pageNumber={pageNumber} renderTextLayer={false} className="pdfViewFile" />
            </Document>
          </div>
        </div>

        <div className='pdf_nav_wrap fwidth'>
          <div className='pdf_nav'>
            <button onClick={() => handlePageClick(pageNumber - 1)} className='pdfBtn'>Prev</button>
            <p id="pageInfo">
              {pageNumber} of <span class="glyphicon glyphicon-asterisk"></span> {numPages}
            </p>
            <button onClick={() => handlePageClick(pageNumber + 1)} className='pdfBtn'>Next</button>

          </div>
        </div>
      </div>
      <div id='submitInfoWrap' className={formActive}>
        <div className='pdfFormSubmit'>

          <Form onSubmit={functionsendEmail}>
            <Form.Text className="text-muted pdfInfoForm">
              Submit following information for get full pdf on your email.
            </Form.Text>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required name='name' type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check required type="checkbox" label="I'm not a robot" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>


    </div>
  );
}

export default PDFViewer;