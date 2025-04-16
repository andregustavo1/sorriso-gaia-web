
import AnimatedElement from './AnimatedElement';
import { CalendarCheck, FileSearch, FileText, FileCheck, Clock } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="processo" className="section bg-white">
      <div className="container-section">
        <AnimatedElement animation="animate-fade-in" className="text-center mb-12">
          <h2 className="section-title">Como Funcionam Nossos Atendimentos</h2>
          <p className="section-subtitle mx-auto">
            Um processo simples e organizado para garantir o melhor tratamento
          </p>
        </AnimatedElement>
        
        <div className="relative">
          <div className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 relative">
            <AnimatedElement animation="animate-fade-in" delay={100}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Agendamento</h3>
                  <p className="text-secondary-foreground">
                    Marque sua consulta por telefone ou WhatsApp de maneira rápida e prática, com 
                    horários flexíveis para sua comodidade.
                  </p>
                </div>
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center text-white z-10">
                    <CalendarCheck className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={200}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12"></div>
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center text-white z-10">
                    <FileSearch className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Avaliação Inicial</h3>
                  <p className="text-secondary-foreground">
                    Diagnóstico completo e plano de tratamento personalizado, com exames detalhados 
                    para identificar suas necessidades.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={300}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Planejamento</h3>
                  <p className="text-secondary-foreground">
                    Apresentação das opções de tratamento, prazos e investimento, 
                    com todas as informações para sua decisão.
                  </p>
                </div>
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center text-white z-10">
                    <FileText className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={400}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12"></div>
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center text-white z-10">
                    <FileCheck className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Execução</h3>
                  <p className="text-secondary-foreground">
                    Realização dos procedimentos necessários com precisão e conforto, 
                    seguindo o planejamento estabelecido.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-in" delay={500}>
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 text-center md:text-right">
                  <h3 className="text-xl font-bold mb-2 font-montserrat">Acompanhamento</h3>
                  <p className="text-secondary-foreground">
                    Revisões periódicas para garantir resultados duradouros e 
                    manutenção da saúde bucal a longo prazo.
                  </p>
                </div>
                <div className="relative flex items-center justify-center md:w-0">
                  <div className="h-16 w-16 rounded-full bg-primary-light flex items-center justify-center text-white z-10">
                    <Clock className="h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
