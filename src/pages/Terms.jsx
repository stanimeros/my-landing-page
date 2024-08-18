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
        <div>Terms & Conditions</div>
      </main>
    </>
  )
}

export default Terms
