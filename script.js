// Typing effect + form
document.addEventListener('DOMContentLoaded', () => {
  // Formulario
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Mensaje enviado correctamente. ¡Walter Samuel se pondrá en contacto pronto!');
    form.reset();
  });

  // Scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});