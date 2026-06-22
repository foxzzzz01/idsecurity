import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const LanguageSwitcher = () => (
    <div className="header__lang">
      <Globe size={14} className="header__lang-icon" />
      <button 
        className={`header__lang-btn ${i18n.language === 'ru' ? 'header__lang-btn--active' : ''}`}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <span className="header__lang-divider">|</span>
      <button 
        className={`header__lang-btn ${i18n.language === 'uz' ? 'header__lang-btn--active' : ''}`}
        onClick={() => changeLanguage('uz')}
      >
        UZ
      </button>
    </div>
  );

  return (
    <header className="header">
      <div className="header__container">
        
        <div className="header__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="header__logo-text">ID <span className="header__logo-text--accent">SECURITY</span></span>
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#services" className="header__menu-link" onClick={(e) => handleLinkClick(e, 'services')}>
                {t('menu.services')}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#about" className="header__menu-link" onClick={(e) => handleLinkClick(e, 'about')}>
                {t('menu.about')}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#clients" className="header__menu-link" onClick={(e) => handleLinkClick(e, 'clients')}>
                {t('menu.clients')}
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#form-section" className="header__menu-link" onClick={(e) => handleLinkClick(e, 'form-section')}>
                {t('menu.contacts')}
              </a>
            </li>
          </ul>
          
          <div className="header__mobile-lang">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="header__actions">
          <div className="header__desktop-lang">
            <LanguageSwitcher />
          </div>

          <button className="header__btn" onClick={() => { setIsMenuOpen(false); onContactClick(); }}>
            {t('menu.btnContact')}
          </button>
          
          <button className="header__burger" onClick={toggleMenu} aria-label="Открыть меню">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};