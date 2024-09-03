import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from './widgets/Header';
import Footer from './widgets/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Privacy';
import TermsAndConditions from './pages/Terms';
import Page404 from './pages/Page404';

function App() {
  const [theme, setTheme] = useState('dark');
  const [api, setApi] = useState(
    window.location.href.includes('localhost')
      ? 'http://localhost/my-landing-page/public/api'
      : '/api'
  );
  
  const GlobalState = {
    theme, setTheme,
    api, setApi
  }

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth',
    });
  }, [navigate]);

  useEffect(() => {
    fetch(`${api}/track.php`);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content="Experienced software developer specializing in web, mobile, and cross-platform applications. Creating innovative solutions to enhance user experiences."/>
          <meta property="og:description" content="Experienced software developer specializing in web, mobile, and cross-platform applications. Creating innovative solutions to enhance user experiences."/>
          <meta property="og:type" content='website' />
          <meta property="og:image" content='/logos/logo.png' />
          <meta property='og:site_name' content='Software Developer' />
          <meta property="og:url" content={window.location.href} />
          <link rel="canonical" href={window.location.href.split('?')[0]}></link>
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Language" content='en-us'/>
        </Helmet>
      </HelmetProvider>
      <Header GlobalState={GlobalState}/>
      <Routes>
        <Route exact path="/" element={<Home GlobalState={GlobalState} />} />\        <Route path="contact" element={<Contact GlobalState={GlobalState} />} />
        <Route path="portfolio" element={<Portfolio GlobalState={GlobalState} />} />
        <Route path="contact" element={<Contact GlobalState={GlobalState} />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions GlobalState={GlobalState} />} />
        <Route path="privacy-policy" element={<PrivacyPolicy GlobalState={GlobalState} />} />
        <Route path="404" element={<Page404 GlobalState={GlobalState} />} />
        <Route path="*" element={<Page404 GlobalState={GlobalState} />} />
      </Routes>
      <Footer GlobalState={GlobalState}/>
    </>
  )
}

export default App;