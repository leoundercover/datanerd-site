# Site DataNerd - Documentação

## 🎯 Visão Geral

Site institucional Multi-Page Application (MPA) para a DataNerd, empresa de inteligência operacional para pequenos e médios negócios.

## 📋 Estrutura do Site

### Páginas Criadas:

1. **Home (`/`)** 
   - Hero com headline principal
   - Seção de Soluções (4 cards)
   - Seção "Como pensamos" (filosofia)
   - Exemplos da vida real (4 casos)
   - Seção "Sobre a DataNerd"
   - CTA final

2. **Soluções (`/solucoes`)**
   - Detalhamento de cada solução
   - Features específicas de cada serviço
   - CTA para contato

3. **Sobre (`/sobre`)**
   - Missão da empresa
   - Valores (3 pilares)
   - História da DataNerd
   - CTA para contato

4. **Contato (`/contato`)**
   - Cards com 3 métodos de contato (WhatsApp, Email, Telefone)
   - Formulário Tally integrado
   - Horário de atendimento

## 🎨 Design Implementado

### Paleta de Cores:
- **Principal:** #013440
- **Secundárias:** #026873, #038C8C, #038C7F
- **Acento:** #593954 (uso discreto)
- **Neutros:** #222222, #3F3F3F, #E5E5E5, #FAFAFA

### Tipografia:
- **Fonte:** Inter (Google Fonts)
- **Títulos:** Bold/Semibold
- **Corpo:** Regular/Medium

### Características de Design:
✅ Flat moderno (sem 3D ou efeitos futuristas)
✅ Visual limpo e espaçoso
✅ Cards minimalistas com ícones Lucide React
✅ Transições suaves (300ms)
✅ Hover states em elementos interativos
✅ Responsivo (Desktop, Tablet, Mobile)
✅ SEM imagens de pessoas ou ambientes
✅ SEM emojis (apenas ícones profissionais)

## 🔗 Integrações

### WhatsApp
- **Número:** +55 11 98179-3555
- **Função:** Links diretos para abrir conversa

### Email
- **Endereço:** nerd@datanerd.com.br
- **Função:** Links mailto

### Tally Forms
- **URL:** https://tally.so/r/mZpYR0
- **Função:** Formulário de contato embed

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop:** 1920px+ (navegação horizontal)
- **Tablet:** 768px-1919px (grid adaptativo)
- **Mobile:** 375px-767px (menu hambúrguer, layout vertical)

## 🗂 Arquitetura de Arquivos

```
/app/frontend/src/
├── pages/
│   ├── Home.js              # Página inicial
│   ├── Solucoes.js          # Página de soluções
│   ├── Sobre.js             # Página institucional
│   └── Contato.js           # Página de contato
├── components/
│   ├── Header.js            # Cabeçalho com navegação
│   ├── Footer.js            # Rodapé com links e contatos
│   └── ui/                  # Componentes Shadcn UI
├── App.js                   # Configuração de rotas
├── App.css                  # Estilos globais
└── index.css                # Estilos base + Tailwind
```

## 🚀 Como Usar

### Acessar o Site:
O site está rodando em: `http://localhost:3000`

### Navegação:
- Header fixo no topo com links para todas as páginas
- Menu responsivo em mobile (ícone hambúrguer)
- Footer com links rápidos e informações de contato

### CTAs Funcionais:
1. **"Falar com a DataNerd"** → Abre WhatsApp
2. **"Ver soluções"** → Navega para /solucoes
3. **"Enviar mensagem"** → Navega para /contato
4. **Links de email** → Abre cliente de email
5. **Formulário Tally** → Envio direto pelo Tally

## ✨ Componentes Shadcn UI Utilizados

- `Button` - Botões com variantes
- `Card` - Cards para soluções, valores e casos
- Todos com estilo personalizado para a marca DataNerd

## 🎯 Filosofia de Design Seguida

✅ Simplicidade funcional (não minimalismo extremo)
✅ Clareza na comunicação
✅ Profissionalismo maduro (não corporativo frio)
✅ Espaçamento generoso
✅ Hierarquia visual clara
✅ Elementos flat modernos
✅ Micro-interações sutis

## 📝 Notas Importantes

- **SEM backend**: Site estático, todas as interações externas (WhatsApp, Email, Tally)
- **MPA (Multi-Page Application)**: React Router para navegação entre páginas
- **Formulário Tally**: Conteúdo do formulário é gerenciado no Tally, não no código
- **Performance**: Otimizado com transições suaves e carregamento rápido

## 🔄 Próximos Passos Sugeridos (Opcional)

1. Adicionar Google Analytics
2. Implementar SEO metadata por página
3. Adicionar animações de entrada (scroll animations)
4. Criar página de Blog/Casos de Sucesso
5. Adicionar chat ao vivo

---

**Desenvolvido com Emergent AI**
**Stack:** React + React Router + Tailwind CSS + Shadcn UI
