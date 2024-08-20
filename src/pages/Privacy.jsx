import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Privacy({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Privacy Policy</title>
          <meta property="og:title" content="Privacy Policy" />
        </Helmet>
      </HelmetProvider>
      <main>
      <div>/Our Policy</div>
      <h1>Privacy Policy</h1>
      <br/><br/>
      <p>
        <span>
          I’m dedicated to protecting your privacy and ensuring your personal information is safe. When you work with me, I collect only the information necessary to deliver my services and enhance your experience. This may include your name, email address, and any other details you share with me. I will not share your information with third parties without your permission, except as required by law. Rest assured that your data is stored securely and used only for the purposes stated. If you have any questions or concerns about how I handle your information, feel free to reach out to me at 
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

export default Privacy
