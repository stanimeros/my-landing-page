import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Translator from './Translator';

function Footer({GlobalState}) {
  const {
		language,
	} = GlobalState;

  return (
    <footer>
      <div className='info-bar row'>
        <div className='row'>
          <img
            src={`/logos/logo-transparent.png`}
            width={100}
          />
          <div>
            <div>
              <a href="mailto:pantelisstanimeros@gmail.com">pantelisstanimeros@gmail.com</a>
            </div>
            <div>
              <a href="tel:+306980911668">(30) 698 091 1668</a>
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
              <a href="mailto:pantelisstanimeros@gmail.com">pantelisstanimeros@gmail.com</a>
            </div>
          </strong>
        </div>
        <div className='box'></div>
      </div>
      <div className='copyright-bar row'>
        <div>stanimeros.com</div>
        <div>Copyright © 2024</div>
        <ul className='row'>
          <li>
            <Link to="/privacy-policy">
              <Translator code={language} value="Privacy Policy"/>
            </Link>
          </li>
          <div>|</div>
          <li>
            <Link to="/terms-and-conditions">
              <Translator code={language} value="Terms & Conditions"/>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
