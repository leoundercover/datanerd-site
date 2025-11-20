# DataNerd - Site Institucional

Site institucional Multi-Page Application (MPA) para a DataNerd, empresa de inteligência operacional para pequenos e médios negócios.

## 🎨 Design

### Paleta de Cores
- **#035AA6** (Azul profundo) - Cor principal
- **#457ABF** (Azul médio) - Secundária
- **#ACCAF2** (Azul claro) - Acento
- **#8593A6** (Cinza azulado) - Neutro
- **#1D4B73** (Azul escuro) - Dark

### Características
- Design moderno com gradientes sutis
- Micro-animações e hover effects
- Totalmente responsivo (Desktop, Tablet, Mobile)
- Tipografia: Inter + Space Grotesk
- Componentes: Shadcn UI + Tailwind CSS

## 📋 Estrutura do Site

### Páginas
1. **Home (`/`)** - Hero, Soluções, Filosofia, Casos de uso, Sobre, CTA
2. **Soluções (`/solucoes`)** - Detalhamento dos serviços
3. **Sobre (`/sobre`)** - História, missão e valores
4. **Contato (`/contato`)** - Formulário Tally + contatos diretos

### Integrações
- **WhatsApp**: +55 11 98179-3555
- **Email**: nerd@datanerd.com.br
- **Formulário**: Tally Forms (https://tally.so/r/mZpYR0)

## 🚀 Deploy

### Pré-requisitos
- Node.js 16+ e Yarn
- Python 3.8+
- MongoDB (local ou cloud)

### Variáveis de Ambiente

**Frontend** (`/frontend/.env`):
```bash
REACT_APP_BACKEND_URL=http://seu-dominio.com
```

**Backend** (`/backend/.env`):
```bash
MONGO_URL=mongodb://localhost:27017/datanerd
DB_NAME=datanerd
```

### Instalação

1. **Clone o repositório**
```bash
git clone <seu-repo>
cd datanerd-site
```

2. **Instalar dependências do Frontend**
```bash
cd frontend
yarn install
```

3. **Instalar dependências do Backend**
```bash
cd ../backend
pip install -r requirements.txt
```

### Desenvolvimento Local

**Frontend** (porta 3000):
```bash
cd frontend
yarn start
```

**Backend** (porta 8001):
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Build para Produção

**Frontend**:
```bash
cd frontend
yarn build
# Arquivos otimizados em /frontend/build
```

**Backend**:
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001
# Ou usando gunicorn:
gunicorn -w 4 -k uvicorn.workers.UvicornWorker server:app --bind 0.0.0.0:8001
```

## 📦 Deploy em Servidor

### Opção 1: VPS (Ubuntu/Debian)

1. **Instalar dependências do sistema**
```bash
sudo apt update
sudo apt install -y nginx mongodb python3-pip nodejs npm
sudo npm install -g yarn pm2
```

2. **Configurar MongoDB**
```bash
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

3. **Build do Frontend**
```bash
cd frontend
yarn install
yarn build
```

4. **Configurar Nginx**
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    # Frontend (build estático)
    location / {
        root /caminho/para/frontend/build;
        try_files $uri /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

5. **Iniciar Backend com PM2**
```bash
cd backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name datanerd-api
pm2 save
pm2 startup
```

### Opção 2: Docker

**Criar `Dockerfile.frontend`**:
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY frontend/package*.json frontend/yarn.lock ./
RUN yarn install
COPY frontend/ .
RUN yarn build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
```

**Criar `Dockerfile.backend`**:
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY backend/ .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

**Docker Compose** (`docker-compose.yml`):
```yaml
version: '3.8'
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "8001:8001"
    environment:
      - MONGO_URL=mongodb://mongo:27017/datanerd
      - DB_NAME=datanerd
    depends_on:
      - mongo

  mongo:
    image: mongo:5
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

**Executar**:
```bash
docker-compose up -d
```

### Opção 3: Plataformas Cloud

**Vercel (Frontend)**:
```bash
cd frontend
vercel --prod
```

**Railway/Render (Backend)**:
- Conecte o repositório
- Configure variáveis de ambiente
- Deploy automático

**MongoDB Atlas (Database)**:
- Crie cluster gratuito
- Atualize MONGO_URL no backend

## 🔧 Configurações Importantes

### CORS (Backend)
O backend já está configurado com CORS aberto:
```python
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Para produção, restrinja `allow_origins`:
```python
allow_origins=["https://seu-dominio.com"]
```

### Roteamento de API
Todas as rotas de API devem ter prefixo `/api` para funcionar corretamente com o proxy.

## 📱 Responsividade

- **Desktop**: 1920px+ (navegação horizontal)
- **Tablet**: 768px-1919px (grid adaptativo)
- **Mobile**: 375px-767px (menu hambúrguer)

## 🎯 Suporte

Para dúvidas sobre o site:
- **Email**: nerd@datanerd.com.br
- **WhatsApp**: (11) 98179-3555

## 📄 Licença

© 2025 DataNerd. Todos os direitos reservados.
