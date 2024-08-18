import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Portfolio({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language,value:"Portfolio"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language,value:"Portfolio"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Portfolio Page</div>
      </main>
    </>
  )
}

export default Portfolio
