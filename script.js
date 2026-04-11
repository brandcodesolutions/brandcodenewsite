// === VOLTAR AO TOPO SUAVE ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === ANIMAÇÃO DE ENTRADA (Scroll Reveal) ===
window.addEventListener('scroll', () => {
  document.querySelectorAll('section:not(.hero)').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

// Define o estilo inicial apenas das seções que não são o banner
document.querySelectorAll('section:not(.hero)').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 0.8s ease-out";
});