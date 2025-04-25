import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className='info-bar row'>
        <div className='row'>
          <img width={120} height={120} src="/images/pantelis.jpg" alt="Pantelis Stanimeros" className='circle-image' />
          <div className='column'>
            <div>
              <a className='link' href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>
            </div>
            <div>
              <a className='link' href="tel:+306980911668">+30 698 091 1668</a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div>Mobile & Web Apps</div>
          <div>Software Development</div>
        </div>
        <div className='column'>
          <div>Thessaloniki, Greece</div>
        </div>
        <div className='column box'>
          <div>Looking for creating an app?</div>
          <strong>
            <div>
              <a className='link' href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>
            </div>
          </strong>
        </div>
      </div>
      <div className='copyright-bar row mobile-column'>
        <span className='row no-wrap'>
          <div>
            <Link className='link' to="/">
              stanimeros.com
            </Link>
          </div>
          <div>|</div>
          <div>Copyright © {new Date().getFullYear()}</div>
        </span>
        <ul className='row'>
          <li>
            <Link className='link' to="/privacy">
              Privacy Policy
            </Link>
          </li>
          <div>|</div>
          <li>
            <Link className='link' to="/terms">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
