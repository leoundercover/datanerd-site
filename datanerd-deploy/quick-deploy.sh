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
