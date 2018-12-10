'use strict';

var elements = document.querySelectorAll('.option__select-block');
var colors = document.querySelectorAll('.option__sublist-link');
var currentColor = document.querySelectorAll('.color-current');
var colorBottom = document.querySelectorAll('.color__sublist-link');
var mainBlock = document.querySelector('.custom__main');
var main = document.querySelector('main');
var preloader = document.querySelector('.preload-wrap');

if (!NodeList.prototype.forEach) {
	Object.defineProperty(NodeList.prototype, "forEach", {
		value: Array.prototype.forEach,
		configurable: true,
		writable: true
	});
}

function getBgUrl(el) {
    var bg = "";
    if (el.currentStyle) {
        bg = el.currentStyle.backgroundImage;
    } else if (document.defaultView && document.defaultView.getComputedStyle) { 
        bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
    } else { 
        bg = el.style.backgroundImage;
    }
    return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}


function changeBackground(evt, element) {
	element.style.backgroundImage = 'url(img/card/elements/' + evt.target.dataset.img + '.png)';

	var image = document.createElement('img');
	image.src = getBgUrl(element);
	image.onload = function () {
		preloader.classList.remove('js-preload--active')
	}; 
}; 


function changeColor(item, evt) {

	item.forEach(function (elem) {

		if (evt.target == elem) {
			evt.preventDefault();

			elements.forEach(function (e, i) {

				if (evt.target.dataset.compon == e.dataset.compon) {
					preloader.classList.add('js-preload--active');
					
					changeBackground(evt, e);
					currentColor[i].textContent = evt.target.textContent;
				} else return;
			});
		}
	});
};

window.onload = function(){
	preloader.classList.remove('js-preload--active')
};

window.addEventListener('click', changeColor.bind(null, colors));
window.addEventListener('click', changeColor.bind(null, colorBottom));

//=================================================






var components = document.querySelectorAll('.components');
var option = document.querySelectorAll('.option__sublist');

var showDropdown = function showDropdown(evt) {
	if (evt.target.classList.contains('option__sublist-link')) {
		return;
	}
	for (var i = 0; i < optionDropdown.length; i++) {
		if (evt.target.classList.contains('option__select-block') || evt.target.classList.contains('option__dropdown') || evt.target.classList.contains('option__sublist') || evt.target.classList.contains('option__item')) {
			optionDropdown[i].classList.add('js-dropdown--active');
		} else {
			optionDropdown[i].classList.remove('js-dropdown--active');
			option[i].classList.remove('js-option__sublist--active');
		}
	}
};
window.addEventListener('mouseover', showDropdown);
window.addEventListener('mouseout', showDropdown);

var optionDropdown = document.querySelectorAll('.option__dropdown');

var showOptions = function showOptions(evt) {

	for (var i = 0; i < optionDropdown.length; i++) {

		if (evt.target == optionDropdown[i]) {
			optionDropdown[i].nextElementSibling.classList.toggle('js-option__sublist--active');
		} else {
			optionDropdown[i].nextElementSibling.classList.remove('js-option__sublist--active');
		}
	}
};

window.addEventListener('click', showOptions);

var colorDropdown = document.querySelectorAll('.color__dropdown');

var showBottomColorSelector = function showBottomColorSelector(evt) {

	for (var i = 0; i < colorDropdown.length; i++) {

		if (evt.target == colorDropdown[i]) {
			colorDropdown[i].nextElementSibling.classList.toggle('js-color__sublist--active');
			optionDropdown[i].classList.toggle('js-option__sublist--active');
		} else {
			colorDropdown[i].nextElementSibling.classList.remove('js-color__sublist--active');
			optionDropdown[i].classList.remove('js-option__sublist--active');
		}
	}
};

window.addEventListener('click', showBottomColorSelector);

var userName = document.querySelector('#userName');
var userSublist = document.querySelector('.user__sublist');
var userList = document.querySelector('.user_in');

var showUserMenu = function showUserMenu(evt) {
	if (evt.target == userList || evt.target == userName) {

		userSublist.classList.toggle('js-user__sublist--active');
		
	} else {
		userSublist.classList.remove('js-user__sublist--active');
	}
};


userName.addEventListener('click', showUserMenu);

var popup = document.querySelectorAll('.popup');
var popupIn = document.querySelector('#popupIn');
var savePopup = document.querySelector('#popupSave');
var mailPopup = document.querySelector('#popupMail');
var saveDesign = document.querySelector('#saveDesign');
var sendMail = document.querySelector('#sendMail');

var showPopup = function showPopup(evt) {
	if (evt.target.classList.contains('save__link')) {
		popup[0].style.display = 'block';
	}
	// if (evt.target == saveDesign){
	// 	popup[0].style.display = 'block';
	// }
	if (evt.target == sendMail) {
		popup[0].style.display = 'block';
		setTimeout(function () {
			popup[0].style.display = 'none';
		}, 2000);
	}
	if (evt.target == popupIn || evt.target == savePopup) {
		popup[0].style.display = 'none';
	}
	if (evt.target.classList.contains('popup__close')) {
		popup.forEach(function (el) {
			el.style.display = 'none';
		});
	}
};
window.addEventListener('click', showPopup);

// const showDropdown = (evt) => {

// 	if (evt.target.classList.contains('option__sublist-link')) {
// 			return;
// 		}

// 	for (let i = 0; i < optionDropdown.length; i++) {

// 		optionDropdown[i].classList.remove('js-dropdown--active');

// 		if (evt.target == components[i] || 
// 			evt.target == optionDropdown[i] || 
// 			evt.target == option[i]) {
// 			optionDropdown[i].classList.add('js-dropdown--active');
// 		}  else  {
// 			option[i].classList.remove('js-option__sublist--active');
// 		} 
// 	}
// }