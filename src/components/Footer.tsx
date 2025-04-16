
import { Instagram, Facebook, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const navigateToWhatsapp = () => {
    window.open('https://wa.me/5521989052672', '_blank');
  };

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Dr. Luis Eduardo Gaia</h3>
            <p className="text-blue-200 mb-4">
              Clínica odontológica multidisciplinar com foco na qualidade e conforto do paciente.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-blue-200 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#estrutura" className="text-blue-200 hover:text-white transition-colors">Estrutura</a></li>
              <li><a href="#contato" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Clínica Geral</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Ortodontia</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Implantodontia</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Estética Dental</a></li>
              <li><a href="#servicos" className="text-blue-200 hover:text-white transition-colors">Endodontia</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-xl mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5521989052672" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-blue-200 hover:text-white"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>(21) 98905-2672</span>
              </a>
              <a 
                href="mailto:drluiseduardogaiasoares@gmail.com"
                className="flex items-center text-blue-200 hover:text-white"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span>drluiseduardogaiasoares@gmail.com</span>
              </a>
            </div>
            
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.instagram.com/drluiseduardogaia"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/drluiseduardogaia"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Dr. Luis Eduardo Gaia Soares Odontologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
