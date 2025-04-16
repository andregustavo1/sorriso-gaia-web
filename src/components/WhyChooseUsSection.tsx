
import AnimatedElement from './AnimatedElement';
import { Users, Lightbulb, Home, Heart } from 'lucide-react';

const WhyChooseUsSection = () => {
  return (
    <section id="diferenciais" className="section bg-secondary">
      <div className="container-section">
        <AnimatedElement animation="animate-fade-in" className="text-center mb-12">
          <h2 className="section-title">Por Que Nos Escolher?</h2>
          <p className="section-subtitle mx-auto">Excelência em odontologia para toda a família</p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement animation="animate-slide-up" delay={100}>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full glass">
              <div className="h-14 w-14 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                <Users className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Equipe Especializada</h3>
              <p className="text-secondary-foreground text-center">
                Profissionais qualificados em diversas especialidades para garantir o atendimento completo.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={200}>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full glass">
              <div className="h-14 w-14 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Tecnologia Avançada</h3>
              <p className="text-secondary-foreground text-center">
                Equipamentos modernos para diagnósticos precisos e tratamentos eficientes.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={300}>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full glass">
              <div className="h-14 w-14 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                <Home className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Ambiente Acolhedor</h3>
              <p className="text-secondary-foreground text-center">
                Clínica confortável e preparada para seu bem-estar durante todos os procedimentos.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={400}>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full glass">
              <div className="h-14 w-14 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-7 w-7 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Tratamentos Completos</h3>
              <p className="text-secondary-foreground text-center">
                Soluções integradas para todas as necessidades odontológicas em um só lugar.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
