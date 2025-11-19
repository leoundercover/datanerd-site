import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Início' },
    { path: '/solucoes', label: 'Soluções' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' }
  ];

  const solutions = [
    'Atendimento Inteligente',
    'Agendamentos Inteligentes',
    'NerdHire',
    'Projetos sob medida'
  ];

  return (
    <footer className="bg-[#013440] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">DataNerd</h3>
            <p className="text-[#E5E5E5] leading-relaxed">
              Inteligência operacional para quem vive da própria rotina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#E5E5E5] hover:text-[#038C8C] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    to="/solucoes"
                    className="text-[#E5E5E5] hover:text-[#038C8C] transition-colors duration-300"
                  >
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5511981793555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E5E5E5] hover:text-[#038C8C] transition-colors duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>(11) 98179-3555</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nerd@datanerd.com.br"
                  className="flex items-center gap-2 text-[#E5E5E5] hover:text-[#038C8C] transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  <span>nerd@datanerd.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511981793555"
                  className="flex items-center gap-2 text-[#E5E5E5] hover:text-[#038C8C] transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span>(11) 98179-3555</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#026873] mt-10 pt-8 text-center">
          <p className="text-[#E5E5E5]">
            © {currentYear} DataNerd. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;