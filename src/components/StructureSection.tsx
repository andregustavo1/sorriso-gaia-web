
import { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const StructureSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1770",
      title: "Recepção Acolhedora",
      description: "Nossa recepção foi projetada para proporcionar conforto e tranquilidade desde o primeiro momento."
    },
    {
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1868",
      title: "Consultórios Modernos",
      description: "Ambientes equipados com tecnologia de ponta para garantir o melhor atendimento."
    },
    {
      image: "https://images.unsplash.com/photo-1583608247524-b0fea0f9150b?q=80&w=1770",
      title: "Equipamentos de Última Geração",
      description: "Investimos em tecnologia para oferecer diagnósticos precisos e tratamentos eficientes."
    },
    {
      image: "https://images.unsplash.com/photo-1629909615468-b70c0994e318?q=80&w=1868",
      title: "Sala de Esterilização",
      description: "Seguimos rigorosos protocolos de biossegurança para garantir sua proteção."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="estrutura" className="section bg-secondary">
      <div className="container-section">
        <AnimatedElement animation="animate-fade-in" className="text-center mb-12">
          <h2 className="section-title">Conheça Nossa Estrutura</h2>
          <p className="section-subtitle mx-auto">
            Investimos em um ambiente moderno, acolhedor e equipado com tecnologia de ponta
          </p>
        </AnimatedElement>
        
        <div className="relative w-full max-w-5xl mx-auto">
          <AnimatedElement animation="animate-fade-in" className="rounded-lg overflow-hidden shadow-xl">
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{slides[currentSlide].title}</h3>
                <p>{slides[currentSlide].description}</p>
              </div>
            </div>
          </AnimatedElement>
          
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            aria-label="Próximo slide"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
