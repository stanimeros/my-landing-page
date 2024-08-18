import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Home({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language,value:"Freelancer Developer"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language,value:"Freelancer Developer"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Main Content</div>
      </main>
    </>
  )
}

export default Home
