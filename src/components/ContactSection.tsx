
import AnimatedElement from './AnimatedElement';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="section bg-secondary">
      <div className="container-section">
        <AnimatedElement animation="animate-fade-in" className="text-center mb-12">
          <h2 className="section-title">Entre em Contato</h2>
          <p className="section-subtitle mx-auto">
            Estamos prontos para cuidar do seu sorriso
          </p>
        </AnimatedElement>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <AnimatedElement animation="animate-slide-up" className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-primary">Informações de Contato</h3>
              
              <div className="space-y-6">
                <a href="https://wa.me/5521989052672" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group">
                  <div className="h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:bg-primary-light group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5 text-primary-light group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">WhatsApp</p>
                    <p className="text-secondary-foreground">(21) 98905-2672</p>
                  </div>
                </a>
                
                <a href="mailto:drluiseduardogaiasoares@gmail.com" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group">
                  <div className="h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:bg-primary-light group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5 text-primary-light group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">E-mail</p>
                    <p className="text-secondary-foreground">drluiseduardogaiasoares@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/drluiseduardogaia" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group">
                  <div className="h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:bg-primary-light group-hover:text-white transition-colors">
                    <Instagram className="h-5 w-5 text-primary-light group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Instagram</p>
                    <p className="text-secondary-foreground">@drluiseduardogaia</p>
                  </div>
                </a>
                
                <a href="https://www.facebook.com/drluiseduardogaia" target="_blank" rel="noopener noreferrer" className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left group">
                  <div className="h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 group-hover:bg-primary-light group-hover:text-white transition-colors">
                    <Facebook className="h-5 w-5 text-primary-light group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Facebook</p>
                    <p className="text-secondary-foreground">drluiseduardogaia</p>
                  </div>
                </a>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                  <div className="h-12 w-12 rounded-full bg-primary-light bg-opacity-10 flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
                    <MapPin className="h-5 w-5 text-primary-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Endereço</p>
                    <p className="text-secondary-foreground">
                      Estrada do Galeão, 2730 sala 206<br />
                      Ilha do Governador, Rio de Janeiro/RJ<br />
                      CEP: 21931-582
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="animate-slide-up" delay={200} className="w-full lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg h-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.036726776621!2d-43.2075062!3d-22.8672408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983bbe72e31f3%3A0x6b6385745d0469e9!2sEstrada%20do%20Gale%C3%A3o%2C%202730%20-%20Ilha%20do%20Governador%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021931-582!5e0!3m2!1spt-BR!2sbr!4v1713364562981!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da clínica"
              ></iframe>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
