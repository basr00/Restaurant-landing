const navBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
const allNavElements = document.querySelectorAll('.nav__element');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.nav__logo');

const showNavigation = () => {
	navList.classList.toggle('showNav');
	logo.classList.toggle('newColors');
};

const scrollNav = (e) => {
	if (window.scrollY > 75) {
		navigation.classList.add('navigationBackground');
	} else if (window.scrollY < 75) {
		navigation.classList.remove('navigationBackground');
	}
};

for (navElement of allNavElements) {
	navElement.addEventListener('click', () => {
		console.log(navElement);
		navList.classList.remove('showNav');
		logo.classList.remove('newColors');
	});
}

window.addEventListener('scroll', scrollNav);
navBtn.addEventListener('click', showNavigation);

console.log('JS loaded');