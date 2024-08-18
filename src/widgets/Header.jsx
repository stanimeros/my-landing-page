import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
    <header>
      <div>Header</div>
    </header>
  )
}

export default Header
