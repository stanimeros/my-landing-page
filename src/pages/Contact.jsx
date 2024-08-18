import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Contact({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language,value:"Contact"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language,value:"Contact"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Contact Page</div>
      </main>
    </>
  )
}

export default Contact
