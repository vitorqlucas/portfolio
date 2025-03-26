// Menu responsivo para celular
const menu = document.querySelector('#menu');
const nav = document.querySelector('.links');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('active');
};

// Validação do formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o envio automático

  // Pega os valores dos campos
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Expressão regular simples para validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Verifica se o nome foi preenchido
  if (nome === '') {
    alert('Por favor, preencha o campo Nome.');
    return;
  }

  // Validação de e-mail
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  // Verifica se a mensagem foi preenchida
  if (mensagem === '') {
    alert('Por favor, escreva sua mensagem.');
    return;
  }

  // Se tudo estiver válido, mostra uma mensagem de sucesso
  alert(`Mensagem enviada com sucesso! Obrigado pelo contato, ${nome}.`);

  // Limpa o formulário
  document.getElementById('contactForm').reset();
});
