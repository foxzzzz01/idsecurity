import React from 'react';
import { useTranslation } from 'react-i18next';
import './Clients.scss';

import logo1 from '../../assets/client-1.jpg';
import logo2 from '../../assets/client-2.jpg';
import logo3 from '../../assets/client-3.png';
import logo4 from '../../assets/client-4.png';
import logo5 from '../../assets/client-5.svg';
import logo6 from '../../assets/client-6.png';
import logo7 from '../../assets/client-7.svg';
import logo8 from '../../assets/client-8.jpg';
import logo9 from '../../assets/client-9.jpg';
import logo10 from '../../assets/client-10.png';
import logo11 from '../../assets/client-11.jpg';
import logo12 from '../../assets/client-12.png';
import logo13 from '../../assets/client-13.png';
import logo14 from '../../assets/client-14.png';
import logo15 from '../../assets/client-15.jpg';
import logo16 from '../../assets/client-16.jpg';

const CLIENTS_LOGOS = [
  { id: 1, src: logo1, name: 'LPP CA' },
  { id: 2, src: logo2, name: 'AGMK' },
  { id: 3, src: logo3, name: 'Tommy Hilfiger' },
  { id: 4, src: logo4, name: 'Gerry Weber' },
  { id: 5, src: logo5, name: 'Gulliver' },
  { id: 6, src: logo6, name: 'Under Armour' },
  { id: 7, src: logo7, name: 'Calvin Klein' },
  { id: 8, src: logo8, name: 'AO "Узметкомбинат"' },
  { id: 9, src: logo9, name: 'Акционерное Общество «АММОФОС-МАКСАМ»' },
  { id: 10, src: logo10, name: 'BI Group' },
  { id: 11, src: logo11, name: 'Татнефть' },
  { id: 12, src: logo12, name: 'Ўзбекнефтгаз' },
  { id: 13, src: logo13, name: 'LUKOIL' },
  { id: 14, src: logo14, name: 'Туронбанк' },
  { id: 15, src: logo15, name: 'Hamkorbank' },
  { id: 16, src: logo16, name: 'Tashkent City Mall' },
];

export const Clients: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="clients" id="clients">
      <div className="clients__container">
        <span className="clients__badge">{t('clients.badge')}</span>
        <h2 className="clients__title">{t('clients.title')}</h2>
        <p className="clients__subtitle">
          {t('clients.subtitle')}
        </p>
      </div>

      <div className="clients__slider">
        <div className="clients__track">
          
          {/* Первый цикл (все 16 логотипов) */}
          {CLIENTS_LOGOS.map((client) => (
            <div className="clients__item" key={`first-${client.id}`}>
              <div className="clients__item-glow"></div>
              <img src={client.src} alt={client.name} className="clients__img" />
            </div>
          ))}

          {/* Второй дублирующий цикл для идеальной бесшовной ленты */}
          {CLIENTS_LOGOS.map((client) => (
            <div className="clients__item" key={`second-${client.id}`}>
              <div className="clients__item-glow"></div>
              <img src={client.src} alt={client.name} className="clients__img" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};