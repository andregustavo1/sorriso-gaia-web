
import { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServicesSection from '../components/ServicesSection';
import StructureSection from '../components/StructureSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';
import LastCTASection from '../components/LastCTASection';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    // Update document title and meta description
    document.title = "Dr. Luis Eduardo Gaia Soares Odontologia";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Atendimento odontológico completo e multidisciplinar com foco na qualidade e conforto do paciente. Clínica odontológica na Ilha do Governador, Rio de Janeiro.");
    }
    
    // Animation on scroll setup
    const observerOptions = {
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <StructureSection />
      <ProcessSection />
      <ContactSection />
      <LastCTASection />
      <Footer />
    </div>
  );
};

export default Index;
