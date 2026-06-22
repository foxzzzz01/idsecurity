import React from 'react';
import { Award, CheckCircle, ShieldCheck, Truck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.scss';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="about__container">
        
        {/* Левая часть: Текстовое описание */}
        <div className="about__content">
          <span className="about__badge">{t('about.badge')}</span>
          <h2 className="about__title">{t('about.title')}</h2>
          <p className="about__text">
            {t('about.text1', '')}
          </p>
          <p className="about__text">
            {t('about.text2', '')}
          </p>
          
          {/* Интерактивный триггер: Бесплатный выезд */}
          <div className="about__promo">
            <div className="about__promo-icon-wrapper">
              <Truck size={24} />
            </div>
            <div className="about__promo-info">
              <h4 className="about__promo-title">{t('about.promoTitle')}</h4>
              <p className="about__promo-desc">{t('about.promoDesc')}</p>
            </div>
          </div>
        </div>

        {/* Правая часть: Сетка с цифрами и фактами */}
        <div className="about__grid">
          
          <div className="about__card">
            <div className="about__card-header">
              <Award className="about__card-icon" size={28} />
              <span className="about__card-number">{t('about.card1Number')}</span>
            </div>
            <h3 className="about__card-title">{t('about.card1Title')}</h3>
            <p className="about__card-desc">{t('about.card1Desc')}</p>
          </div>

          <div className="about__card">
            <div className="about__card-header">
              <CheckCircle className="about__card-icon" size={28} />
              <span className="about__card-number">{t('about.card2Number')}</span>
            </div>
            <h3 className="about__card-title">{t('about.card2Title')}</h3>
            <p className="about__card-desc">{t('about.card2Desc')}</p>
          </div>

          <div className="about__card">
            <div className="about__card-header">
              <ShieldCheck className="about__card-icon" size={28} />
              <span className="about__card-number">{t('about.card3Number')}</span>
            </div>
            <h3 className="about__card-title">{t('about.card3Title')}</h3>
            <p className="about__card-desc">{t('about.card3Desc')}</p>
          </div>

        </div>

      </div>
    </section>
  );
};