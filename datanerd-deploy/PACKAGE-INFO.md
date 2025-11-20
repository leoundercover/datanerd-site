# 📦 Pacote de Deploy - Site DataNerd

## 📄 Conteúdo do Pacote

Você recebeu o arquivo: **datanerd-YYYYMMDD_HHMMSS.tar.gz**

### Estrutura do Pacote

```
datanerd-deploy/
├── 📁 frontend/                    # Aplicação React
│   ├── src/                        # Código fonte
│   │   ├── pages/                  # Páginas (Home, Soluções, Sobre, Contato)
│   │   ├── components/             # Componentes (Header, Footer, UI)
│   │   ├── App.js                  # Aplicação principal
│   │   └── index.css               # Estilos globais
│   ├── public/                     # Arquivos públicos
│   ├── package.json                # Dependências Node.js
│   ├── yarn.lock                   # Lock de versões
│   └── .env.example                # Exemplo de configuração
│
├── 📁 backend/                     # API FastAPI + Python
│   ├── server.py                   # Servidor principal
│   ├── requirements.txt            # Dependências Python
│   └── .env.example                # Exemplo de configuração
│
├── 🐳 Dockerfile.frontend          # Build do Frontend
├── 🐳 Dockerfile.backend           # Build do Backend
├── 🐳 docker-compose.yml           # Orquestração Docker
├── ⚙️  nginx.conf                   # Configuração Nginx
├── 📋 .dockerignore                # Arquivos ignorados no build
│
├── 📖 README.md                    # Documentação principal
├── 🚀 DEPLOY.md                    # Guia completo de deploy
├── ✅ CHECKLIST.md                 # Checklist de verificação
├── 📝 VERSION                      # Informações da versão
└── 🎯 quick-deploy.sh              # Script de deploy rápido
```

## 🚀 Como Usar Este Pacote

### Passo 1: Extrair o Pacote

No seu servidor ou computador local:

```bash
# Extrair o arquivo
tar -xzf datanerd-YYYYMMDD_HHMMSS.tar.gz

# Entrar no diretório
cd datanerd-deploy
```

### Passo 2: Configurar Variáveis de Ambiente

```bash
# Frontend
cp frontend/.env.example frontend/.env
nano frontend/.env  # ou seu editor preferido
```

Edite `frontend/.env`:
```bash
REACT_APP_BACKEND_URL=https://api.seu-dominio.com
# Ou para desenvolvimento local:
# REACT_APP_BACKEND_URL=http://localhost:8001
```

```bash
# Backend
cp backend/.env.example backend/.env
nano backend/.env
```

Edite `backend/.env`:
```bash
MONGO_URL=mongodb://localhost:27017/datanerd
DB_NAME=datanerd
# Ou se usar MongoDB Atlas:
# MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/datanerd
```

### Passo 3: Escolher Método de Deploy

#### 🐳 Opção A: Deploy com Docker (RECOMENDADO)

**Requisitos:**
- Docker 20+
- Docker Compose 2+

**Comando:**
```bash
./quick-deploy.sh
```

Ou manualmente:
```bash
docker-compose build
docker-compose up -d
```

**Verificar:**
```bash
docker-compose ps
docker-compose logs -f
```

**Acessar:**
- Frontend: http://localhost
- Backend: http://localhost:8001/api/

---

#### 💻 Opção B: Deploy Manual em VPS

Veja instruções completas em **DEPLOY.md**, seção "Opção 2: Deploy Manual (VPS)"

**Resumo:**
1. Instalar Node.js, Python, MongoDB, Nginx
2. Build do frontend: `cd frontend && yarn install && yarn build`
3. Instalar backend: `cd backend && pip3 install -r requirements.txt`
4. Iniciar com PM2: `pm2 start "uvicorn server:app --port 8001"`
5. Configurar Nginx
6. Configurar SSL com Certbot

---

#### ☁️ Opção C: Deploy em Cloud

Veja instruções completas em **DEPLOY.md**, seção "Opção 3: Plataformas Cloud"

**Resumo:**
- **Frontend**: Vercel, Netlify, ou Cloudflare Pages
- **Backend**: Railway, Render, ou Fly.io
- **Database**: MongoDB Atlas (gratuito)

## 📚 Documentação Incluída

### 1. README.md
Documentação principal com:
- Visão geral do projeto
- Design e paleta de cores
- Estrutura de páginas
- Instruções básicas de instalação

### 2. DEPLOY.md
Guia completo e detalhado com:
- 3 métodos de deploy (Docker, VPS, Cloud)
- Configuração passo a passo
- Exemplos de configuração de servidor
- Comandos úteis
- Troubleshooting

### 3. CHECKLIST.md
Lista de verificação com:
- Itens pré-deploy
- Configurações necessárias
- Testes funcionais
- Segurança
- Informações do deploy

## 🎨 Características do Site

### Design
- **Paleta de Cores Profissional:**
  - #035AA6 (Azul profundo)
  - #457ABF (Azul médio)
  - #ACCAF2 (Azul claro)
  - #8593A6 (Cinza azulado)
  - #1D4B73 (Azul escuro)

### Páginas
1. **Home** - Hero, Soluções, Filosofia, Casos, Sobre, CTA
2. **Soluções** - Detalhamento dos serviços
3. **Sobre** - História e valores da empresa
4. **Contato** - Formulário + contatos diretos

### Tecnologias
- **Frontend**: React 19 + Tailwind CSS + Shadcn UI
- **Backend**: FastAPI (Python) + Motor (MongoDB async)
- **Database**: MongoDB
- **Deployment**: Docker + Nginx

### Integrações
- ✅ WhatsApp: (11) 98179-3555
- ✅ Email: nerd@datanerd.com.br
- ✅ Formulário Tally embed

## ⚡ Deploy Rápido (5 minutos)

Para deploy imediato com Docker:

```bash
# 1. Extrair
tar -xzf datanerd-*.tar.gz && cd datanerd-deploy

# 2. Configurar (opcional para teste local)
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env

# 3. Deploy
./quick-deploy.sh

# 4. Acessar
# Frontend: http://localhost
# Backend: http://localhost:8001/api/
```

## 🆘 Problemas Comuns

### "Docker não encontrado"
```bash
# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

### "Porta 80 já está em uso"
```bash
# Verificar o que está usando a porta
sudo lsof -i :80
# Parar o serviço (exemplo: nginx)
sudo systemctl stop nginx
```

### "Frontend carrega mas backend não responde"
```bash
# Verificar se backend está rodando
docker-compose ps
# Ver logs do backend
docker-compose logs backend
# Verificar conexão do MongoDB
docker-compose logs mongo
```

### "Erro de CORS"
Verifique se `REACT_APP_BACKEND_URL` no `frontend/.env` está correto.

## 📞 Suporte

Em caso de dúvidas:

**DataNerd:**
- 📧 Email: nerd@datanerd.com.br
- 📱 WhatsApp: (11) 98179-3555

**Documentação:**
- Leia `DEPLOY.md` para instruções detalhadas
- Use `CHECKLIST.md` para verificar o que falta
- Consulte `README.md` para informações do projeto

## ✅ Próximos Passos

1. ✅ Extrair o pacote
2. ✅ Configurar `.env` files
3. ✅ Executar deploy (Docker recomendado)
4. ✅ Verificar funcionamento
5. ✅ Configurar domínio (se necessário)
6. ✅ Configurar SSL/HTTPS
7. ✅ Completar checklist em `CHECKLIST.md`

---

**🎉 Boa sorte com o deploy!**

Qualquer dúvida, consulte a documentação incluída ou entre em contato.
