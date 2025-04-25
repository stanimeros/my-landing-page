import { Helmet, HelmetProvider } from 'react-helmet-async'

function Privacy() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Privacy Policy</title>
          <meta property="og:title" content="Privacy Policy" />
        </Helmet>
      </HelmetProvider>
      <main className="privacy-policy">
        <h1>Privacy Policy</h1>
        <p className="effective-date">Effective Date: 25 April 2025</p>
        <br/><br/>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to our services. This Privacy Policy explains how we collect, use, and protect your personal information across our website and mobile applications. Your privacy is important to us, and we are committed to protecting your personal data.
          </p>
        </section>
        <br/>

        <section>
          <h2>2. Information We Collect</h2>
          <h3>Website Information:</h3>
          <p>
            When you visit our website, we collect only the information necessary to deliver our services and enhance your experience. This may include your name, email address, and any other details you share with us.
          </p>
          <br/>

          <h3>Mobile Application Information:</h3>
          <ul>
            <li><strong>Account Information:</strong> Name, email address, username, and password</li>
            <li><strong>Profile Information:</strong> Profile picture, bio, and social media links</li>
            <li><strong>Content:</strong> Photos, videos, and other media you post</li>
            <li><strong>Messages:</strong> Content of messages sent and received</li>
            <li><strong>Usage Data:</strong> Information about how you use the app</li>
            <li><strong>Location Data:</strong> We access your device's location to provide location-based features and services. This data is used only for the intended functionality and is not shared with third parties without your consent.</li>
          </ul>
        </section>
        <br/>

        <section>
          <h2>3. How We Use Your Information</h2>
          <ul>
            <li>To provide and improve our services</li>
            <li>To customize your experience</li>
            <li>To ensure security and prevent fraud</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <br/>

        <section>
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell or share your personal information with third parties except as required by law or to provide our services. Your data is stored securely and used only for the purposes stated.
          </p>
        </section>
        <br/>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>
        <br/>

        <section>
          <h2>6. Your Choices</h2>
          <ul>
            <li>Update or delete your profile information through account settings</li>
            <li>Request complete deletion of your personal information at any time</li>
            <li>Control location data access through your device settings</li>
          </ul>
        </section>
        <br/>

        <section>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy and updating the effective date.
          </p>
        </section>
        <br/>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at{' '}
            <a className="link" href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>.
          </p>
        </section>
      </main>
    </>
  )
}

export default Privacy
