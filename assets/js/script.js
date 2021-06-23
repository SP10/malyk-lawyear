import Menu from "./menu.js";

const onScroll = () => {
    let burger = document.querySelector('.burger-menu');
    let header = document.querySelector('header');
    let wrapper = document.querySelector('.wrapper');

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 1399.98) {
            if (pageYOffset > header.clientHeight) {
                burger.hidden = false;
                burger.style.display = 'block';
            } else {
                burger.style.display = 'none';
            }
        } else if (window.innerWidth >= 575 && window.innerWidth <= 1399.98) {
            if (window.innerWidth > 991 && window.innerWidth <= 1399.98) {
                if (pageYOffset > header.clientHeight) {
                    burger.hidden = false;
                    burger.style.display = 'block';
                } else {
                    burger.style.display = 'none';
                }
            } else {
                burger.hidden = false;
                burger.style.display = 'block';
            }
        }
        let callBtn = document.querySelector('.call-button');
        let feedbackBtn = document.querySelector('.feedback-container');
        if (pageYOffset > header.clientHeight) {
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
        let overlay = document.querySelector('.overlay');
        let sidemenu = document.querySelector('.side-menu');
        html.classList.add('overflow');
        overlay.classList.add('overlay-bg');
        sidemenu.classList.add('side-menu__show');
    }, false);
}

const OnSideMenuClose = () => {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay');
    let sidemenu = document.querySelector('.side-menu');
    let closeBtn = document.getElementById('side-menu-close-btn');
    closeBtn.addEventListener('click', () => {
        html.classList.remove('overflow');
        overlay.classList.remove('overlay-bg');
        sidemenu.classList.remove('side-menu__show');
    }, false);
}

const OnMenuItemClick = () => {
    let html = document.querySelector('html');
    let item = document.querySelectorAll('.nav__link');
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

const OnOverlayClick = () => {
    let html = document.querySelector('html');
    let overlay = document.querySelector('.overlay');
    let sidemenu = document.querySelector('.side-menu');
    overlay.addEventListener('click', () => {
        html.classList.remove('overflow');
        overlay.classList.remove('overlay-bg');
        sidemenu.classList.remove('side-menu__show');
        // CloseFeedBackForm();
    }, false);
}



const resize = () => {
    let maxMobileSize = 688;
    let about = document.querySelector(".about");
    let aboutmobile = document.querySelector(".about-mobile");
    window.addEventListener('resize', () => {
        if (window.innerWidth <= maxMobileSize) {

        } else {

        }
    });
}

const OnInitConsultationBtn = () => {
    let btn = document.getElementById('consultation-btn');
    btn.addEventListener('click', () => {
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

const onInit = () => {
    let maxMobileSize = 688;
    let maxTabletSize = 1024;
    let header = document.querySelector('header');
    let burger = document.querySelector('.burger-menu');

    if (pageYOffset > header.clientHeight) {
        burger.hidden = false;
        burger.classList.add('burger-menu__show');
        // if (window.innerWidth <= maxTabletSize) {
        //     burger.classList.add('burger-menu__show');
        // }

    } else {
        burger.classList.remove('burger-menu__show');
    }
}

const onInitSideMenu = () => {
    let menu = new Menu();
    let target = document.getElementById('side-menu');
    let overlay = document.querySelector('.overlay-side-menu');
    let html = document.querySelector('html');
    menu.createSideMenu(target, overlay, html);
}

window.onload = () => {
    onInit();
    resize();
    onScroll();
    OnBurgerClick();
    // OnExpandList();
    OnSideMenuClose();
    OnMenuItemClick();
    OnOverlayClick();
    onInitSideMenu();
    OnInitConsultationBtn();
}