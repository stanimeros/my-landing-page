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
        <p>
          Here are some of the projects I've worked on, showcasing a range of skills and creativity. Feel free to explore them to get a sense of my work. Please note that many other projects are either private or have been developed for clients, and therefore, I am unable to include them here.
        </p>
        <div className='grid'>
          <a href='https://github.com/stanimeros/near-flutter' target='_blank' className='grid-item near'>
            <img width={400} height={400} alt='near-logo' src='/images/near-logo.png'/>
            <div className='info'>
              <div className='title'>Near</div>
              <div className='description'>Share location with privacy</div>
            </div>
          </a>
          <a href='https://reserwave.stanimeros.com' target='_blank' className='grid-item reserwave'>
            <img width={400} height={400} alt='reserwave-logo' src='/images/reserwave-logo.png'/>
            <div className='info'>
              <div className='title'>Reserwave</div>
              <div className='description'>Booking system & store search engine</div>
            </div>
          </a>
          <a href='https://apps.apple.com/us/app/meal-ai/id6621269178' target='_blank' className='grid-item meal'>
            <img width={400} height={400} alt='meal-logo' src='/images/meal-logo.png'/>
            <div className='info'>
              <div className='title'>Meal AI</div>
              <div className='description'>Food Calorie Tracker</div>
            </div>
          </a>
          <a href='https://github.com/stanimeros' target='_blank' className='grid-item github'>
            <img width={400} height={400} alt='github-logo' src='/images/github-logo.png'/>
            <div className='info'>
              <div className='title'>Github</div>
              <div className='description'>Visit my github profile</div>
            </div>
          </a>
        </div>
        <p className='portfolio-wish row italic'>
          I hope to add your project here soon, showcasing our collaboration and the results we achieve together.
        </p>
      </main>
    </>
  )
}

export default Portfolio
