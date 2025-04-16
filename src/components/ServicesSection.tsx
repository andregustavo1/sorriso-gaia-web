
import AnimatedElement from './AnimatedElement';
import { Smile, FileSymlink, ThumbsUp, Sparkles, FileCog, Baby } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="servicos" className="section bg-white">
      <div className="container-section">
        <AnimatedElement animation="animate-fade-in" className="text-center mb-12">
          <h2 className="section-title">Serviços Odontológicos</h2>
          <p className="section-subtitle mx-auto">
            Nossa equipe oferece tratamentos completos para toda a família, sempre com excelência e cuidado
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedElement animation="animate-slide-up" delay={100}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <Smile className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Clínica Geral</h3>
              <p className="text-secondary-foreground">
                Prevenção e tratamentos básicos para manter a saúde bucal em dia, incluindo limpezas, 
                restaurações e orientações de higiene oral.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={200}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <FileSymlink className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Ortodontia</h3>
              <p className="text-secondary-foreground">
                Alinhamento dos dentes e correção da mordida utilizando aparelhos modernos, 
                incluindo opções estéticas e convencionais.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={300}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <ThumbsUp className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Implantodontia</h3>
              <p className="text-secondary-foreground">
                Implantes dentários com tecnologia de ponta para substituir dentes perdidos de forma 
                natural e duradoura, devolvendo estética e função.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={400}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Estética Dental</h3>
              <p className="text-secondary-foreground">
                Procedimentos para um sorriso mais bonito, incluindo clareamento dental, facetas em 
                porcelana e restaurações estéticas de alta qualidade.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={500}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <FileCog className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Endodontia</h3>
              <p className="text-secondary-foreground">
                Tratamentos de canal precisos e confortáveis utilizando técnicas modernas que 
                preservam a estrutura dental e minimizam o desconforto.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={600}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full border border-gray-100">
              <div className="mb-4 h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center">
                <Baby className="h-6 w-6 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-3">Odontopediatria</h3>
              <p className="text-secondary-foreground">
                Cuidados especiais para crianças, com atendimento lúdico e acolhedor, criando 
                experiências positivas e estabelecendo bons hábitos desde cedo.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
