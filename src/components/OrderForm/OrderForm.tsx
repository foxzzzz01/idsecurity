import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './OrderForm.scss';

interface FormErrors {
  name?: boolean;
  phone?: boolean;
  phoneInvalid?: boolean;
}

export const OrderForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    objectType: 'office',
    service: 'cctv'
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors] || (name === 'phone' && errors.phoneInvalid)) {
      setErrors(prev => ({ ...prev, [name]: false, phoneInvalid: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = true;
    }
    
    const rawPhone = formData.phone.trim();
    if (!rawPhone) {
      newErrors.phone = true;
    } else {
      const cleanDigits = rawPhone.replace(/[^\d]/g, ''); 
      const isOnlyDigits = /^\d+$/.test(cleanDigits);
      const isValidLength = cleanDigits.length === 9 || cleanDigits.length === 12;

      if (!isOnlyDigits || !isValidLength) {
        newErrors.phoneInvalid = true;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('loading');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials are missing!");
      setStatus('error');
      return;
    }

   
    const objectLabel = t(`form.objects.${formData.objectType}`);
    const serviceLabel = t(`form.services.${formData.service}`);

    const message = `
🔔 *Новая заявка с сайта!*
👤 *Имя:* ${formData.name}
📞 *Телефон:* ${formData.phone}
🏢 *Тип объекта:* ${objectLabel}
🛠 *Услуга:* ${serviceLabel}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', objectType: 'office', service: 'cctv' });
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const hasPhoneError = errors.phone || errors.phoneInvalid;

  return (
    <div className="order-form">
      <h2 className="order-form__title">{t('form.title')}</h2>
      <p className="order-form__subtitle">{t('form.subtitle')}</p>

      <form className="order-form__body" onSubmit={handleSubmit} noValidate>
        
        {/* Поле: Имя */}
        <div className="order-form__field">
          <label className="order-form__label">{t('form.labelName')}</label>
          <input 
            type="text" 
            name="name"
            className={`order-form__input ${errors.name ? 'order-form__input--error' : ''}`} 
            placeholder={t('form.placeholderName')} 
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="order-form__error-text">{t('form.errorName')}</span>}
        </div>

        {/* Поле: Телефон */}
        <div className="order-form__field">
          <label className="order-form__label">{t('form.labelPhone')}</label>
          <input 
            type="tel" 
            name="phone"
            className={`order-form__input ${hasPhoneError ? 'order-form__input--error' : ''}`} 
            placeholder={t('form.placeholderPhone')} 
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="order-form__error-text">{t('form.errorPhoneEmpty')}</span>}
          {errors.phoneInvalid && <span className="order-form__error-text">{t('form.errorPhoneInvalid')}</span>}
        </div>

        {/* Поле: Тип объекта */}
        <div className="order-form__field">
          <label className="order-form__label">{t('form.labelObjectType')}</label>
          <select 
            name="objectType" 
            className="order-form__select"
            value={formData.objectType}
            onChange={handleChange}
          >
            <option value="office">{t('form.objects.office')}</option>
            <option value="sklad">{t('form.objects.sklad')}</option>
            <option value="home">{t('form.objects.home')}</option>
            <option value="shop">{t('form.objects.shop')}</option>
          </select>
        </div>

        {/* Поле: Услуга */}
        <div className="order-form__field">
          <label className="order-form__label">{t('form.labelService')}</label>
          <select 
            name="service" 
            className="order-form__select"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="cctv">{t('form.services.cctv')}</option>
            <option value="skud">{t('form.services.skud')}</option>
            <option value="fire">{t('form.services.fire')}</option>
            <option value="anti-theft">{t('form.services.anti-theft')}</option>
            <option value="servers">{t('form.services.servers')}</option>
            <option value="network">{t('form.services.network')}</option>
          </select>
        </div>

        <button 
          type="submit" 
          className="order-form__button"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? t('form.btnLoading') : t('form.btnSubmit')}
        </button>

        {status === 'success' && (
          <p className="order-form__status order-form__status--success">{t('form.statusSuccess')}</p>
        )}
        {status === 'error' && (
          <p className="order-form__status order-form__status--error">{t('form.statusError')}</p>
        )}
      </form>
    </div>
  );
};