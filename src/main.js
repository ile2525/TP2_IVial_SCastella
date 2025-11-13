import './style.css'

// Ajout des document.querySelector pour rendre le carrousel applicable plusieurs fois----------Iléona
document.querySelectorAll('.mySwiper').forEach((element) => {
  new Swiper(element, {
    slidesPerView: 3, 
    spaceBetween: 50,
    navigation: {
      nextEl: element.querySelector('.swiper-button-next'),
      prevEl: element.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
	  0: {          
        slidesPerView: 1,
        spaceBetween: 20,
      },
      610: {        
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {        
        slidesPerView: 3,
        spaceBetween: 40,
      }
    }
  });
});

//Sandra: comme on a pas vu le responsive pour les librairies, on a utilisé cette source et chatgpt m'a aidé à l'intégrer les breakpoints
//https://swiperjs.com/types/interfaces/types_swiper_options.SwiperOptions#breakpoints


//----------affichage du menu burger--------------------------Sandra
const menuIcon = document.querySelector(".menu-burger");
const menuNavbar = document.querySelector(".navigation");

function ouvreFermeMenu (){
    menuNavbar.classList.toggle("ouverte");

}

menuIcon.addEventListener("click", ouvreFermeMenu);






