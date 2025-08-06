// Função para rolagem suave ao clicar nos links do menu
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Envio de formulário com mensagem de confirmação
const form = document.getElementById('form-contato');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Aqui você pode integrar com um backend ou serviço como Formspree
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");

  // Limpa os campos do formulário
  form.reset();
});
