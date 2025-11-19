import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Sobre = () => {
  const values = [
    {
      icon: Target,
      title: 'Foco no essencial',
      description: 'Não fazemos nada desnecessário. Cada solução é pensada para resolver problemas reais, sem complicação.',
      color: 'from-[#013440] to-[#1E293B]'
    },
    {
      icon: Zap,
      title: 'Simplicidade eficiente',
      description: 'Inteligência não precisa ser complexa. Criamos ferramentas que funcionam naturalmente no dia a dia.',
      color: 'from-[#593954] to-[#013440]'
    },
    {
      icon: Heart,
      title: 'Entendemos sua rotina',
      description: 'Somos formados por pessoas que já viveram a correria de pequenos e médios negócios.',
      color: 'from-[#013440] to-[#593954]'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-white via-[#F8F9FA] to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#013440]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#593954]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-black text-[#013440] mb-6 tracking-tight">Sobre a DataNerd</h1>
          <p className="text-xl md:text-2xl text-[#64748B] max-w-3xl mx-auto">
            Inteligência operacional feita por quem entende de rotina
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-[#013440] via-[#026873] to-[#593954] text-white shadow-2xl rounded-[3rem] overflow-hidden modern-card">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            <CardContent className="relative p-16">
              <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Nossa missão</h2>
              <p className="text-2xl leading-relaxed mb-6 text-white/90">
                A DataNerd existe para deixar sua rotina mais leve. Inteligência simples, aplicada de verdade.
              </p>
              <p className="text-lg leading-relaxed text-white/80">
                Sabemos que pequenos e médios negócios não têm tempo para tecnologias complicadas. 
                Por isso, criamos soluções que se integram naturalmente no seu dia a dia, 
                sem exigir cursos, manuais ou adaptações forçadas.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-[#013440] mb-6 tracking-tight">Nossos valores</h2>
            <p className="text-xl text-[#64748B]">O que nos move todos os dias</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="modern-card group border-0 bg-white shadow-xl hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500"
                >
                  <CardHeader className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-[#013440] font-bold mb-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="text-[#64748B] text-base leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black text-[#013440] mb-12 text-center tracking-tight">Como começamos</h2>
          <div className="space-y-8 text-lg text-[#64748B] leading-relaxed">
            <p className="text-xl">
              A DataNerd nasceu da experiência de quem viveu na pele os desafios de gerenciar operações 
              sem estrutura tecnológica adequada.
            </p>
            <p>
              Percebemos que a maioria das soluções disponíveis no mercado era ou muito complexa 
              (feita para grandes empresas) ou muito básica (planilhas e anotações manuais).
            </p>
            <p>
              Decidimos criar algo no meio do caminho: ferramentas inteligentes, mas simples. 
              Tecnologia que funciona sem precisar de especialista para operar.
            </p>
            <div className="bg-gradient-to-r from-[#013440]/5 to-[#593954]/5 p-8 rounded-3xl border-l-4 border-[#593954]">
              <p className="text-xl font-bold text-[#013440]">
                Hoje, ajudamos clínicas, escritórios, academias, profissionais autônomos e pequenos negócios 
                a terem mais controle, menos retrabalho e mais tempo para o que realmente importa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#013440] via-[#026873] to-[#593954] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">Vamos conversar?</h2>
          <p className="text-xl mb-12 text-white/90">
            Gostaria de entender melhor como podemos ajudar sua operação
          </p>
          <Button 
            size="lg" 
            className="group bg-white text-[#013440] hover:bg-white/90 hover:shadow-2xl text-lg px-10 py-7 rounded-2xl transition-all duration-500 hover:scale-105"
            asChild
          >
            <Link to="/contato">
              Entrar em contato
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sobre;