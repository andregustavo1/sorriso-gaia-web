
import AnimatedElement from './AnimatedElement';

const LastCTASection = () => {
  const navigateToWhatsapp = () => {
    window.open('https://wa.me/5521989052672', '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
      <div className="container-section text-center">
        <AnimatedElement animation="animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Pronto para Transformar seu Sorriso?
          </h2>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={200}>
          <p className="text-lg sm:text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Agende uma avaliação e descubra como podemos ajudar a cuidar da sua saúde bucal com 
            tratamentos personalizados e atendimento de excelência.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-in" delay={400}>
          <button 
            className="bg-white text-primary hover:bg-blue-50 px-8 py-4 rounded-md font-bold text-lg transition-colors"
            onClick={navigateToWhatsapp}
          >
            Agendar Consulta
          </button>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default LastCTASection;
