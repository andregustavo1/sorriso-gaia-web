
import AnimatedElement from './AnimatedElement';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="section bg-white">
      <div className="container-section">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

          
          <div className="w-full lg:w-3/5">
            <AnimatedElement animation="animate-fade-in">
              <h2 className="section-title">Sobre Dr. Luis Eduardo Gaia Soares</h2>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={200}>
              <p className="text-secondary-foreground text-lg mb-8">
                Nossa clínica odontológica multidisciplinar se dedica a proporcionar atendimento de excelência, 
                com foco na saúde bucal completa e no bem-estar dos pacientes. Contamos com uma estrutura moderna, 
                equipamentos de última geração e uma equipe qualificada para oferecer o melhor tratamento odontológico.
              </p>
            </AnimatedElement>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatedElement animation="animate-fade-in" delay={300} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-light mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-1">Atendimento multidisciplinar</h3>
                  <p className="text-secondary-foreground">Equipe de especialistas para cuidar de todas as suas necessidades.</p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="animate-fade-in" delay={400} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-light mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-1">Técnicas avançadas</h3>
                  <p className="text-secondary-foreground">Utilizamos os métodos mais modernos em tratamentos dentários.</p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="animate-fade-in" delay={500} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-light mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-1">Ambiente confortável</h3>
                  <p className="text-secondary-foreground">Clínica planejada para garantir seu bem-estar durante as consultas.</p>
                </div>
              </AnimatedElement>
              
              <AnimatedElement animation="animate-fade-in" delay={600} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary-light mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-montserrat font-bold text-lg mb-1">Tratamentos personalizados</h3>
                  <p className="text-secondary-foreground">Cada paciente recebe um plano de tratamento único e adequado.</p>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
