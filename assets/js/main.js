import Menu from "./menu.js";
import { Slider } from './slider/slider.component.js';

const onScroll = () => {
    let burger = document.querySelector('.burger-menu');
    let header = document.querySelector('header');
    let wrapper = document.querySelector('.wrapper');

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 1399.98) {
            if (pageYOffset > header.clientHeight) {
                burger.hidden = false;
                burger.classList.add('burger-menu__show');
            } else {
                burger.classList.remove('burger-menu__show');
            }
        } else if (window.innerWidth >= 575 && window.innerWidth <= 1399.98) {
            burger.hidden = false;
            burger.classList.add('burger-menu__show');
        }

        let home = document.getElementById('home');
        let callBtn = document.querySelector('.call-button');
        let feedbackBtn = document.querySelector('.feedback-container');
        if (pageYOffset > home.clientHeight) {
            callBtn.classList.add('call-button-show');
            callBtn.hidden = false;
            feedbackBtn.classList.add('feedback-container-show');
            feedbackBtn.hidden = false;
        } else {
            callBtn.classList.remove('call-button-show');
            callBtn.hidden = true;
            feedbackBtn.classList.remove('feedback-container-show');
            feedbackBtn.hidden = true;
        }

    }, false);
}

const OnBurgerClick = () => {
    let burger = document.querySelector('.burger-menu');
    burger.addEventListener('click', () => {
        let html = document.querySelector('html');
        let overlay = document.querySelector('.overlay-side-menu');
        let sidemenu = document.querySelector('.side-menu');
        html.classList.add('overflow');
        overlay.classList.add('overlay-side-menu-bg');
        sidemenu.classList.add('side-menu__show');
    }, false);
}

const OnSideMenuClose = () => {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay-side-menu');
    let sidemenu = document.querySelector('.side-menu');
    let closeBtn = document.getElementById('side-menu-close-btn');
    closeBtn.addEventListener('click', () => {
        html.classList.remove('overflow');
        overlay.classList.remove('overlay-side-menu-bg');
        sidemenu.classList.remove('side-menu__show');
    }, false);
}

const OnMenuItemClick = () => {
    let html = document.querySelector('html');
    let item = document.querySelectorAll('.nav__link');
    // let subitem = document.querySelectorAll('.menu-list__item');
    let overlay = document.querySelector('.overlay-side-menu');
    let sidemenu = document.querySelector('.side-menu');
    item.forEach(value => {
        value.addEventListener('click', () => {
            if (html.classList.contains('overflow')) html.classList.remove('overflow');
            if (overlay.classList.contains('overlay-side-menu-bg')) overlay.classList.remove('overlay-side-menu-bg');
            if (sidemenu.classList.contains('side-menu__show')) sidemenu.classList.remove('side-menu__show');
        }, false)
    });
}

const OnExpandList = () => {
    let dropdown_link = document.querySelectorAll('.dropdown__link');
    dropdown_link.forEach(link => {
        link.addEventListener('click', (e) => {
            let click = (link.dataset.click === 'true');
            click = !click;
            link.setAttribute('data-click', click);

            let expand = (link.nextElementSibling.dataset.expand === 'true');
            expand = !expand;
            link.nextElementSibling.setAttribute('data-expand', expand);
        }, false);
    })
}

const OnOverlayClick = () => {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay-side-menu');
    let sidemenu = document.querySelector('.side-menu');
    overlay.addEventListener('click', () => {
        html.classList.remove('overflow');
        overlay.classList.remove('overlay-side-menu-bg');
        sidemenu.classList.remove('side-menu__show');
        CloseFeedBackForm();
    }, false);
}

const OpenFeedBackForm = () => {
    let html = document.querySelector('html');
    html.classList.add('overflow');
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.add('overlay-bg');
    let feedback = document.getElementsByClassName("feedback")[0];
    feedback.classList.add('feedback-bg');
}

const CloseFeedBackForm = () => {
    let html = document.querySelector('html');
    html.classList.remove('overflow');
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.classList.remove('overlay-bg');
    let feedback = document.getElementsByClassName("feedback")[0];
    feedback.classList.remove('feedback-bg');
}

const OnInitConsultationBtn = () => {
    let btn = document.getElementById('consultation-btn');
    btn.addEventListener('click', () => {
        let html = document.querySelector('html');
        html.classList.add('overflow');
        let popup = document.getElementById('feedback-popup');
        popup.classList.add('dialog-window--show');
    }, false);

    let btnHome = document.getElementById('consultation-home-btn');
    btnHome.addEventListener('click', () => {
        let html = document.querySelector('html');
        html.classList.add('overflow');
        let popup = document.getElementById('feedback-popup');
        popup.classList.add('dialog-window--show');
    }, false);

    let closeBtn = document.getElementById('feedback-close-btn');
    closeBtn.addEventListener('click', () => {
        let html = document.querySelector('html');
        html.classList.remove('overflow');
        let popup = document.getElementById('feedback-popup');
        popup.classList.remove('dialog-window--show');
    }, false);

    let sendBtn = document.getElementById('feedback-send-btn');
    sendBtn.addEventListener('click', () => {
        sendMessage();
    }, false);
}

const sendMessage = () => {
    let body = document.querySelector('body');
    let html = document.querySelector('html');
    let popup = document.getElementById('feedback-popup');

    let feedbackForm = document.getElementById('feedbackForm');
    let message = `*${feedbackForm.children.name.value}*\n${feedbackForm.children.phoneNumber.value}`;
    if (message !== `**\n`) {
        TelegramBot.sendMessage(message);
        let div = document.createElement('div');
        let thanksText = document.createElement('h3');
        let waitText = document.createElement('h3');
        div.classList.add('feedback-success', 'feedback-success-bg');
        thanksText.innerText = "Дякую!";
        waitText.innerText = "Очікуйте, скоро наберу.";

        html.classList.remove('overflow');
        popup.classList.remove('dialog-window--show');
        div.append(thanksText);
        div.append(waitText);
        body.append(div);
        setTimeout(() => {
            div.classList.remove('feedback-success-bg');
        }, 4000)
    }
}

const resize = () => {
    let maxMobileSize = 688;
    let about = document.querySelector(".about");
    let aboutmobile = document.querySelector(".about-mobile");
    window.addEventListener('resize', () => {
        if (window.innerWidth <= maxMobileSize) {
            about.id = '';
            aboutmobile.id = 'about';
        } else {
            about.id = 'about';
            aboutmobile.id = '';
        }
    });
}


const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}

const onInit = () => {
    let maxMobileSize = 688;
    let maxTabletSize = 1024;
    let about = document.querySelector(".about");
    let aboutmobile = document.querySelector(".about-mobile");
    let burger = document.querySelector('.burger-menu');

    if (window.innerWidth <= maxMobileSize) {
        about.id = '';
        aboutmobile.id = 'about';
    } else {
        about.id = 'about';
        aboutmobile.id = '';
    }
    if (window.innerWidth <= maxTabletSize) {
        burger.classList.add('burger-menu__show');
    }


    showMenu('header-toggle', 'nav-menu')
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    }
    navLink.forEach(n => n.addEventListener('click', linkAction));
}

const onInitSideMenu = () => {
    // let menu = new Menu();
    let target = document.querySelector('.side-menu-navigation');
    let overlay = document.querySelector('.overlay-side-menu');
    let html = document.querySelector('html');

    let $subElements = document.querySelectorAll('.side-menu-navigation .dropdown');
    $subElements.forEach(element => {
        let parent = element.parentElement;
        parent.setAttribute('data-opened', 'false');

        parent.addEventListener('click', event => {
            // event.preventDefault();
            event.stopPropagation();

            let currentElement = event.target.parentElement;
            let isOpened = (currentElement.dataset.opened === 'true');
            isOpened = !isOpened;
            currentElement.setAttribute('data-opened', isOpened);

            let subElement = currentElement.querySelector('.dropdown');
            if (isOpened) {
                subElement.classList.add('js-opened');
            } else {
                subElement.classList.remove('js-opened');
            }
        });
    });

    let $elements=document.querySelectorAll('.side-menu-navigation li');
    $elements.forEach(element=>{
         element.addEventListener('click', event=>{
             event.stopPropagation();

             if(event.target.offsetParent.dataset.hasOwnProperty('opened')) return;
             
             html.classList.remove('overflow');
             overlay.classList.remove('overlay-side-menu-bg');
             target.offsetParent.classList.remove('side-menu__show');
         });
    });
    // menu.createSideMenu(target, overlay, html);
}

const onService = () => {
    let serviceSlider = new Slider('.service__slider', '.service__select-control', '.service__control', '.service__tab', {
        navigation: {
            nextEl: '.service-button-next',
            prevEl: '.service-button-prev',
        }
    });
}

const cropText = () => {
    const cropElement = document.querySelectorAll('.crop-text'),
        size = 350,
        endCharacter = '...';

    cropElement.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });
}

window.onload = () => {
    onInit();
    // onInitService();
    resize();
    onScroll();
    OnBurgerClick();
    OnSideMenuClose();
    OnMenuItemClick();
    OnOverlayClick();
    onService();
    // OnServiceSelectClick();
    // OnServiceRadioClick();
    OnInitConsultationBtn();
    OnExpandList();
    onInitSideMenu();
    cropText();
}