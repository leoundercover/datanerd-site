import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, Users, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Solucoes = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atendimento Inteligente',
      description: 'Organize conversas, automatize respostas e mantenha o controle da sua comunicação.',
      features: [
        'Organização automática de conversas',
        'Respostas padronizadas configuráveis',
        'Histórico completo de interações',
        'Notificações inteligentes'
      ],
      color: '#038C8C'
    },
    {
      icon: Calendar,
      title: 'Agendamentos Inteligentes',
      description: 'Gestão completa de horários, lembretes automáticos e controle de agenda.',
      features: [
        'Agenda sincronizada em tempo real',
        'Lembretes automáticos por WhatsApp',
        'Gestão de cancelamentos e remarcações',
        'Relatórios de ocupação'
      ],
      color: '#026873'
    },
    {
      icon: Users,
      title: 'NerdHire',
      description: 'Processos seletivos organizados, do anúncio à contratação.',
      features: [
        'Publicação centralizada de vagas',
        'Triagem automatizada de candidatos',
        'Organização de entrevistas',
        'Acompanhamento do processo'
      ],
      color: '#038C7F'
    },
    {
      icon: Lightbulb,
      title: 'Projetos sob medida',
      description: 'Soluções personalizadas para necessidades específicas do seu negócio.',
      features: [
        'Análise da sua operação atual',
        'Desenvolvimento personalizado',
        'Integração com sistemas existentes',
        'Suporte dedicado'
      ],
      color: '#593954'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#013440] mb-6">Nossas Soluções</h1>
          <p className="text-xl text-[#3F3F3F] max-w-3xl mx-auto">
            Inteligência operacional aplicada às necessidades reais do seu negócio
          </p>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
                <div className="flex-1">
                  <Card className="border-2 border-[#E5E5E5] hover:border-[#038C8C] transition-all duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${solution.color}15` }}>
                        <Icon className="h-8 w-8" style={{ color: solution.color }} />
                      </div>
                      <CardTitle className="text-3xl text-[#013440] mb-3">{solution.title}</CardTitle>
                      <CardDescription className="text-lg text-[#3F3F3F]">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {solution.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#038C8C] mt-0.5 flex-shrink-0" />
                            <p className="text-[#222222]">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${solution.color}10` }}>
                    <Icon className="h-32 w-32" style={{ color: solution.color, opacity: 0.3 }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#013440] mb-6">Qual solução faz sentido para você?</h2>
          <p className="text-xl text-[#3F3F3F] mb-10">
            Vamos conversar sobre como podemos organizar sua operação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#013440] hover:bg-[#026873] text-white text-lg px-8 py-6 transition-colors duration-300"
              onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#013440] text-[#013440] hover:bg-[#013440] hover:text-white text-lg px-8 py-6 transition-all duration-300"
              asChild
            >
              <Link to="/contato">Enviar mensagem</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucoes;