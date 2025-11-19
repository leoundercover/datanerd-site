import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Contato = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Resposta rápida no seu mensageiro favorito',
      action: '(11) 98179-3555',
      link: 'https://wa.me/5511981793555'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Envie sua mensagem detalhada',
      action: 'nerd@datanerd.com.br',
      link: 'mailto:nerd@datanerd.com.br'
    },
    {
      icon: Phone,
      title: 'Telefone',
      description: 'Prefere falar? Também estamos disponíveis',
      action: '(11) 98179-3555',
      link: 'tel:+5511981793555'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#013440] mb-6">Fale com a gente</h1>
          <p className="text-xl text-[#3F3F3F] max-w-3xl mx-auto">
            Escolha o canal que preferir para começarmos uma conversa
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="border-2 border-[#E5E5E5] hover:border-[#038C8C] hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#038C8C] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#038C8C]" />
                    </div>
                    <CardTitle className="text-xl text-[#013440]">{method.title}</CardTitle>
                    <CardDescription className="text-[#3F3F3F]">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline"
                      className="w-full border-[#013440] text-[#013440] hover:bg-[#013440] hover:text-white transition-all duration-300"
                      onClick={() => window.open(method.link, '_blank')}
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
      <section className="py-12 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#013440] mb-4">Ou preencha o formulário</h2>
            <p className="text-lg text-[#3F3F3F]">
              Responderemos em até 24 horas
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ minHeight: '600px' }}>
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#013440] mb-4">Horário de atendimento</h3>
          <p className="text-lg text-[#3F3F3F]">
            Segunda a sexta: 9h às 18h<br />
            Sábados: 9h às 13h
          </p>
          <p className="text-[#3F3F3F] mt-6">
            Mensagens recebidas fora do horário serão respondidas no próximo dia útil
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contato;