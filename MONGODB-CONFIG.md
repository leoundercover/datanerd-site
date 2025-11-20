# Configuração do MongoDB Atlas - DataNerd

## ✅ Connection String Configurada

Sua connection string do MongoDB Atlas está pronta para uso:

```
mongodb+srv://<usuario>:<senha>@cluster0.xxxxx.mongodb.net/?appName=datanerd-site
```

---

## 🔧 Configuração para Deploy

### **1. Vercel - Variáveis de Ambiente**

Adicione estas variáveis no painel da Vercel (Settings → Environment Variables):

#### Para o Backend:
| Nome | Valor |
|------|-------|
| `MONGO_URL` | `mongodb+srv://<usuario>:<senha>@cluster0.xxxxx.mongodb.net/?appName=datanerd-site` |
| `DB_NAME` | `datanerd` |
| `CORS_ORIGINS` | `*` (ou seu domínio específico depois) |

#### Para o Frontend:
| Nome | Valor |
|------|-------|
| `REACT_APP_BACKEND_URL` | URL do seu backend (ex: `https://datanerd-backend.vercel.app`) |

---

### **2. Desenvolvimento Local**

Crie o arquivo `backend/.env` (não commitado no git):

```bash
MONGO_URL=mongodb+srv://<usuario>:<senha>@cluster0.xxxxx.mongodb.net/?appName=datanerd-site
DB_NAME=datanerd
CORS_ORIGINS=*
```

Crie o arquivo `frontend/.env`:

```bash
REACT_APP_BACKEND_URL=http://localhost:8001
```

---

## 📊 Estrutura do Banco de Dados

### **Não precisa criar nada manualmente!**

O MongoDB criará automaticamente:
- **Database**: `datanerd`
- **Collection**: `status_checks`

### **Schema da Coleção `status_checks`:**

```json
{
  "id": "uuid-v4",
  "client_name": "string",
  "timestamp": "ISO 8601 datetime"
}
```

**Exemplo de documento:**
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "client_name": "Cliente Teste",
  "timestamp": "2025-11-20T13:50:24.000Z"
}
```

---

## 🧪 Testar Conexão Localmente

### **1. Instalar dependências:**
```bash
cd backend
pip install -r requirements.txt
```

### **2. Criar arquivo .env:**
```bash
cat > .env << 'EOF'
MONGO_URL=mongodb+srv://<usuario>:<senha>@cluster0.xxxxx.mongodb.net/?appName=datanerd-site
DB_NAME=datanerd
CORS_ORIGINS=*
EOF
```

### **3. Rodar o servidor:**
```bash
uvicorn server:app --reload
```

### **4. Testar API:**

**Health check:**
```bash
curl http://localhost:8001/api/
```

**Criar status check:**
```bash
curl -X POST http://localhost:8001/api/status \
  -H "Content-Type: application/json" \
  -d '{"client_name": "Teste Local"}'
```

**Listar status checks:**
```bash
curl http://localhost:8001/api/status
```

---

## 🔐 Segurança - MongoDB Atlas

### **Verificar configurações:**

1. **Network Access** (importante para Vercel):
   - Vá em: Network Access → IP Access List
   - Adicione: `0.0.0.0/0` (permitir de qualquer lugar)
   - Isso é necessário porque a Vercel usa IPs dinâmicos

2. **Database Access**:
   - Usuário: `nerdsite` ✅
   - Senha: `<sua_senha>` ✅
   - Permissões: Read and write to any database ✅

---

## 📝 Endpoints da API

### **Base URL (local):** `http://localhost:8001`
### **Base URL (produção):** `https://seu-dominio.vercel.app`

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/` | Health check |
| POST | `/api/status` | Criar novo status check |
| GET | `/api/status` | Listar todos os status checks |

---

## ✅ Próximos Passos

1. ✅ Connection string configurada
2. ⏳ Criar arquivo `.env` local (comando acima)
3. ⏳ Testar conexão localmente
4. ⏳ Configurar variáveis na Vercel
5. ⏳ Deploy do backend
6. ⏳ Deploy do frontend
7. ⏳ Testar integração completa

---

**Tudo pronto! Quer que eu te ajude a testar a conexão agora?**
