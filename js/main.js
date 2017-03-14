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

function showSearch(e) {
    e.preventDefault();
    searchModal.classList.toggle('header-search-modal-show');
    searchModalInput.focus();
}

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

/*Main nav checkout button*/
var chackoutButton = document.querySelector('.main-checkout');
var chackoutModal = document.querySelector('.main-checkput-modal');

function chackoutModalShow(e) {
    e.preventDefault();
    chackoutModal.classList.toggle('main-checkput-modal-show');
}

chackoutButton.addEventListener('click', chackoutModalShow);

/*Main feedback*/
var feedbackButton = document.querySelector('.feedback');
var feedbackCloseButton = document.querySelector('.feedback-modal-close');
var feedbackModal = document.querySelector('.feedback-modal');
var feedbackOverlay = document.querySelector('.modal-overlay');
var feedbackName = document.querySelector('.feedback-modal-name');

function feedbackModalShow(e) {
    e.preventDefault();
    feedbackModal.classList.add('feedback-modal-show');
    feedbackOverlay.classList.add('modal-overlay-show');
    feedbackName.focus();
}

feedbackButton.addEventListener('click', feedbackModalShow);

function hideModal(e) {
    e.preventDefault();
    if (feedbackModal.classList.contains('feedback-modal-show') || feedbackOverlay.classList.contains('modal-overlay-show')) {
        feedbackModal.classList.remove('feedback-modal-show');
        feedbackOverlay.classList.remove('modal-overlay-show');
    }
}

feedbackOverlay.addEventListener('click', hideModal);
feedbackCloseButton.addEventListener('click', hideModal);