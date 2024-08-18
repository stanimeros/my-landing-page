import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Privacy({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language, value:"Privacy Policy"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language, value:"Privacy Policy"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Privacy Policy</div>
      </main>
    </>
  )
}

export default Privacy
