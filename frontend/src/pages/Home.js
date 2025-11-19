import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Calendar, Users, Lightbulb, Building2, Dumbbell, Scale, Store, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atendimento Inteligente',
      description: 'Organize conversas, automatize respostas e mantenha o controle da sua comunicação.',
      color: 'from-[#5E17EB] to-[#F80068]'
    },
    {
      icon: Calendar,
      title: 'Agendamentos Inteligentes',
      description: 'Gestão completa de horários, lembretes automáticos e controle de agenda.',
      color: 'from-[#00F5FF] to-[#22B9FF]'
    },
    {
      icon: Users,
      title: 'NerdHire',
      description: 'Processos seletivos organizados, do anúncio à contratação.',
      color: 'from-[#F80068] to-[#FA6101]'
    },
    {
      icon: Lightbulb,
      title: 'Projetos sob medida',
      description: 'Soluções personalizadas para necessidades específicas do seu negócio.',
      color: 'from-[#FA6101] to-[#5E17EB]'
    }
  ];

  const philosophy = [
    { icon: Sparkles, text: 'Simplicidade que funciona' },
    { icon: Target, text: 'Clareza em cada decisão' },
    { icon: Zap, text: 'Operação real, não teoria' },
    { icon: Lightbulb, text: 'Inteligência útil, não complexidade' }
  ];

  const realCases = [
    {
      icon: Building2,
      business: 'Clínica',
      challenge: 'Agendamentos desorganizados',
      solution: 'Sistema de agenda integrado com lembretes automáticos',
      impact: '70% menos faltas'
    },
    {
      icon: Dumbbell,
      business: 'Personal Trainer',
      challenge: 'Perda de tempo com confirmações',
      solution: 'Automação de agendamentos e check-ins',
      impact: '5h/semana economizadas'
    },
    {
      icon: Scale,
      business: 'Escritório Jurídico',
      challenge: 'Atendimento inicial demorado',
      solution: 'Triagem inteligente e organização de processos',
      impact: '3x mais eficiência'
    },
    {
      icon: Store,
      business: 'Pequeno Negócio',
      challenge: 'Gestão manual do dia a dia',
      solution: 'Centralização operacional simples',
      impact: 'ROI positivo em 2 meses'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#F8F9FA] to-white">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#5E17EB]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F80068]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00F5FF]/8 to-[#22B9FF]/8 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#5E17EB]/10 to-[#F80068]/10 backdrop-blur-xl rounded-full px-6 py-2 mb-8 border border-[#5E17EB]/20">
              <Sparkles className="h-4 w-4 text-[#F80068]" />
              <span className="text-sm font-medium text-[#5E17EB]">Inteligência Operacional</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-[#5E17EB] via-[#F80068] to-[#FA6101] bg-clip-text text-transparent">
                Inteligência operacional
              </span>
              <br />
              <span className="text-[#0A0E1A]">para quem vive da</span>
              <br />
              <span className="text-[#0A0E1A]">própria rotina</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#64748B] mb-12 max-w-3xl mx-auto leading-relaxed">
              Simplicidade com inteligência, feita para a vida real do seu negócio
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="group bg-gradient-to-r from-[#5E17EB] to-[#F80068] hover:shadow-2xl hover:shadow-[#5E17EB]/40 text-white text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105"
                onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
              >
                Falar com a DataNerd
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#5E17EB] text-[#5E17EB] hover:bg-[#5E17EB] hover:text-white text-lg px-10 py-7 rounded-2xl transition-all duration-500 backdrop-blur-xl hover:scale-105"
                asChild
              >
                <Link to="/solucoes">Ver soluções</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#5E17EB] to-[#F80068] bg-clip-text text-transparent mb-6 tracking-tight">Soluções</h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Ferramentas inteligentes para organizar sua operação
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={index} 
                  className={`modern-card group border-0 bg-white shadow-xl shadow-[#013440]/5 hover:shadow-2xl hover:shadow-[#013440]/10 rounded-3xl overflow-hidden transition-all duration-500 ${
                    index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="relative p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#013440] font-bold mb-3">{solution.title}</CardTitle>
                    <CardDescription className="text-[#64748B] text-base leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#F8F9FA] to-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#013440] mb-6 tracking-tight">Como pensamos</h2>
            <p className="text-xl text-[#64748B]">Princípios que guiam nosso trabalho</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white p-8 rounded-3xl border-2 border-transparent hover:border-[#593954]/20 transition-all duration-500 hover:shadow-xl hover:shadow-[#593954]/10 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#013440] to-[#593954] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-xl text-[#0A0E1A] font-semibold leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Cases Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#013440] mb-6 tracking-tight">Exemplos da vida real</h2>
            <p className="text-xl text-[#64748B] max-w-2xl mx-auto">
              Veja como transformamos operações do dia a dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realCases.map((case_, index) => {
              const Icon = case_.icon;
              return (
                <Card 
                  key={index} 
                  className="modern-card group border-0 bg-gradient-to-br from-white to-[#F8F9FA] shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500"
                >
                  <CardHeader className="p-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#013440]/10 to-[#593954]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-7 w-7 text-[#013440]" />
                    </div>
                    <CardTitle className="text-lg text-[#013440] font-bold mb-4">{case_.business}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-[#64748B] mb-1 uppercase tracking-wide">Desafio</p>
                      <p className="text-sm text-[#0A0E1A]">{case_.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#593954] mb-1 uppercase tracking-wide">Solução</p>
                      <p className="text-sm text-[#0A0E1A]">{case_.solution}</p>
                    </div>
                    <div className="pt-2 border-t border-[#013440]/10">
                      <p className="text-sm font-bold text-[#013440]">{case_.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#013440] via-[#1E293B] to-[#593954] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Sobre a DataNerd</h2>
          <p className="text-2xl leading-relaxed mb-8 text-white/90">
            A DataNerd existe para deixar sua rotina mais leve.
          </p>
          <p className="text-xl leading-relaxed text-white/80">
            Inteligência simples, aplicada de verdade.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#013440]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#593954]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black text-[#013440] mb-8 tracking-tight leading-tight">
            Pronto para organizar<br />sua operação?
          </h2>
          <p className="text-xl text-[#64748B] mb-12 max-w-2xl mx-auto">
            Vamos conversar sobre como podemos transformar sua rotina
          </p>
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-[#013440] to-[#593954] hover:shadow-2xl hover:shadow-[#013440]/30 text-white text-xl px-14 py-8 rounded-2xl transition-all duration-500 hover:scale-105"
            asChild
          >
            <Link to="/contato">
              Falar com a gente
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;