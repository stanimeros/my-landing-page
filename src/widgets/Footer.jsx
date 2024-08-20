import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Translator from './Translator';

function Footer({GlobalState}) {
  const {
		language,
	} = GlobalState;

  return (
    <footer>
      <div className='info-bar row mobile-column'>
        <div className='row'>
          <div className='circle-image'></div>
          <div>
            <div>
              <a href="mailto:hello@stanimeros.com">hello@stanimeros.com</a>
            </div>
            <div>
              <a href="tel:+306980911668">+30 698 091 1668</a>
            </div>
          </div>
        </div>
        <div>
          <div>Mobile & Web Apps</div>
          <div>Software Development</div>
        </div>
        <div>
          <div>Thessaloniki, Greece</div>
        </div>
        <div>
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
        <div>
          <Link className='link' to="/">
            <Translator code={language} value="stanimeros.com"/>
          </Link>
        </div>
        <div>Copyright © 2024</div>
        <ul className='row'>
          <li>
            <Link className='link' to="/privacy-policy">
              <Translator code={language} value="Privacy Policy"/>
            </Link>
          </li>
          <div>|</div>
          <li>
            <Link className='link' to="/terms-and-conditions">
              <Translator code={language} value="Terms & Conditions"/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
