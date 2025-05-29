const buttons = document.querySelectorAll('.toggle-btn');
const sections = document.querySelectorAll('.menu-seccion');
const categoriasComida = document.getElementById('categorias-comida');
const categoriasBarra = document.getElementById('categorias-barra');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle botón activo
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Mostrar productos
    const target = btn.getAttribute('data-section');
    sections.forEach(sec => {
      sec.classList.toggle('hidden', sec.id !== target);
    });

    // Mostrar categorías correspondientes
    if (target === 'comida') {
      categoriasComida.classList.remove('hidden');
      categoriasBarra.classList.add('hidden');
    } else {
      categoriasBarra.classList.remove('hidden');
      categoriasComida.classList.add('hidden');
    }
  });
});
