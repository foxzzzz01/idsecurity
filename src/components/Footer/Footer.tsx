import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.scss';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        
        <div className="footer__block">
          <div className="footer__logo">
            <span className="footer__logo-text">ID <span className="footer__logo-text--accent">SECURITY</span></span>
          </div>
          <p className="footer__description">
            {t('footer.desc')}
          </p>
        </div>

        <div className="footer__block">
          <h4 className="footer__title">{t('footer.services')}</h4>
          <ul className="footer__list">
            <li><a href="#services" className="footer__link">{t('form.services.cctv')}</a></li>
            <li><a href="#services" className="footer__link">{t('form.services.skud')}</a></li>
            <li><a href="#services" className="footer__link">{t('form.services.fire')}</a></li>
            <li><a href="#services" className="footer__link">{t('form.services.network')}</a></li>
          </ul>
        </div>

        <div className="footer__block">
          <h4 className="footer__title">{t('footer.contacts')}</h4>
          <ul className="footer__list footer__list--contacts">
            <li><Phone size={16} /> <span>+ 998 (99) 358-11-81</span></li>
            <li><Mail size={16} /> <span>id666st@gmail.com</span></li>
            <li><MapPin size={16} /> <span>{t('footer.address')}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copy">
            &copy; {currentYear} ID SECURITY. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};