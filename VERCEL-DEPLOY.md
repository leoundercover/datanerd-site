# Guia de Deploy na Vercel - DataNerd

## 📋 Configurações Necessárias na Vercel

### 1. **Root Directory**
```
frontend
```
⚠️ **IMPORTANTE**: Defina o Root Directory como `frontend` nas configurações do projeto na Vercel.

### 2. **Framework Preset**
```
Other
```

### 3. **Build Command**
```bash
npm install --legacy-peer-deps && npm run build
```

### 4. **Output Directory**
```
build
```

### 5. **Install Command**
```bash
npm install --legacy-peer-deps
```

### 6. **Node.js Version**
```
18.x ou 20.x
```
(Recomendado: 20.x)

---

## 🔧 Variáveis de Ambiente

Adicione na Vercel Dashboard → Settings → Environment Variables:

| Nome | Valor | Ambiente |
|------|-------|----------|
| `REACT_APP_BACKEND_URL` | URL do seu backend | Production, Preview, Development |

**Exemplos de valores:**
- Desenvolvimento local: `http://localhost:8001`
- Backend na Railway: `https://seu-app.railway.app`
- Backend na Render: `https://seu-app.onrender.com`

---

## 🚀 Deploy via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Na raiz do projeto
cd /Users/ldape/opt/datanerd-site

# Deploy
vercel

# Quando perguntado:
# - Set up and deploy? Yes
# - Which scope? (escolha sua conta)
# - Link to existing project? No
# - Project name? datanerd-site
# - In which directory is your code located? frontend
# - Want to override settings? Yes
#   - Build Command? npm install --legacy-peer-deps && npm run build
#   - Output Directory? build
#   - Development Command? npm start

# Deploy para produção
vercel --prod
```

---

## 🌐 Deploy via Dashboard

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Add New Project"
3. Importe seu repositório Git
4. Configure conforme acima
5. Clique em "Deploy"

---

## ⚠️ Observações Importantes

### Backend Separado
A Vercel só hospeda o **frontend**. Você precisa hospedar o backend separadamente:

**Opções para o Backend:**
- [Railway](https://railway.app) - Recomendado
- [Render](https://render.com) - Gratuito
- [Fly.io](https://fly.io)
- VPS próprio

### MongoDB
Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (gratuito) para o banco de dados.

---

## 🔍 Troubleshooting

### Erro: "Build failed"
- Verifique se o Root Directory está definido como `frontend`
- Confirme que o Build Command inclui `--legacy-peer-deps`

### Erro: "Cannot find module"
- Limpe o cache da Vercel e faça redeploy
- Verifique se todas as dependências estão no `package.json`

### Frontend carrega mas não conecta ao backend
- Verifique a variável `REACT_APP_BACKEND_URL`
- Certifique-se que o backend está rodando e acessível
- Verifique CORS no backend (deve permitir o domínio da Vercel)

---

## ✅ Checklist Final

- [ ] Root Directory = `frontend`
- [ ] Build Command com `--legacy-peer-deps`
- [ ] Output Directory = `build`
- [ ] Node.js Version = 20.x
- [ ] Variável `REACT_APP_BACKEND_URL` configurada
- [ ] Backend deployado separadamente
- [ ] MongoDB Atlas configurado
- [ ] CORS configurado no backend para aceitar domínio Vercel
