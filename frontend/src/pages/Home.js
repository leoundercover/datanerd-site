import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Calendar, Users, Lightbulb, Building2, Dumbbell, Scale, Store } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: 'Atendimento Inteligente',
      description: 'Organize conversas, automatize respostas e mantenha o controle da sua comunicação.'
    },
    {
      icon: Calendar,
      title: 'Agendamentos Inteligentes',
      description: 'Gestão completa de horários, lembretes automáticos e controle de agenda.'
    },
    {
      icon: Users,
      title: 'NerdHire',
      description: 'Processos seletivos organizados, do anúncio à contratação.'
    },
    {
      icon: Lightbulb,
      title: 'Projetos sob medida',
      description: 'Soluções personalizadas para necessidades específicas do seu negócio.'
    }
  ];

  const philosophy = [
    'Simplicidade que funciona',
    'Clareza em cada decisão',
    'Operação real, não teoria',
    'Inteligência útil, não complexidade'
  ];

  const realCases = [
    {
      icon: Building2,
      business: 'Clínica',
      challenge: 'Agendamentos desorganizados',
      solution: 'Sistema de agenda integrado com lembretes automáticos'
    },
    {
      icon: Dumbbell,
      business: 'Personal Trainer',
      challenge: 'Perda de tempo com confirmações',
      solution: 'Automação de agendamentos e check-ins'
    },
    {
      icon: Scale,
      business: 'Escritório Jurídico',
      challenge: 'Atendimento inicial demorado',
      solution: 'Triagem inteligente e organização de processos'
    },
    {
      icon: Store,
      business: 'Pequeno Negócio',
      challenge: 'Gestão manual do dia a dia',
      solution: 'Centralização operacional simples'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#013440] mb-6 leading-tight">
            Inteligência operacional para quem vive da própria rotina
          </h1>
          <p className="text-xl md:text-2xl text-[#3F3F3F] mb-10 max-w-3xl mx-auto">
            Simplicidade com inteligência, feita para a vida real do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#013440] hover:bg-[#026873] text-white text-lg px-8 py-6 transition-colors duration-300"
              onClick={() => window.open('https://wa.me/5511981793555', '_blank')}
            >
              Falar com a DataNerd
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[#013440] text-[#013440] hover:bg-[#013440] hover:text-white text-lg px-8 py-6 transition-all duration-300"
              asChild
            >
              <Link to="/solucoes">Ver soluções</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#013440] mb-12 text-center">Soluções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={index} className="border border-[#E5E5E5] hover:border-[#038C8C] hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#038C8C] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#038C8C]" />
                    </div>
                    <CardTitle className="text-xl text-[#013440]">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-[#3F3F3F]">{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#013440] mb-12 text-center">Como pensamos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {philosophy.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border-l-4 border-[#038C8C] hover:shadow-md transition-shadow duration-300">
                <p className="text-xl text-[#222222] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Cases Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#013440] mb-12 text-center">Exemplos da vida real</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {realCases.map((case_, index) => {
              const Icon = case_.icon;
              return (
                <Card key={index} className="border border-[#E5E5E5] hover:border-[#026873] transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-[#026873] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#026873]" />
                    </div>
                    <CardTitle className="text-lg text-[#013440]">{case_.business}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-[#3F3F3F] mb-1">Desafio:</p>
                      <p className="text-sm text-[#3F3F3F]">{case_.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#038C8C] mb-1">Solução:</p>
                      <p className="text-sm text-[#3F3F3F]">{case_.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-[#013440] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre a DataNerd</h2>
          <p className="text-xl leading-relaxed">
            A DataNerd existe para deixar sua rotina mais leve. Inteligência simples, aplicada de verdade.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#013440] mb-8">Pronto para organizar sua operação?</h2>
          <Button 
            size="lg" 
            className="bg-[#038C8C] hover:bg-[#026873] text-white text-xl px-12 py-7 transition-colors duration-300"
            asChild
          >
            <Link to="/contato">
              Falar com a gente
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;