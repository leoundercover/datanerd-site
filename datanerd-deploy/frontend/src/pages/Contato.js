import React from 'react';
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Contato = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta rápida no seu mensageiro favorito',
      action: '(11) 98179-3555',
      link: 'https://wa.me/5511981793555',
      color: 'from-[#035AA6] to-[#8593A6]'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Envie sua mensagem detalhada',
      action: 'nerd@datanerd.com.br',
      link: 'mailto:nerd@datanerd.com.br',
      color: 'from-[#457ABF] to-[#035AA6]'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Prefere falar? Também estamos disponíveis',
      action: '(11) 98179-3555',
      link: 'tel:+5511981793555',
      color: 'from-[#035AA6] to-[#457ABF]'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-[#F8F9FA] to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#035AA6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#457ABF]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-[#035AA6] mb-6 tracking-tight">Fale com a gente</h1>
          <p className="text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
            Escolha o canal que preferir para começarmos uma conversa
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card 
                  key={index} 
                  className="modern-card group border-0 bg-white shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500"
                >
                  <CardHeader className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#035AA6] font-bold mb-3">{method.title}</CardTitle>
                    <CardDescription className="text-[#64748B] text-base">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-[#035AA6]/5 to-[#457ABF]/5 hover:from-[#035AA6] hover:to-[#457ABF] text-[#035AA6] hover:text-white border border-[#035AA6]/20 hover:border-transparent rounded-xl py-6 transition-all duration-300 font-medium"
                      onClick={() => window.open(method.link, method.link.startsWith('http') ? '_blank' : '_self')}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#035AA6] mb-4 tracking-tight">Ou preencha o formulário</h2>
            <p className="text-lg text-[#64748B]">
              Responderemos em até 24 horas
            </p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-[#035AA6]/10" style={{ minHeight: '600px' }}>
            <iframe
              src="https://tally.so/embed/mZpYR0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulário de Contato DataNerd"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-[#F8F9FA] to-white shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#035AA6] to-[#457ABF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#035AA6] mb-6">Horário de atendimento</h3>
              <div className="space-y-3 text-lg text-[#64748B]">
                <p className="font-medium">
                  Segunda a sexta: <span className="text-[#035AA6] font-bold">9h às 18h</span>
                </p>
                <p className="font-medium">
                  Sábados: <span className="text-[#035AA6] font-bold">9h às 13h</span>
                </p>
              </div>
              <p className="text-[#64748B] mt-8 text-base">
                Mensagens recebidas fora do horário serão respondidas no próximo dia útil
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contato;