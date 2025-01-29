document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('diagnosticForm');
    const checkboxes = document.querySelectorAll('input[name="challenges"]');
    const maxChecked = 3;

    // Limitar seleção de desafios para no máximo 3
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const checkedCount = document.querySelectorAll('input[name="challenges"]:checked').length;
            if (checkedCount > maxChecked) {
                checkbox.checked = false;
            }
        });
    });

    // Validação e envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Verificar se pelo menos um desafio foi selecionado
        const checkedChallenges = document.querySelectorAll('input[name="challenges"]:checked').length;
        if (checkedChallenges === 0) {
            alert('Por favor, selecione pelo menos um desafio.');
            return;
        }

        // Aqui você pode adicionar o código para enviar o formulário
        // Por exemplo, usando fetch para enviar para um backend
        
        // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
        alert('Obrigado! Entraremos em contato em breve com seu diagnóstico personalizado.');
        form.reset();
    });

    // Animação suave ao rolar para campos de erro
    const scrollToError = (element) => {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    };

    // Adicionar classe de foco aos campos quando selecionados
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.closest('.form-group').classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.closest('.form-group').classList.remove('focused');
        });
    });
});
