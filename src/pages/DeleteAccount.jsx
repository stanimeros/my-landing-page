import { Helmet, HelmetProvider } from 'react-helmet-async'

function DeleteAccount() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Request Account Deletion</title>
          <meta property="og:title" content="Request Account Deletion" />
        </Helmet>
      </HelmetProvider>
      <main className="delete-account">
        <h1>Request Account Deletion</h1>
        <p className="effective-date">Effective Date: 25 April 2025</p>
        <br/><br/>

        <section>
          <h2>How to Request Account Deletion</h2>
          <p>
            If you wish to delete your account and remove all associated data from our services, please follow the process outlined below.
          </p>
        </section>
        <br/>

        <section>
          <h2>Deletion Process</h2>
          <ol>
            <li>
              <strong>Send an Email Request</strong>
              <p>
                Please send an email to{' '}
                <a className="link" href="mailto:hello@stanimeros.com">
                  hello@stanimeros.com
                </a>
              </p>
            </li>
            <li>
              <strong>Email Subject</strong>
              <p>Use the subject line: "Account Deletion Request"</p>
            </li>
            <li>
              <strong>Required Information</strong>
              <p>Include the following details in your email:</p>
              <ul>
                <li>Your full name</li>
                <li>Your registered email address</li>
                <li>Any additional details to help us verify your request</li>
              </ul>
            </li>
          </ol>
        </section>
        <br/>

        <section>
          <h2>What Happens After Your Request</h2>
          <ul>
            <li>We will verify your identity to ensure the request is legitimate</li>
            <li>Once verified, we will process your deletion request</li>
            <li>All your personal data will be permanently removed from our systems</li>
            <li>You will receive a confirmation email once the deletion is complete</li>
          </ul>
        </section>
        <br/>

        <section>
          <h2>Important Notes</h2>
          <ul>
            <li>This process is irreversible - once your account is deleted, it cannot be recovered</li>
            <li>Some information may be retained for legal purposes as required by law</li>
            <li>Deletion may take up to 30 days to complete</li>
          </ul>
        </section>
        <br/>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about the account deletion process, please contact us at{' '}
            <a className="link" href="mailto:hello@stanimeros.com">
              hello@stanimeros.com
            </a>
          </p>
        </section>
      </main>
    </>
  )
}

export default DeleteAccount 