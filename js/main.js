'use strict';

/* Coded by Paliy Rostyslav. e-mail: paliy1984@gmail.com. skype: ros.coprandos  !!!SYLB!!! */

/*jslint vars: true, devel: true*/
/*global $, jQuery, alert*/
/*jslint plusplus: true */

/* Main nav subMenu*/
var subMEnuButton = document.querySelector('.sub-menu-inc');
var subMenu = document.querySelector('.main-nav .sub-menu');

subMEnuButton.addEventListener('click', showCatalogSubMenu);

function showCatalogSubMenu(e) {
    e.preventDefault();
    subMenu.classList.toggle('sub-menu-show');
}

/*Main nav search button*/
var searchButton = document.querySelector('.main-search-button');
var searchModal = document.querySelector('.header-search-modal');
var searchModalInput = document.querySelector('.header-search-modal [type="text"]');

searchButton.addEventListener('click', showSearch);
//searchModal.addEventListener('mouseleave', hideSearch);

function showSearch(e) {
    e.preventDefault();
    searchModal.classList.toggle('header-search-modal-show');
    searchModalInput.focus();
}

// function hideSearch(e) {
//     e.preventDefault();
//     searchModal.classList.remove('header-search-modal-show');
// }

/*Main nav enter button*/
var signinButton = document.querySelector('.main-signin');
var signinModal = document.querySelector('.main-signin-modal');
var showSigninModalInput = document.querySelector('.main-signin-modal [type="text"]');

function showSigninModal(e) {
    e.preventDefault();
    signinModal.classList.toggle('main-signin-modal-show');
    showSigninModalInput.focus();
}

signinButton.addEventListener('click', showSigninModal);