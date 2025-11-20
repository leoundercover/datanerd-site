# ✅ Checklist de Deploy - DataNerd

## 📋 Antes do Deploy

### Preparação do Código
- [x] Todas as referências ao Emergent foram removidas
- [x] Footer atualizado sem menções externas
- [x] README.md criado com instruções completas
- [x] Paleta de cores configurada (#035AA6, #457ABF, #ACCAF2, #8593A6, #1D4B73)
- [x] Site totalmente responsivo (Desktop, Tablet, Mobile)
- [x] Menu mobile com contraste adequado

### Arquivos de Configuração
- [x] Dockerfile.frontend criado
- [x] Dockerfile.backend criado
- [x] docker-compose.yml configurado
- [x] nginx.conf configurado
- [x] .dockerignore criado
- [x] DEPLOY.md com instruções detalhadas
- [x] Script prepare-deploy.sh criado

### Integrações Configuradas
- [x] WhatsApp: +55 11 98179-3555
- [x] Email: nerd@datanerd.com.br
- [x] Formulário Tally: https://tally.so/r/mZpYR0

## 🚀 Deploy

### Escolha uma opção:

#### ☐ Opção 1: Docker (Recomendado)
- [ ] Servidor com Docker instalado
- [ ] Docker Compose instalado
- [ ] Pacote transferido para servidor
- [ ] Arquivos .env configurados
- [ ] `docker-compose up -d` executado
- [ ] Containers rodando: `docker-compose ps`

#### ☐ Opção 2: VPS Manual
- [ ] Node.js 16+ instalado
- [ ] Python 3.8+ instalado
- [ ] MongoDB instalado e rodando
- [ ] Nginx instalado
- [ ] PM2 instalado
- [ ] Frontend build executado
- [ ] Backend rodando com PM2
- [ ] Nginx configurado

#### ☐ Opção 3: Cloud (Vercel + Railway)
- [ ] Frontend deployado no Vercel
- [ ] Backend deployado no Railway/Render
- [ ] MongoDB Atlas configurado
- [ ] Variáveis de ambiente configuradas

## 🔧 Pós-Deploy

### Configuração de Domínio
- [ ] DNS apontado para servidor
- [ ] Nginx configurado para domínio
- [ ] SSL/HTTPS configurado (Certbot)
- [ ] Redirecionamento HTTP → HTTPS ativo

### Testes Funcionais
- [ ] Homepage carrega: `http://seu-dominio.com`
- [ ] Página de Soluções funciona: `/solucoes`
- [ ] Página Sobre funciona: `/sobre`
- [ ] Página de Contato funciona: `/contato`
- [ ] Formulário Tally carrega corretamente
- [ ] Links de WhatsApp funcionam
- [ ] Links de Email funcionam
- [ ] Menu mobile abre e funciona
- [ ] Navegação entre páginas funciona

### Testes de API
- [ ] Backend responde: `http://seu-dominio.com/api/`
- [ ] Retorna: `{"message":"Hello World"}`
- [ ] MongoDB conectado (verificar logs)

### Testes de Responsividade
- [ ] Desktop (1920px) - Layout correto
- [ ] Tablet (768px) - Cards adaptados
- [ ] Mobile (375px) - Menu hambúrguer funcional

### Performance
- [ ] Tempo de carregamento < 3s
- [ ] Imagens otimizadas
- [ ] Gzip ativado
- [ ] Cache configurado

### SEO (Opcional)
- [ ] Meta tags configuradas
- [ ] Open Graph tags
- [ ] Sitemap.xml
- [ ] robots.txt

## 🔐 Segurança

- [ ] CORS configurado corretamente no backend
- [ ] Headers de segurança no Nginx
- [ ] SSL/TLS ativo
- [ ] Credenciais sensíveis em .env (não no código)
- [ ] MongoDB protegido (auth, firewall)

## 📊 Monitoramento

- [ ] Logs acessíveis
- [ ] Backup configurado (MongoDB)
- [ ] Alertas de downtime (opcional)
- [ ] Analytics instalado (opcional)

## 🆘 Troubleshooting

### Frontend não carrega
```bash
# Docker
docker-compose logs frontend

# Manual
sudo tail -f /var/log/nginx/error.log
```

### Backend não responde
```bash
# Docker
docker-compose logs backend

# Manual
pm2 logs datanerd-api
```

### MongoDB não conecta
```bash
# Docker
docker-compose logs mongo

# Manual
sudo systemctl status mongod
mongo --eval "db.adminCommand('ping')"
```

## 📝 Informações do Deploy

### Servidor
- **IP**: ___________________
- **Domínio**: ___________________
- **SO**: ___________________
- **Método Deploy**: ☐ Docker  ☐ VPS Manual  ☐ Cloud

### Acessos
- **SSH**: ___________________
- **MongoDB**: ___________________
- **Painel Cloud**: ___________________

### Datas
- **Deploy Inicial**: ___________________
- **Última Atualização**: ___________________

## 🎉 Deploy Completo!

Após verificar todos os itens:

1. ✅ Site acessível publicamente
2. ✅ Todas as páginas funcionando
3. ✅ Formulário de contato operacional
4. ✅ Links de WhatsApp e Email funcionais
5. ✅ SSL/HTTPS ativo
6. ✅ Responsividade testada
7. ✅ Performance aceitável

**🚀 Site DataNerd está no ar!**

---

**Contato para Suporte:**
- Email: nerd@datanerd.com.br
- WhatsApp: (11) 98179-3555
