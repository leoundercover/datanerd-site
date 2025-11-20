#!/bin/bash

# Script de preparação para deploy do site DataNerd
# Remove referências ao ambiente de desenvolvimento e prepara pacote

set -e

echo "🚀 Preparando pacote para deploy..."

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Diretório de saída
OUTPUT_DIR="datanerd-deploy"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PACKAGE_NAME="datanerd-${TIMESTAMP}.tar.gz"

echo -e "${BLUE}📦 Criando diretório de output...${NC}"
rm -rf ${OUTPUT_DIR}
mkdir -p ${OUTPUT_DIR}

# Copiar frontend
echo -e "${BLUE}📂 Copiando Frontend...${NC}"
mkdir -p ${OUTPUT_DIR}/frontend
cp -r frontend/src ${OUTPUT_DIR}/frontend/
cp -r frontend/public ${OUTPUT_DIR}/frontend/
cp frontend/package.json ${OUTPUT_DIR}/frontend/
cp frontend/yarn.lock ${OUTPUT_DIR}/frontend/
cp frontend/craco.config.js ${OUTPUT_DIR}/frontend/
cp frontend/tailwind.config.js ${OUTPUT_DIR}/frontend/

# Criar .env.example para frontend
cat > ${OUTPUT_DIR}/frontend/.env.example << 'EOF'
# Backend URL (atualize com seu domínio)
REACT_APP_BACKEND_URL=http://localhost:8001
EOF

# Copiar backend
echo -e "${BLUE}📂 Copiando Backend...${NC}"
mkdir -p ${OUTPUT_DIR}/backend
cp backend/server.py ${OUTPUT_DIR}/backend/
cp backend/requirements.txt ${OUTPUT_DIR}/backend/

# Criar .env.example para backend
cat > ${OUTPUT_DIR}/backend/.env.example << 'EOF'
# MongoDB connection
MONGO_URL=mongodb://localhost:27017/datanerd
DB_NAME=datanerd
EOF

# Copiar arquivos de configuração
echo -e "${BLUE}📄 Copiando arquivos de configuração...${NC}"
cp Dockerfile.frontend ${OUTPUT_DIR}/
cp Dockerfile.backend ${OUTPUT_DIR}/
cp docker-compose.yml ${OUTPUT_DIR}/
cp nginx.conf ${OUTPUT_DIR}/
cp .dockerignore ${OUTPUT_DIR}/
cp README.md ${OUTPUT_DIR}/
cp DEPLOY.md ${OUTPUT_DIR}/

# Criar arquivo de versão
cat > ${OUTPUT_DIR}/VERSION << EOF
DataNerd Website
Version: 1.0.0
Build Date: $(date)
Build ID: ${TIMESTAMP}
EOF

# Criar script de deploy rápido
cat > ${OUTPUT_DIR}/quick-deploy.sh << 'EOF'
#!/bin/bash

echo "🚀 DataNerd - Deploy Rápido"
echo "============================"
echo ""

# Verificar se Docker está instalado
if ! command -v docker &> /dev/null; then
    echo "❌ Docker não está instalado!"
    echo "Instale o Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose não está instalado!"
    echo "Instale o Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

# Verificar se .env existe
if [ ! -f "frontend/.env" ]; then
    echo "⚠️  Arquivo frontend/.env não encontrado!"
    echo "Criando a partir do .env.example..."
    cp frontend/.env.example frontend/.env
    echo "✅ Criado! Por favor, edite frontend/.env com suas configurações."
fi

if [ ! -f "backend/.env" ]; then
    echo "⚠️  Arquivo backend/.env não encontrado!"
    echo "Criando a partir do .env.example..."
    cp backend/.env.example backend/.env
    echo "✅ Criado! Por favor, edite backend/.env com suas configurações."
fi

echo ""
echo "📦 Fazendo build das imagens Docker..."
docker-compose build

echo ""
echo "🚀 Iniciando containers..."
docker-compose up -d

echo ""
echo "✅ Deploy concluído!"
echo ""
echo "📊 Status dos containers:"
docker-compose ps

echo ""
echo "🌐 Acesse o site em:"
echo "   - Frontend: http://localhost"
echo "   - Backend API: http://localhost:8001/api/"
echo ""
echo "📝 Para ver os logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 Para parar:"
echo "   docker-compose down"
EOF

chmod +x ${OUTPUT_DIR}/quick-deploy.sh

# Limpar node_modules e __pycache__ se existirem
echo -e "${YELLOW}🧹 Limpando arquivos desnecessários...${NC}"
find ${OUTPUT_DIR} -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true
find ${OUTPUT_DIR} -name "__pycache__" -type d -exec rm -rf {} + 2>/dev/null || true
find ${OUTPUT_DIR} -name "*.pyc" -delete 2>/dev/null || true

# Criar arquivo compactado
echo -e "${BLUE}📦 Compactando pacote...${NC}"
tar -czf ${PACKAGE_NAME} ${OUTPUT_DIR}

# Tamanho do arquivo
SIZE=$(du -h ${PACKAGE_NAME} | cut -f1)

echo ""
echo -e "${GREEN}✅ Pacote criado com sucesso!${NC}"
echo ""
echo "📦 Arquivo: ${PACKAGE_NAME}"
echo "💾 Tamanho: ${SIZE}"
echo ""
echo "📋 Próximos passos:"
echo "   1. Envie o arquivo para seu servidor:"
echo "      scp ${PACKAGE_NAME} usuario@servidor:/caminho/destino/"
echo ""
echo "   2. No servidor, extraia o pacote:"
echo "      tar -xzf ${PACKAGE_NAME}"
echo "      cd ${OUTPUT_DIR}"
echo ""
echo "   3. Configure os arquivos .env:"
echo "      cp frontend/.env.example frontend/.env"
echo "      cp backend/.env.example backend/.env"
echo "      # Edite os arquivos com suas configurações"
echo ""
echo "   4. Execute o deploy:"
echo "      ./quick-deploy.sh"
echo ""
echo -e "${BLUE}📖 Para instruções detalhadas, veja: DEPLOY.md${NC}"
