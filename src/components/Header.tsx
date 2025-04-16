
import { useState, useEffect } from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement; // Type casting to HTMLElement
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionHeight = htmlSection.offsetHeight;
        const id = section.getAttribute('id') || '';
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToWhatsapp = () => {
    window.open('https://wa.me/5521989052672', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-section flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary">
            <a href="#home">Dr. Luis Eduardo Gaia</a>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-7">
          <a 
            href="#home" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'home' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'sobre' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Sobre
          </a>
          <a 
            href="#diferenciais" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'diferenciais' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Por Que Nos Escolher
          </a>
          <a 
            href="#servicos" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'servicos' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Serviços
          </a>
          <a 
            href="#estrutura" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'estrutura' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Estrutura
          </a>
          <a 
            href="#contato" 
            className={`text-sm font-montserrat font-medium transition-colors hover:text-primary-light ${
              activeSection === 'contato' ? 'text-primary-light' : 'text-primary'
            }`}
          >
            Contato
          </a>
          <button 
            className="cta-button"
            onClick={navigateToWhatsapp}
          >
            Agendar Consulta
          </button>
        </nav>
        
        <div className="flex md:hidden space-x-4">
          <button 
            className="cta-button text-sm px-4 py-2"
            onClick={navigateToWhatsapp}
          >
            Agendar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
