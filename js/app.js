/*

addEventListener('load', function(){
    new Glider(document.querySelector('.galeria-port'), {
      slidesToShow: 1,
      slidesToScroll: 1 ,
        draggable: true,
        dots: '.indicadores',
        arrows: {
        prev: '.anterior',
        next: '.siguiente'
        },
        responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 400,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 800,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2.5,

      }
    }
  ]
    });
  });*/

// selector
let menu = document.querySelector('.hamburger');
//let option1 = document.querySelector("#option1");




// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);
//option1.addEventListener('click', toggleMenu, false);


