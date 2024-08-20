import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Portfolio({GlobalState}) {
  const {
    api, language,
  } = GlobalState;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Portfolio</title>
          <meta property="og:title" content="Portfolio" />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>/Portfolio</div>
        <h1>This is my Portfolio</h1>
        <div className='grid'>
          <div className='grid-item'></div>
          <div className='grid-item'></div>
          <div className='grid-item'></div>
          <div className='grid-item'></div>
        </div>
      </main>
    </>
  )
}

export default Portfolio
