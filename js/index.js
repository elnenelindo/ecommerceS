




                          /* ACCESIBILIDAD */

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('toggle-dark-mode'); //establecer cambio
    const increaseFontSizeButton = document.getElementById('increase-font-size');
  
    darkModeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode'); // cambio a oscuro o a claro
    });
  
    increaseFontSizeButton.addEventListener('click', function() {
      document.body.classList.toggle('large-font'); // aumenta y disminute la letra
    });
  });
  
                           /* FIN ACCESIBILIDAD */

                        /* ACTIVAR OPCIONES DE PRODUCTO */

  document.addEventListener("DOMContentLoaded", function() {
    var card = document.querySelector('.container2 .card');
    
    card.addEventListener('click', function() {
      card.classList.toggle('active');
    });
  });
  

                /* FIN DE OPCIONES DE PRODUCTO */