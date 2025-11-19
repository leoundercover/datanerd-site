import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

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
    <footer className="relative bg-gradient-to-br from-[#0A0E1A] via-[#5E17EB] to-[#F80068] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/5 rounded-xl backdrop-blur-xl"></div>
              <h3 className="text-2xl font-bold">DataNerd</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Inteligência operacional para quem vive da própria rotina.
            </p>
            <div className="flex gap-3 mt-6">
              <a 
                href="https://wa.me/5511981793555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href="mailto:nerd@datanerd.com.br"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+5511981793555"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full"></div>
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-all duration-300 text-sm group flex items-center gap-2"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full"></div>
              Soluções
            </h4>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <Link
                    to="/solucoes"
                    className="text-white/70 hover:text-white transition-all duration-300 text-sm group flex items-center gap-2"
                  >
                    <span>{solution}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-white to-transparent rounded-full"></div>
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5511981793555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm flex items-start gap-3 group"
                >
                  <MessageCircle className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span>(11) 98179-3555</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:nerd@datanerd.com.br"
                  className="text-white/70 hover:text-white transition-all duration-300 text-sm flex items-start gap-3 group"
                >
                  <Mail className="h-4 w-4 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span>nerd@datanerd.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} DataNerd. Todos os direitos reservados.
            </p>
            <p className="text-white/40 text-xs">
              Desenvolvido com inteligência e simplicidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;