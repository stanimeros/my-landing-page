import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Page404({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Page 404</title>
          <meta property="og:title" content="Page 404" />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>Page 404</div>
      </main>
    </>
  )
}

export default Page404
