import React, { useState, useEffect, useRef } from 'react';
import { Camera, ShieldAlert, Flame, Ban, Server, Network, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Services.scss';

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const servicesData = [
    {
      icon: <Camera size={28} />,
      title: t('services.items.cctvTitle'),
      desc: t('services.items.cctvDesc')
    },
    {
      icon: <ShieldAlert size={28} />,
      title: t('services.items.skudTitle'),
      desc: t('services.items.skudDesc')
    },
    {
      icon: <Flame size={28} />,
      title: t('services.items.fireTitle'),
      desc: t('services.items.fireDesc')
    },
    {
      icon: <Ban size={28} />,
      title: t('services.items.antiTheftTitle'),
      desc: t('services.items.antiTheftDesc')
    },
    {
      icon: <Server size={28} />,
      title: t('services.items.serversTitle'),
      desc: t('services.items.serversDesc')
    },
    {
      icon: <Network size={28} />,
      title: t('services.items.networkTitle'),
      desc: t('services.items.networkDesc')
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className={`services__container ${isVisible ? 'services__container--animate' : ''}`}>
        
        <h2 className="services__title">{t('services.title')}</h2>
        <p className="services__subtitle">
          {t('services.subtitle')} <strong>{t('services.subtitleStrong')}</strong>.
        </p>
        
        {/* Сетка основных услуг */}
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div className="services__card" key={index}>
              <div className="services__card-glow"></div>
              <div className="services__card-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Ремонт и аудит сторонних систем */}
        <div className="services__repair-banner">
          <div className="services__repair-icon-box">
            <div className="services__repair-icon">
              <Wrench size={24} />
            </div>
            <span className="services__repair-pulse"></span>
          </div>
          <div className="services__repair-content">
            <h3 className="services__repair-title">{t('services.repairTitle')}</h3>
            <p className="services__repair-text">
              {t('services.repairText')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};