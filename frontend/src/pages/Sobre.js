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
      description: 'Não fazemos nada desnecessário. Cada solução é pensada para resolver problemas reais, sem complicação.'
    },
    {
      icon: Zap,
      title: 'Simplicidade eficiente',
      description: 'Inteligência não precisa ser complexa. Criamos ferramentas que funcionam naturalmente no dia a dia.'
    },
    {
      icon: Heart,
      title: 'Entendemos sua rotina',
      description: 'Somos formados por pessoas que já viveram a correria de pequenos e médios negócios.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#013440] mb-6">Sobre a DataNerd</h1>
          <p className="text-xl text-[#3F3F3F] max-w-3xl mx-auto">
            Inteligência operacional feita por quem entende de rotina
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#013440] text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">Nossa missão</h2>
            <p className="text-xl leading-relaxed mb-6">
              A DataNerd existe para deixar sua rotina mais leve. Inteligência simples, aplicada de verdade.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Sabemos que pequenos e médios negócios não têm tempo para tecnologias complicadas. 
              Por isso, criamos soluções que se integram naturalmente no seu dia a dia, 
              sem exigir cursos, manuais ou adaptações forçadas.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#013440] mb-12 text-center">Nossos valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-2 border-[#E5E5E5] hover:border-[#038C8C] hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-14 h-14 bg-[#038C8C] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-[#038C8C]" />
                    </div>
                    <CardTitle className="text-2xl text-[#013440]">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#3F3F3F] text-lg leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#013440] mb-8 text-center">Como começamos</h2>
          <div className="space-y-6 text-lg text-[#3F3F3F] leading-relaxed">
            <p>
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
            <p className="font-medium text-[#013440]">
              Hoje, ajudamos clínicas, escritórios, academias, profissionais autônomos e pequenos negócios 
              a terem mais controle, menos retrabalho e mais tempo para o que realmente importa.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#013440] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos conversar?</h2>
          <p className="text-xl mb-10 opacity-90">
            Gostaria de entender melhor como podemos ajudar sua operação
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#013440] hover:bg-[#E5E5E5] text-lg px-8 py-6 transition-colors duration-300"
            asChild
          >
            <Link to="/contato">
              Entrar em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Sobre;