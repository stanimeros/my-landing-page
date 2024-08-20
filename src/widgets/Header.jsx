import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Translator from './Translator';

function Header({GlobalState}) {
	const {
		language, setLanguage,
	} = GlobalState;

	const handleLanguageWindow = (event) => {
		var languages = document.querySelector(".avail-languages");
		var display = window.getComputedStyle(languages).display;
		if (display==="none"){
			languages.style.display = "flex";
			document.querySelector("#root").addEventListener('click', handleLanguageWindow);
		}else{
			languages.style.display = "none";
			document.querySelector("#root").removeEventListener('click', handleLanguageWindow);
		}
	};

  const handleChangeLanguage = (event,code) => {
    setLanguage(code);
    handleLanguageWindow();
  };

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  return (
    <header className='row mobile-column'>
      <img
				src={`/logos/logo-white.png`}
				width={75}
			/>
			<ul className='row'>
				<li>
					<Link className='link' to="/">
						<Translator code={language} value="Home"/>
					</Link>
				</li>
				<div>|</div>
				<li>
					<Link className='link' to="/portfolio">
						<Translator code={language} value="Portfolio"/>
					</Link>
				</li>
				<div>|</div>
				<li>
					<Link className='link' to="/contact">
						<Translator code={language} value="Contact"/>
					</Link>
				</li>
			</ul>
			<Link className="button" to="/contact">
				<Translator code={language} value="Get Started"/>
			</Link>
    </header>
  )
}

export default Header
