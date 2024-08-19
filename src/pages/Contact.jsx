import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import Translator from '../widgets/Translator';

function Contact({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
  }

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
        <form
          className='contact-form' 
          onSubmit={handleSubmit}
        >
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
                className='input dropdown'
                id='services'
                name='services'
                placeholder='Select Dropdown'
              >
                <option value='' disabled selected>Select Dropdown</option>
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
              <input 
                className='input' 
                id='email'
                name='email'
                type='email'
                placeholder='Your Email Here'
                required
              >
              </input>
              <div>!</div>
            </div>
          </div>
          <div class="row checkbox-wrapper-65">
            <label for="terms">
              <input type="checkbox" id="terms" required></input>
              <span class="cbx">
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
