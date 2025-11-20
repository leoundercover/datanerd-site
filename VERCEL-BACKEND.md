# Deploy Backend na Vercel - DataNerd

## ✅ Sim, você pode fazer deploy do backend na Vercel!

A Vercel suporta Python/FastAPI através de **Serverless Functions**.

---

## 📋 Opções de Deploy

### **Opção 1: Projeto Separado (Recomendado)**

Crie **dois projetos** na Vercel:
1. `datanerd-frontend` (já configurado)
2. `datanerd-backend` (novo)

#### Passos:

**1. Criar novo projeto na Vercel para o backend:**
```bash
# Na raiz do projeto
vercel

# Quando perguntado:
# - Set up and deploy? Yes
# - Project name? datanerd-backend
# - In which directory is your code located? backend
```

**2. Configurar na Vercel Dashboard:**

**Root Directory:**
```
backend
```

**Build Settings:**
- Framework Preset: `Other`
- Build Command: (deixe vazio)
- Output Directory: (deixe vazio)
- Install Command: `pip install -r requirements.txt`

**3. Variáveis de Ambiente:**

Adicione em Settings → Environment Variables:

| Nome | Valor | Exemplo |
|------|-------|---------|
| `MONGO_URL` | Sua connection string do MongoDB Atlas | `mongodb+srv://user:pass@cluster.mongodb.net/datanerd` |
| `DB_NAME` | Nome do banco | `datanerd` |
| `CORS_ORIGINS` | Domínio do frontend | `https://datanerd-frontend.vercel.app` |

**4. Atualizar Frontend:**

No projeto do frontend, configure a variável:
```
REACT_APP_BACKEND_URL=https://datanerd-backend.vercel.app
```

---

### **Opção 2: Monorepo (Um Projeto Só)**

Use o arquivo `vercel-backend.json` que criei.

**Passos:**

1. Renomeie o arquivo:
```bash
mv vercel-backend.json vercel.json
```

2. Configure as variáveis de ambiente na Vercel

3. Deploy:
```bash
vercel --prod
```

**Desvantagens:**
- Mais complexo de configurar
- Frontend e backend no mesmo domínio

---

## 🗄️ MongoDB Atlas (Obrigatório)

A Vercel **não** suporta MongoDB local. Use MongoDB Atlas:

1. Acesse [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie conta gratuita (Free Tier)
3. Crie um cluster
4. Obtenha a connection string
5. Adicione na variável `MONGO_URL`

**Exemplo de connection string:**
```
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/datanerd?retryWrites=true&w=majority
```

---

## ⚠️ Limitações da Vercel para Backend

### Serverless Functions:
- ✅ Funciona para APIs REST
- ✅ Suporta FastAPI
- ⚠️ Timeout de 10 segundos (plano gratuito)
- ⚠️ Cold start (primeira requisição pode ser lenta)
- ❌ Não mantém conexões persistentes

### Alternativas se precisar de mais recursos:
- **Railway** - Melhor para backends (containers)
- **Render** - Plano gratuito com containers
- **Fly.io** - Boa performance global

---

## 🚀 Recomendação Final

**Para este projeto:**

### Configuração Ideal:
1. **Frontend** → Vercel (projeto `datanerd-frontend`)
2. **Backend** → Railway ou Render (melhor performance)
3. **Database** → MongoDB Atlas (gratuito)

### Se quiser tudo na Vercel:
1. **Frontend** → Vercel (projeto `datanerd-frontend`)
2. **Backend** → Vercel (projeto `datanerd-backend`)
3. **Database** → MongoDB Atlas (gratuito)

---

## 📝 Arquivos Criados

- ✅ `backend/server.py` - Atualizado com handler para Vercel
- ✅ `vercel-backend.json` - Configuração alternativa para monorepo

---

## 🔧 Próximos Passos

1. Decida: projetos separados ou monorepo?
2. Configure MongoDB Atlas
3. Deploy do backend
4. Atualize `REACT_APP_BACKEND_URL` no frontend
5. Teste a integração

**Qual opção você prefere? Posso te ajudar com qualquer uma!**
