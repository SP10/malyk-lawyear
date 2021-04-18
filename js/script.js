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
    let overlay = document.querySelector('.overlay');
    let sidemenu = document.querySelector('.side-menu');
    overlay.addEventListener('click', () => {
        html.classList.remove('overflow');
        overlay.classList.remove('overlay-bg');
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

const sendMessage = () => {
    let feedbackForm = document.getElementById('feedbackForm');
    let message = `*${feedbackForm.children.name.value}*\n${feedbackForm.children.phoneNumber.value}`;
    if (message !== `**\n`) {
        TelegramBot.sendMessage(message);
        let success = document.querySelector('.feedback-success');
        success.classList.add('feedback-success-bg');
        CloseFeedBackForm();
        setTimeout(() => {
            success.classList.remove('feedback-success-bg');
        }, 2000)
    }
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

window.onload = () => {
    onInit();
    resize();
    onScroll();
    OnBurgerClick();
    OnExpandList();
    OnSideMenuClose();
    OnMenuItemClick();
    OnOverlayClick();
}