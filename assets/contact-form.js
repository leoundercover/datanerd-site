// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            // Create WhatsApp message
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
            
            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp number (replace with actual number)
            const whatsappNumber = '5511999999999';
            
            // Open WhatsApp
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Phone mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
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
});

function getInterestLabel(value) {
    const labels = {
        'mentorads': 'MentorAds',
        'atendimento-ia': 'Atendimento Inteligente com IA',
        'aptor': 'Aptor',
        'leadsnerd': 'LeadsNerd',
        'agendanerd': 'AgendaNerd',
        'relatorios': 'Relatórios Automáticos',
        'diagnostico': 'Diagnóstico Gratuito',
        'outros': 'Outros'
    };
    return labels[value] || value;
}

function showSuccessMessage() {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <span class="success-icon">✓</span>
            <h3>Mensagem enviada!</h3>
            <p>Redirecionando para o WhatsApp...</p>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 2rem;
            border-radius: 1rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
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
            background: linear-gradient(135deg, #0378A6 0%, #04C4D9 100%);
            color: white;
            border-radius: 50%;
            font-size: 2rem;
            line-height: 60px;
            margin-bottom: 1rem;
        }
        
        .success-content h3 {
            font-size: 1.5rem;
            color: #0f172a;
            margin-bottom: 0.5rem;
        }
        
        .success-content p {
            color: #64748b;
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
    
    // Remove after 2 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 2000);
}
