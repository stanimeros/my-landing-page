import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Terms({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language, value:"Terms & Conditions"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language, value:"Terms & Conditions"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>/Our Terms</div>
        <h1>Terms & Conditions</h1>
        <br/><br/>
        <p>
          <span>
            Welcome to my freelancer page! By using my services, you agree to follow these Terms and Conditions. These terms outline how you can use my services and the rules you need to follow, including how I handle intellectual property and what to do if there are any issues. I may update these terms occasionally, so please check back from time to time. Continued use of my services means you accept any changes. If you have any questions about these terms, don’t hesitate to contact me at
          </span>
          <span> </span>
          <a className='link' href="mailto:hello@stanimeros.com"> 
            hello@stanimeros.com
          </a>
          <span>.</span>
        </p>
      </main>
    </>
  )
}

export default Terms
