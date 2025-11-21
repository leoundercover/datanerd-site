# 🌐 DataNerd - Site Estático (HTML/CSS/JS)

Site institucional completo em HTML, CSS e JavaScript puro. **Sem dependências, sem build, sem backend.**

## 📦 Conteúdo

```
datanerd-static/
├── index.html          # Página inicial
├── solucoes.html       # Página de soluções
├── sobre.html          # Página sobre a empresa
├── contato.html        # Página de contato
├── styles.css          # Estilos completos
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este arquivo
```

## 🎨 Características

- ✅ **100% Estático** - HTML, CSS e JavaScript puro
- ✅ **Zero Dependências** - Não precisa de Node.js, npm, build
- ✅ **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Moderno** - Design profissional com gradientes e animações
- ✅ **Rápido** - Carregamento instantâneo
- ✅ **Acessível** - Semântica HTML correta

### Design
- **Paleta:** #035AA6, #457ABF, #ACCAF2, #8593A6, #1D4B73
- **Fonte:** Inter (Google Fonts)
- **Animações:** Smooth scroll, hover effects, fade-in

### Integrações
- **WhatsApp:** +55 11 98179-3555
- **Email:** nerd@datanerd.com.br  
- **Formulário:** Tally Forms (https://tally.so/r/mZpYR0)

## 🚀 Como Usar

### Opção 1: Servidor Local Simples

**Com Python 3:**
```bash
cd datanerd-static
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

**Com PHP:**
```bash
cd datanerd-static
php -S localhost:8000
# Acesse: http://localhost:8000
```

**Com Node.js (http-server):**
```bash
npx http-server datanerd-static -p 8000
# Acesse: http://localhost:8000
```

### Opção 2: Deploy em Hospedagem Estática

#### Netlify (MAIS FÁCIL)

1. Arraste a pasta `datanerd-static` para [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto! Site no ar em segundos
3. URL: `seu-site.netlify.app`

#### Vercel

```bash
cd datanerd-static
npx vercel --prod
```

#### GitHub Pages

1. Crie repositório no GitHub
2. Faça upload dos arquivos
3. Vá em Settings → Pages
4. Ative GitHub Pages
5. Site disponível em: `usuario.github.io/repo`

#### Cloudflare Pages

1. Conecte repositório Git
2. Build: (deixe vazio)
3. Output: (deixe vazio - já está pronto)
4. Deploy automático

### Opção 3: Servidor Web Tradicional

#### Apache

1. Copie arquivos para `/var/www/html/`
```bash
sudo cp -r datanerd-static/* /var/www/html/
```

2. Configure virtual host (opcional)
```apache
<VirtualHost *:80>
    ServerName datanerd.com.br
    DocumentRoot /var/www/html/datanerd-static
    <Directory /var/www/html/datanerd-static>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

#### Nginx

1. Copie arquivos para `/usr/share/nginx/html/`
```bash
sudo cp -r datanerd-static/* /usr/share/nginx/html/
```

2. Configure (opcional)
```nginx
server {
    listen 80;
    server_name datanerd.com.br;
    root /usr/share/nginx/html/datanerd-static;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Opção 4: Hospedagens Compartilhadas

- **Hostinger, HostGator, etc:**
  1. Acesse cPanel
  2. Vá em "Gerenciador de Arquivos"
  3. Navegue até `public_html/`
  4. Faça upload de todos os arquivos
  5. Acesse seu domínio

## 📝 Personalizações

### Mudar Cores

Edite `styles.css`, linha 4-10:
```css
:root {
  --color-primary: #035AA6;     /* Azul principal */
  --color-secondary: #457ABF;   /* Azul secundário */
  --color-accent: #ACCAF2;      /* Azul claro */
  /* ... */
}
```

### Mudar Contatos

Edite `script.js`, linhas 71-77:
```javascript
function openWhatsApp() {
  window.open('https://wa.me/SEU_NUMERO', '_blank');
}

function openEmail() {
  window.location.href = 'mailto:SEU_EMAIL';
}
```

### Adicionar Página Nova

1. Copie `index.html` como base
2. Modifique o conteúdo
3. Atualize navegação em todas as páginas
4. Adicione link no footer

## 🔧 Otimizações (Opcional)

### Minificar Arquivos

```bash
# CSS
npx csso styles.css -o styles.min.css

# JS
npx terser script.js -o script.min.js

# HTML
npx html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

### Adicionar Analytics

Adicione antes de `</head>` em todas as páginas:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Adicionar SEO

Em cada página, adicione no `<head>`:
```html
<meta name="description" content="Descrição da página">
<meta name="keywords" content="datanerd, inteligência operacional">
<meta property="og:title" content="DataNerd">
<meta property="og:description" content="Inteligência operacional">
<meta property="og:image" content="https://seu-dominio.com/preview.jpg">
<meta property="og:url" content="https://seu-dominio.com">
<meta name="twitter:card" content="summary_large_image">
```

## 📱 Testado Em

- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & iOS)
- ✅ Samsung Internet
- ✅ Opera

## 💡 Vantagens desta Versão

1. **Sem build** - Edite e veja resultado imediatamente
2. **Sem servidor** - Hospede em qualquer lugar
3. **Performance** - Carregamento instantâneo
4. **Manutenção** - Fácil de editar e entender
5. **Custo zero** - Hospedagens gratuitas funcionam perfeitamente

## 🆘 Problemas Comuns

### Formulário Tally não carrega
- Verifique se tem conexão com internet
- Tally precisa de JavaScript habilitado

### Fontes não carregam
- Verifique conexão com internet
- Google Fonts precisa estar acessível

### Menu mobile não abre
- Verifique se `script.js` está sendo carregado
- Abra console do navegador (F12) para ver erros

## 📞 Suporte

Para dúvidas sobre o site:
- **Email:** nerd@datanerd.com.br
- **WhatsApp:** (11) 98179-3555

## 📄 Licença

© 2025 DataNerd. Todos os direitos reservados.
