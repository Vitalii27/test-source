var seacrhBtn = document.querySelectorAll('.js-search');
var contactBtn = document.querySelectorAll('.js-form');
var seacrhPopup = document.getElementById('search-popup');
var contactForm = document.getElementById('form-popup');
var active = 'popup-visible';


var close = document.querySelectorAll('.search-cross');
var html = document.getElementsByTagName('html')[0];
var body = document.getElementsByTagName('body')[0];

var openSeacrhPopup = function () {
    seacrhPopup.classList.add(active)
};

var closeSeacrhPopup = function () {
    seacrhPopup.classList.remove(active)
};

var openFormPopup = function () {
    contactForm.classList.add(active);
    body.classList.add('full-width');
}

var closeFormPopup = function () {
    contactForm.classList.remove(active);
    body.classList.remove('full-width');
}

Array.prototype.forEach.call(seacrhBtn, function (el) {
    el.addEventListener('click', function (el) {
        if (seacrhPopup.classList.contains(active)) {
            closeSeacrhPopup();
        } else {
            openSeacrhPopup();
        }
    })
});
Array.prototype.forEach.call(contactBtn, function (el) {
    el.addEventListener('click', function (el) {
        el.preventDefault();
        if (contactForm.classList.contains(active)) {
            closeFormPopup();
        } else {
            openFormPopup();
        }
    })
});
//
Array.prototype.forEach.call(close, function (el) {
    el.addEventListener('click', function () {
        closeSeacrhPopup();
        closeFormPopup();

    })
});
