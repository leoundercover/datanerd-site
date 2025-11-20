# Guia Completo de Deploy - DataNerd

## 📦 Preparação do Pacote

### 1. Verificar arquivos essenciais
```bash
# Estrutura necessária:
/app
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── Dockerfile.frontend
├── Dockerfile.backend
├── docker-compose.yml
├── nginx.conf
└── README.md
```

### 2. Configurar variáveis de ambiente

**Frontend** (`frontend/.env`):
```bash
REACT_APP_BACKEND_URL=https://api.seu-dominio.com
```

**Backend** (`backend/.env`):
```bash
MONGO_URL=mongodb://localhost:27017/datanerd
DB_NAME=datanerd
```

## 🚀 Opções de Deploy

### Opção 1: Deploy com Docker (RECOMENDADO)

#### Requisitos
- Docker 20+
- Docker Compose 2+

#### Passos

1. **Enviar código para o servidor**
```bash
# No seu computador local
tar -czf datanerd.tar.gz app/
scp datanerd.tar.gz usuario@servidor:/home/usuario/

# No servidor
cd /home/usuario
tar -xzf datanerd.tar.gz
cd app
```

2. **Configurar variáveis de ambiente**
```bash
# Editar frontend/.env
nano frontend/.env
# Atualizar REACT_APP_BACKEND_URL com seu domínio

# Editar backend/.env
nano backend/.env
# Atualizar MONGO_URL se necessário
```

3. **Build e Deploy**
```bash
# Fazer build das imagens
docker-compose build

# Iniciar os containers
docker-compose up -d

# Verificar status
docker-compose ps

# Ver logs
docker-compose logs -f
```

4. **Configurar domínio (opcional)**
```bash
# Instalar Nginx no host (se ainda não tiver)
sudo apt install nginx

# Configurar proxy reverso
sudo nano /etc/nginx/sites-available/datanerd
```

Adicione:
```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

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

```bash
# Ativar configuração
sudo ln -s /etc/nginx/sites-available/datanerd /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

5. **Configurar SSL com Certbot**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

### Opção 2: Deploy Manual (VPS)

#### Requisitos
- Ubuntu 20.04+ ou Debian 11+
- Node.js 16+
- Python 3.8+
- MongoDB 5+
- Nginx

#### Passos

1. **Instalar dependências**
```bash
# Node.js e Yarn
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g yarn

# Python e pip
sudo apt install -y python3 python3-pip

# MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt update
sudo apt install -y mongodb-org

# Nginx
sudo apt install -y nginx

# PM2 (gerenciador de processos)
sudo npm install -g pm2
```

2. **Configurar MongoDB**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

3. **Enviar código**
```bash
# No servidor, criar diretório
mkdir -p /var/www/datanerd
cd /var/www/datanerd

# Transferir arquivos (do local)
scp -r app/* usuario@servidor:/var/www/datanerd/
```

4. **Build Frontend**
```bash
cd /var/www/datanerd/frontend
yarn install
yarn build
```

5. **Configurar Backend**
```bash
cd /var/www/datanerd/backend
pip3 install -r requirements.txt
```

6. **Iniciar Backend com PM2**
```bash
cd /var/www/datanerd/backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name datanerd-api
pm2 save
pm2 startup
```

7. **Configurar Nginx**
```bash
sudo nano /etc/nginx/sites-available/datanerd
```

Adicione:
```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    # Frontend
    location / {
        root /var/www/datanerd/frontend/build;
        try_files $uri $uri/ /index.html;
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

```bash
sudo ln -s /etc/nginx/sites-available/datanerd /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

8. **SSL com Certbot**
```bash
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

### Opção 3: Plataformas Cloud Gerenciadas

#### Frontend - Vercel

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
cd frontend
vercel --prod
```

3. **Configurar variável de ambiente**
No dashboard Vercel, adicione:
```
REACT_APP_BACKEND_URL=https://seu-backend-url.com
```

#### Backend - Railway / Render

1. **Criar conta em railway.app ou render.com**

2. **Conectar repositório Git**

3. **Configurar variáveis de ambiente**:
```
MONGO_URL=sua-mongodb-atlas-url
DB_NAME=datanerd
```

4. **Deploy automático**

#### Database - MongoDB Atlas

1. **Criar conta em mongodb.com/atlas**

2. **Criar cluster gratuito**

3. **Criar database user**

4. **Whitelist IP (0.0.0.0/0 para qualquer)**

5. **Copiar connection string**:
```
mongodb+srv://user:password@cluster.mongodb.net/datanerd
```

## 🔧 Comandos Úteis

### Docker
```bash
# Ver logs
docker-compose logs -f [service]

# Reiniciar serviço
docker-compose restart [service]

# Parar tudo
docker-compose down

# Parar e remover volumes
docker-compose down -v

# Rebuild
docker-compose up -d --build
```

### PM2
```bash
# Ver processos
pm2 list

# Ver logs
pm2 logs datanerd-api

# Reiniciar
pm2 restart datanerd-api

# Parar
pm2 stop datanerd-api

# Monitorar
pm2 monit
```

### Nginx
```bash
# Testar configuração
sudo nginx -t

# Reload
sudo systemctl reload nginx

# Ver logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

## ✅ Verificação Pós-Deploy

1. **Verificar Frontend**
```bash
curl -I http://seu-dominio.com
```

2. **Verificar Backend**
```bash
curl http://seu-dominio.com/api/
# Deve retornar: {"message":"Hello World"}
```

3. **Testar MongoDB**
```bash
# No servidor
mongo
> use datanerd
> db.status_checks.find()
```

4. **Verificar SSL**
```bash
openssl s_client -connect seu-dominio.com:443 -servername seu-dominio.com
```

## 🔄 Atualizações Futuras

### Com Docker
```bash
cd /path/to/app
git pull  # se estiver usando git
docker-compose down
docker-compose build
docker-compose up -d
```

### Manual
```bash
# Frontend
cd /var/www/datanerd/frontend
git pull
yarn install
yarn build

# Backend
cd /var/www/datanerd/backend
git pull
pip3 install -r requirements.txt
pm2 restart datanerd-api
```

## 🆘 Troubleshooting

### Frontend não carrega
- Verificar logs: `docker-compose logs frontend`
- Verificar nginx: `sudo nginx -t`
- Verificar build: `ls frontend/build/`

### Backend não responde
- Verificar logs: `docker-compose logs backend` ou `pm2 logs datanerd-api`
- Verificar porta: `netstat -tulpn | grep 8001`
- Verificar MongoDB: `docker-compose logs mongo`

### CORS errors
- Verificar REACT_APP_BACKEND_URL no frontend
- Verificar allow_origins no backend

## 📞 Suporte

Para dúvidas:
- Email: nerd@datanerd.com.br
- WhatsApp: (11) 98179-3555
