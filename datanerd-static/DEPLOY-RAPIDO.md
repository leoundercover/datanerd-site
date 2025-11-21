# 🚀 Deploy Rápido - DataNerd

## 🎯 3 Formas Mais Rápidas

### 1️⃣ Netlify Drop (30 segundos) ⭐ RECOMENDADO

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `datanerd-static` para o site
3. ✅ **PRONTO!** Site no ar!

**Resultado:** `seu-site-aleatorio.netlify.app`

**Personalizar domínio:**
- No dashboard Netlify → Site settings → Change site name
- Ou adicionar domínio próprio em: Domain settings

---

### 2️⃣ Vercel (1 minuto)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd datanerd-static
vercel --prod
```

**Resultado:** `datanerd.vercel.app`

---

### 3️⃣ GitHub Pages (2 minutos)

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Settings → Pages → Source: main branch
4. ✅ **PRONTO!**

**Resultado:** `usuario.github.io/datanerd`

---

## 💾 Hospedagem Tradicional

### cPanel / Hostinger / HostGator

1. **Login no cPanel**
2. **Gerenciador de Arquivos** → `public_html/`
3. **Upload** de todos os arquivos
4. **Descompactar** (se enviou .zip)
5. ✅ Acesse: `seu-dominio.com.br`

---

## 🖥️ Servidor Linux (VPS)

### Nginx

```bash
# 1. Instalar Nginx
sudo apt update && sudo apt install nginx -y

# 2. Copiar arquivos
sudo cp -r datanerd-static/* /var/www/html/

# 3. Testar
sudo nginx -t

# 4. Reiniciar
sudo systemctl restart nginx
```

✅ Acesse: `http://SEU_IP`

### Apache

```bash
# 1. Instalar Apache
sudo apt update && sudo apt install apache2 -y

# 2. Copiar arquivos
sudo cp -r datanerd-static/* /var/www/html/

# 3. Reiniciar
sudo systemctl restart apache2
```

✅ Acesse: `http://SEU_IP`

---

## 🌐 Configurar Domínio

### Netlify
1. Site settings → Domain management
2. Add custom domain → `seudominio.com.br`
3. Configurar DNS no registro.br:
   - A: `75.2.60.5`
   - CNAME www: `seu-site.netlify.app`

### Cloudflare (Recomendado)
1. Adicione site no Cloudflare
2. Aponte NS para Cloudflare
3. Adicione registro:
   - A: `SEU_IP_SERVIDOR`
   - Ative proxy (nuvem laranja)

---

## 🔒 SSL/HTTPS Grátis

### Netlify/Vercel
✅ **Automático!** SSL incluído

### Servidor Próprio (Certbot)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado
sudo certbot --nginx -d seudominio.com.br -d www.seudominio.com.br

# Renovação automática
sudo certbot renew --dry-run
```

---

## ✅ Checklist Pós-Deploy

- [ ] Site acessível (teste `https://seudominio.com.br`)
- [ ] Todas as 4 páginas funcionam
- [ ] Menu mobile abre e fecha
- [ ] Botões de WhatsApp funcionam
- [ ] Email funciona
- [ ] Formulário Tally carrega
- [ ] Responsivo no celular
- [ ] SSL/HTTPS ativo (cadeado verde)

---

## 🆘 Problemas?

### "404 Not Found"
- Verifique se `index.html` está na raiz
- Apache: `sudo a2enmod rewrite && sudo systemctl restart apache2`

### "Página não carrega"
- Verifique DNS: `nslookup seudominio.com.br`
- Aguarde propagação DNS (até 48h)

### "SSL não funciona"
- Netlify/Vercel: aguarde alguns minutos
- Servidor próprio: execute certbot novamente

---

## 📞 Precisa de Ajuda?

- **Email:** nerd@datanerd.com.br
- **WhatsApp:** (11) 98179-3555

---

**🎉 Seu site DataNerd está pronto para decolar!**
