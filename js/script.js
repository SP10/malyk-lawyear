// document.addEventListener("DOMContentLoaded", function() {
//     let burger = document.querySelector('.burger-menu');
//     let header = document.querySelector('header');
//     window.addEventListener('onscroll', function() {
//         burger.hidden = (pageYOffset < header.clientHeight);
//         console.log(pageYOffset);
//     });
// });

// Initialize and add the map
function initMap() {
    var map = L.map('map').setView([49.2352, 28.4702], 16);
    var icon = L.icon({
        iconUrl: './assets/marker.svg',
        iconSize: [88, 91.03], // size of the icon
        //  iconAnchor: [-10, 60], // point of the icon which will correspond to marker's location
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([49.2352, 28.4702], { icon: icon }).addTo(map);
}

function openMenu() {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay');
    let sidemenu = document.querySelector('.side-menu');
    html.classList.add('overflow');
    overlay.classList.add('overlay-show');
    sidemenu.classList.add('side-menu-show');
}

function closeMenu() {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay');
    let sidemenu = document.querySelector('.side-menu');
    html.classList.remove('overflow');
    overlay.classList.remove('overlay-show');
    sidemenu.classList.remove('side-menu-show');
}

function initScroll() {
    let burger = document.querySelector('.burger-menu');
    let header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        burger.hidden = (pageYOffset < header.clientHeight);
        console.log(pageYOffset);
    });
}

function closeOverlay() {
    var elements = document.querySelectorAll('#menu-side > ul >li >a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            closeMenu();
        });
    }
    var elements = document.querySelectorAll('#menu-side > ul > li > ul > li > a');
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", function() {
            closeMenu();
        });
    }
}

function showFeedBackForm() {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.add('overlay-bg');
    let feedback = document.getElementsByClassName("feedback")[0];
    feedback.classList.add('feedback-bg');
}

function closeFeedbackForm() {
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.remove('overlay-bg');
    let feedback = document.getElementsByClassName("feedback")[0];
    feedback.classList.remove('feedback-bg');
}

function send() {
    let bot = TelegramBot;
    let feedbackForm = document.getElementById('feedbackForm');
    let message = `
    *${feedbackForm.children.name.value}*\n${feedbackForm.children.phoneNumber.value}`;
    bot.sendMessage(message);
    closeFeedbackForm();
}