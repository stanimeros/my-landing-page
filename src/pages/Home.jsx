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
        <div>/Introduction</div>
        <h1>Stanimeros Pantelis</h1>
        <strong>Software Developer</strong>
        <br/><br/>
        <p>
          Hi there! I’m a software developer who loves creating all kinds of apps—web apps, mobile apps, and cross-platform solutions. I enjoy solving problems and making things work smoothly. My goal is to make your experience better and bring a smile to your face with my work. Whether it’s a website or an app, I’m here to help make your ideas come to life!
        </p>
      </main>
    </>
  )
}

export default Home
