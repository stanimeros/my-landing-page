import { Helmet, HelmetProvider } from 'react-helmet-async'

function Support() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Support</title>
          <meta property="og:title" content="Support" />
        </Helmet>
      </HelmetProvider>
      <main>
        <div>/Support</div>
        <h1>Support</h1>
        <br/><br/>
        <p>
          <span>
            If you have any questions or need assistance, please don&apos;t hesitate to contact me at
          </span>
          <span> </span>
          <a className='link' href="mailto:hello@stanimeros.com"> 
            hello@stanimeros.com
          </a>
        </p>
      </main>
    </>
  )
}

export default Support
