import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Footer({GlobalState}) {
  const {
		language,
	} = GlobalState;

  return (
    <footer>
      <div className='info-bar row'>
        <div className='row'>
          <div className='circle-image'></div>
          <div className='column'>
            <div>
              <a href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>
            </div>
            <div>
              <a href="tel:+306980911668">+30 698 091 1668</a>
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
        <div className='column'>
          <div>Looking for creating an app?</div>
          <strong>
            <div>
              <a className='link' href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>
            </div>
          </strong>
        </div>
        <div className='box'></div>
      </div>
      <div className='copyright-bar row mobile-column'>
        <span className='row no-wrap'>
          <div>
            <Link className='link' to="/">
              stanimeros.com
            </Link>
          </div>
          <div>|</div>
          <div>Copyright © 2024</div>
        </span>
        <ul className='row'>
          <li>
            <Link className='link' to="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <div>|</div>
          <li>
            <Link className='link' to="/terms-and-conditions">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
