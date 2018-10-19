'use strict';

const elements = document.querySelectorAll('.option__select-block');
const colors = document.querySelectorAll('.option__sublist-link');
const currentColor = document.querySelectorAll('.color-current');
const colorBottom = document.querySelectorAll('.color__sublist-link');
let mainPage = document.querySelector('#mainPage');


const saveBtn = document.querySelector('.save');
let savePage = document.querySelector('#savePage');


// let a = '';
// savePage.innerHTML = a.innerHTML;
function changeBackground(evt, element){
	element.style.backgroundImage = `url(img/${evt.target.dataset.img}.png)`;
};

function changeColor(item, evt){
	item.forEach((elem) => {

		if (evt.target == elem) {
			elements.forEach ((e, i) => {

				if (evt.target.dataset.compon == e.dataset.compon){
					changeBackground(evt, e);
					currentColor[i].textContent = evt.target.textContent;
				} else return;
			});
		}
	});
};

window.addEventListener('click', changeColor.bind(null, colors));
window.addEventListener('click', changeColor.bind(null, colorBottom));

// const saveConstructor = {
// 	save: function(x) {
// 		localStorage.setItem('key', x.innerHTML);
// 	},
// 	// edit: this.save,
// }
function save(x) {
	localStorage.setItem('key', x.innerHTML);
}
// window.addEventListener('click', function (evt){
// 	if(evt.target.classList.contains('save')){
// 		saveConstructor.save(mainPage)
// 	};
// 	if(evt.target.classList.contains('edit')){
// 		saveConstructor.save(savePage)
// 	};
// });

var garageCurrentColor = document.querySelector('.garage-color-current');
var roofCurrentColor = document.querySelector('.roof-color-current');
var doorCurrentColor = document.querySelector('.door-color-current');


// const mainPage = document.querySelector('#mainPage');

// let changeColor = (evt) => {

// 	if(evt.target.classList.contains('garage-color__sublist-link')) {
// 		garage.style.backgroundImage = `url(img/${evt.target.dataset.bg}${evt.target.dataset.img}.png)`;
// 		garageCurrentColor.textContent = evt.target.textContent;
// 	}
// }

// window.addEventListener('click', changeColor);

























































const materialDropdown = document.querySelectorAll('.option__dropdown');

const showSelector = (evt) => {

	for (let i = 0; i < materialDropdown.length; i++) {

		if (evt.target == materialDropdown[i]) {
			materialDropdown[i].nextElementSibling.classList.toggle('js-option__sublist--active');
		} else {
			materialDropdown[i].nextElementSibling.classList.remove('js-option__sublist--active');
		}
	} 
}

window.addEventListener('click', showSelector);

































const main = document.querySelector('.main__wrap');
const components = document.querySelectorAll('.components');
const option = document.querySelectorAll('.option__sublist');

// const showDropdown = (evt) => {

// 	if (evt.target.classList.contains('option__sublist-link')) {
// 			return;
// 		}

// 	for (let i = 0; i < materialDropdown.length; i++) {

// 		materialDropdown[i].classList.remove('js-dropdown--active');
		
// 		if (evt.target == components[i] || 
// 			evt.target == materialDropdown[i] || 
// 			evt.target == option[i]) {
// 			materialDropdown[i].classList.add('js-dropdown--active');
// 		}  else  {
// 			option[i].classList.remove('js-option__sublist--active');
// 		} 
// 	}
// }

// window.addEventListener('mouseover', showDropdown);
// window.addEventListener('mouseout', showDropdown);

const colorDropdown = document.querySelectorAll('.color__dropdown');



const showColorSelector = (evt) => {

	for (let i = 0; i < colorDropdown.length; i++) {

		if (evt.target == colorDropdown[i]) {
			colorDropdown[i].nextElementSibling.classList.toggle('js-color__sublist--active');
			materialDropdown[i].classList.toggle('js-option__sublist--active');
		} else {
			colorDropdown[i].nextElementSibling.classList.remove('js-color__sublist--active');
			materialDropdown[i].classList.remove('js-option__sublist--active');
		}
	} 
}

window.addEventListener('click', showColorSelector);