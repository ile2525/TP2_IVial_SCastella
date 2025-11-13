import './style.css'

// Ajout des document.querySelector pour rendre le carrousel applicable plusieurs fois
document.querySelectorAll('.mySwiper').forEach((element) => {
	new Swiper (element, {
		slidesPerView: 3,
		spaceBetween: 50,
		navigation: {
			nextEl: element.querySelector('.swiper-button-next'),
			prevEl: element.querySelector('.swiper-button-prev'),
		},
	});
});


//----------affichage du menu burger--------------------------Sandra
const menuIcon = document.querySelector(".menu-burger");
const menuNavbar = document.querySelector(".navigation");

function ouvreFermeMenu (){
    menuNavbar.classList.toggle("ouverte");

}

menuIcon.addEventListener("click", ouvreFermeMenu);






