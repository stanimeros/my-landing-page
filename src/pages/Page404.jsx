import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Translator from '../widgets/Translator';

function Page404({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{Translator({code:language, value:"Page 404"}).props.children}</title>
          <meta property="og:title" content={Translator({code:language, value:"Page 404"}).props.children} />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Page 404</div>
      </main>
    </>
  )
}

export default Page404
