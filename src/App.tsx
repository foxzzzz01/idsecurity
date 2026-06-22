import { useRef } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { About } from './sections/About/About';
import { Workflow } from './sections/Workflow/Workflow';
import { Clients } from './sections/Clients/Clients'; 
import { OrderForm } from './components/OrderForm/OrderForm';
import { Footer } from './components/Footer/Footer';
import './i18n/config'; 

function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header onContactClick={scrollToForm} />
      
      <div style={{ paddingTop: '69px' }}>
        <Hero onCtaClick={scrollToForm} />
        
        <Services />
        
        <About />
        
        <Workflow />
        
        {/* Креативный блок бегущей строки клиентов */}
        <Clients />
        
        <section id="form-section" style={{ padding: '100px 20px', backgroundColor: '#0f172a' }}>
          <div ref={formRef}>
            <OrderForm />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;