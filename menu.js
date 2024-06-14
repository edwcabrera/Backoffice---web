document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function () {
      menu.classList.toggle('active'); // Alternar la clase 'active' en el menú
    });
  });
  