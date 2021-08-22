// dom components
const headerMenu = document.querySelector('.header-menu');
const mobileMenuTrigger = document
	.querySelector('.mobile-menu-icon')
	.querySelector('i');
const menu = document.querySelector('.navigation');
const mobileSearchTrigger = document.querySelector('.search-button-mobile');
const mobileSearchInput = document.querySelector('.search-bar-mobile');

const inputHeight = mobileSearchInput.offsetHeight + 'px';

function alterMenuStyle() {
	if (menu.style.opacity != '0') {
		menu.style.height = 0;
		menu.style.opacity = 0;
		menu.querySelector('nav').style.display = 'none';
	} else {
		menu.style.opacity = 1;
		menu.style.transition = 'all 0.2s';
		menu.querySelector('nav').style.display = 'inherit';
		menu.style.height = menu.querySelector('nav').offsetHeight + 'px';
	}
}

function alterSearchStyle() {
	if (mobileSearchInput.style.opacity != '0') {
		mobileSearchInput.style.height = 0;
		mobileSearchInput.style.opacity = 0;
		mobileSearchInput.querySelector('input').style.display = 'none';
	} else {
		mobileSearchInput.style.height = inputHeight;
		mobileSearchInput.style.opacity = 1;
		mobileSearchInput.style.transition = '	all 0.3s';
		mobileSearchInput.querySelector('input').style.display = 'inherit';
	}
}

function start() {
	alterMenuStyle();
	alterSearchStyle();
}

mobileMenuTrigger.addEventListener('click', (e) => {
	alterMenuStyle();
});

mobileSearchTrigger.addEventListener('click', (e) => {
	alterSearchStyle();
});

start();
