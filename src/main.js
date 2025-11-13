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






