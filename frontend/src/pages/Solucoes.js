import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Calendar, Users, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
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
      color: 'from-[#035AA6] to-[#8593A6]'
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
      color: 'from-[#457ABF] to-[#035AA6]'
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
      color: 'from-[#035AA6] to-[#457ABF]'
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
      color: 'from-[#457ABF] to-[#8593A6]'
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
          <h1 className="text-6xl md:text-7xl font-black text-[#035AA6] mb-6 tracking-tight">Nossas Soluções</h1>
          <p className="text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
            Inteligência operacional aplicada às necessidades reais do seu negócio
          </p>
        </div>
      </section>

      {/* Solutions Detail Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div 
                key={index} 
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Card className="modern-card border-0 bg-gradient-to-br from-white to-[#F8F9FA] shadow-2xl rounded-3xl overflow-hidden">
                    <CardHeader className="p-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 shadow-xl`}>
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-4xl text-[#035AA6] font-black mb-4 tracking-tight">{solution.title}</CardTitle>
                      <CardDescription className="text-lg text-[#64748B] leading-relaxed">{solution.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 pt-0">
                      <div className="space-y-4">
                        {solution.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start gap-4 group">
                            <div className="w-6 h-6 bg-gradient-to-br from-[#457ABF]/10 to-[#035AA6]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle2 className="h-4 w-4 text-[#457ABF]" />
                            </div>
                            <p className="text-[#0A0E1A] font-medium">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`relative w-80 h-80 bg-gradient-to-br ${solution.color} rounded-[3rem] opacity-10 transform hover:scale-105 hover:rotate-6 transition-all duration-700`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-40 w-40 text-white opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#F8F9FA] to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#035AA6]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#457ABF]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-[#035AA6] mb-6 tracking-tight">Qual solução faz sentido para você?</h2>
          <p className="text-xl text-[#64748B] mb-12">
            Vamos conversar sobre como podemos organizar sua operação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-[#035AA6] to-[#457ABF] hover:shadow-2xl hover:shadow-[#035AA6]/30 text-white text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105"
              onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#035AA6] text-[#035AA6] hover:bg-[#035AA6] hover:text-white text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105"
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