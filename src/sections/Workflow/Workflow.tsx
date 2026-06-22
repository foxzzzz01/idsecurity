import React from 'react';
import { ClipboardEdit, FileText, FileCheck, ShieldCheck, UserCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Workflow.scss';

export const Workflow: React.FC = () => {
  const { t } = useTranslation();


  const stepsData = [
    {
      icon: <ClipboardEdit size={24} />,
      stepNumber: '01',
      title: t('workflow.steps.step1Title'),
      desc: t('workflow.steps.step1Desc')
    },
    {
      icon: <UserCheck size={24} />,
      stepNumber: '02',
      title: t('workflow.steps.step2Title'),
      desc: t('workflow.steps.step2Desc')
    },
    {
      icon: <FileText size={24} />,
      stepNumber: '03',
      title: t('workflow.steps.step3Title'),
      desc: t('workflow.steps.step3Desc')
    },
    {
      icon: <FileCheck size={24} />,
      stepNumber: '04',
      title: t('workflow.steps.step4Title'),
      desc: t('workflow.steps.step4Desc')
    },
    {
      icon: <ShieldCheck size={24} />,
      stepNumber: '05',
      title: t('workflow.steps.step5Title'),
      desc: t('workflow.steps.step5Desc')
    }
  ];

  return (
    <section className="workflow" id="workflow">
      <div className="workflow__container">
        <h2 className="workflow__title">{t('workflow.title')}</h2>
        <p className="workflow__subtitle">{t('workflow.subtitle')}</p>
        
        <div className="workflow__timeline">
          {stepsData.map((step, index) => (
            <div className="workflow__step" key={index}>
              <div className="workflow__step-badge">
                <span className="workflow__step-number">{step.stepNumber}</span>
                <div className="workflow__step-icon">{step.icon}</div>
              </div>
              <h3 className="workflow__step-title">{step.title}</h3>
              <p className="workflow__step-desc">{step.desc}</p>
              
              {/* Линия-соединитель между шагами (скрывается на последнем шаге) */}
              {index < stepsData.length - 1 && <div className="workflow__connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};