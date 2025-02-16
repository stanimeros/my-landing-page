import { Helmet, HelmetProvider } from 'react-helmet-async'

function Home() {  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Stanimeros Pantelis - Software Developer</title>
          <meta property="og:title" content="Stanimeros Pantelis - Software Developer"/>
        </Helmet>
      </HelmetProvider>
      <main>
        <div>/Introduction</div>
        <h1>Stanimeros Pantelis</h1>
        <strong>Software Developer</strong>
        <br/><br/>
        <p>
          Hello! I&apos;m a software developer who creates web, mobile, and cross-platform applications. I focus on turning ideas into practical, easy-to-use software. My goal is to build efficient solutions that work well for users. Whether you need a website or an app, I&apos;m here to help bring your project to life with quality code and attention to detail.
        </p>
      </main>
    </>
  )
}

export default Home
