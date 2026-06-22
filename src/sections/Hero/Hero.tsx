import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Hero.scss';

import heroBg from '../../assets/bg.jpg';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(calc(-50% + ${mousePos.x * -40}px), calc(-50% + ${mousePos.y * -40}px))`
  };

  const parallaxStyleReverse = {
    transform: `translate(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 50}px))`
  };

  return (
    <section 
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Анимированные плазменные сферы фона */}
      <div className="hero__plasma-glow hero__plasma-glow--primary" style={parallaxStyle}></div>
      <div className="hero__plasma-glow hero__plasma-glow--accent" style={parallaxStyleReverse}></div>

      {/* Контейнер с динамическим классом для запуска анимации появления */}
      <div className={`hero__container ${isLoaded ? 'hero__container--visible' : ''}`}>
        <div className="hero__badge">
          <Shield size={16} className="hero__badge-icon" />
          <span>{t('hero.badge')}</span>
        </div>
        
        <h1 className="hero__title">
          {t('hero.titleMain')} <br />
          <span className="hero__title--accent">{t('hero.titleAccent')}</span>
        </h1>
        
        <p className="hero__subtitle">
          {t('hero.subtitle')}
        </p>
        
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={onCtaClick}>
            {t('hero.btnCta')}
          </button>
          <a href="#services" className="hero__btn hero__btn--secondary">
            {t('hero.btnSecondary')}
          </a>
        </div>
      </div>
      
      {/* Нижнее размытие для мягкого перехода к следующей секции */}
      <div className="hero__bottom-fade"></div>
    </section>
  );
};