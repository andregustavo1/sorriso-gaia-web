
import AnimatedElement from './AnimatedElement';

const HeroSection = () => {
  const navigateToWhatsapp = () => {
    window.open('https://wa.me/5521989052672', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-white pt-20">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      
      <div className="container-section relative z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
          <AnimatedElement animation="animate-fade-in" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Sorrisos Saudáveis, Atendimento Personalizado
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={400}>
            <p className="text-xl sm:text-2xl text-secondary-foreground mb-10">
              Clínica Odontológica Multidisciplinar
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-fade-in" delay={600}>
            <button 
              className="cta-button text-lg"
              onClick={navigateToWhatsapp}
            >
              Conheça Nossos Serviços
            </button>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="animate-fade-in-right" delay={800} className="w-full lg:w-1/2">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1780" 
              alt="Consultório odontológico moderno" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default HeroSection;
