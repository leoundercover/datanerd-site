// Script para funcionalidades básicas do site
document.addEventListener('DOMContentLoaded', () => {
    // Menu mobile toggle (preparação para futura implementação)
    console.log('Datanerd site carregado com sucesso.');

    // Adicionar classe active ao link do menu correspondente à página atual
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    initContactForm();
});

// Contact Form Handler
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };

        const whatsappMessage = `
*Nova mensagem do site DataNerd*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Empresa:* ${formData.company || 'Não informado'}
*Interesse:* ${getInterestLabel(formData.interest)}

*Mensagem:*
${formData.message}
        `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappNumber = '5511999999999';
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        showSuccessMessage();
        contactForm.reset();
    });

    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);

            if (value.length > 6) {
                value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
            } else if (value.length > 2) {
                value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
            } else if (value.length > 0) {
                value = value.replace(/^(\d*)/, '($1');
            }

            e.target.value = value;
        });
    }
}

function getInterestLabel(value) {
    const labels = {
        mentorads: 'MentorAds',
        'atendimento-ia': 'Atendimento Inteligente com IA',
        aptor: 'Aptor',
        leadsnerd: 'LeadsNerd',
        agendanerd: 'AgendaNerd',
        relatorios: 'Relatórios Automáticos',
        diagnostico: 'Diagnóstico Gratuito',
        outros: 'Outros'
    };
    return labels[value] || value;
}

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <span class="success-icon">✓</span>
            <h3>Mensagem preparada!</h3>
            <p>Vamos abrir o WhatsApp para continuar.</p>
        </div>
    `;

    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--bg-card, #0F172A);
            padding: 2rem;
            border-radius: 1rem;
            border: 1px solid var(--border, #1E293B);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
            z-index: 9999;
            animation: fadeIn 0.3s ease-out;
        }
        
        .success-content {
            text-align: center;
        }
        
        .success-icon {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%);
            color: white;
            border-radius: 50%;
            font-size: 2rem;
            line-height: 60px;
            margin-bottom: 1rem;
        }
        
        .success-content h3 {
            font-size: 1.4rem;
            color: var(--text-main, #FFFFFF);
            margin-bottom: 0.4rem;
        }
        
        .success-content p {
            color: var(--text-muted, #94A3B8);
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translate(-50%, -45%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 2000);
}
