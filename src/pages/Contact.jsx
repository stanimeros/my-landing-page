import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Translator from '../widgets/Translator';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Contact({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Collect form data by IDs
    const form = formRef.current;
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const email = document.getElementById('email').value;
    const terms = document.getElementById('terms').checked;

    // Validate the form data
    if (!email || !terms) {
      Toastify({
        text: Translator({code:language, value:"Please fill the email field and accept the terms."}).props.children,
        duration: 3000,
        className: "toast warning",
        gravity: "bottom",
        position: "right",
      }).showToast();
      return;
    }

    const formData = {
      name: name,
      service: service,
      email: email,
      terms: terms ? 'Accepted' : 'Not accepted',
    };

    // Send the form data to the PHP script
    try {
      const response = await fetch(`/api/send_email.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.status=="success"){
        form.reset();

        Toastify({
          text: Translator({code:language, value: data.message}).props.children,
          duration: 3000,
          className: "toast success",
          gravity: "bottom",
          position: "right",
        }).showToast();
      }else{
        throw new Error("Data Status Error");
      }
    } catch (error) {
      console.error('Contact Form:', error);
      Toastify({
        text: Translator({code:language, value:"Oops! Something didn't go as planned"}).props.children,
        duration: 3000,
        className: "toast warning",
        gravity: "bottom",
        position: "right",
      }).showToast();
    }
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language,value:"Contact"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language,value:"Contact"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>/Get In Touch</div>
        <h1>Schedule an Appointment</h1>
        <form ref={formRef} className='contact-form' onSubmit={handleSubmit}>
          <div className='main-form'>
            <div className='row'>
              <div>Hey my name is</div>
              <input 
                className='input'
                id='name'
                name='name'
                type='text' 
                placeholder='Type Here'
              >
              </input>
              <div>and I am looking for</div>
              <select 
                id='service'
                name='service'
                className='input dropdown'
                placeholder='Select Dropdown'
                defaultValue=''
              >
                <option value='' disabled>Select Dropdown</option>
                <option value='cross-platform-app'>Cross Platform App</option>
                <option value='mobile-app'>Mobile App</option>
                <option value='ios-app'>iOS App</option>
                <option value='android-app'>Android App</option>
                <option value='web-app'>Web App</option>
                <option value='e-shop'>E-shop</option>
                <option value='website'>Website</option>
              </select>
            </div>
            <div className='row'>
              <div>Get in touch with me at</div>
              <div className='row no-wrap'>
                <input 
                  id='email'
                  name='email'
                  type='email'
                  className='input' 
                  placeholder='Your Email Here'
                >
                </input>
                <div>!</div>
              </div>
            </div>
          </div>
          <div className="row checkbox-wrapper-65">
            <label htmlFor="terms">
              <input id="terms" type="checkbox"></input>
              <span className="cbx">
                <svg width="12px" height="11px" viewBox="0 0 12 11">
                  <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                </svg>
              </span>
              <span>
                I accept all 
                <Link className='link' to="/terms-and-conditions">
                  <Translator code={language} value=" terms and conditions"/>
                </Link>
              </span>
            </label>
          </div>
          <button className='button' type="submit">
            <Translator code={language} value="Send Enquiry"/>
            <FontAwesomeIcon icon={faArrowRightLong}/>
          </button>
        </form>
      </main>
    </>
  )
}

export default Contact
