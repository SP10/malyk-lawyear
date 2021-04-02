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
    let item = document.querySelectorAll('.menu__link');
    let subitem = document.querySelectorAll('.menu-list__item');
    let overlay = document.querySelector('.overlay-side-menu');
    let sidemenu = document.querySelector('.side-menu');
    item.forEach(value => {
        value.addEventListener('click', () => {
            if (html.classList.contains('overflow')) html.classList.remove('overflow');
            if (overlay.classList.contains('overlay-side-menu-bg')) overlay.classList.remove('overlay-side-menu-bg');
            if (sidemenu.classList.contains('side-menu__show')) sidemenu.classList.remove('side-menu__show');
        }, false)
    });
    subitem.forEach(value => {
        value.addEventListener('click', () => {
            if (html.classList.contains('overflow')) html.classList.remove('overflow');
            if (overlay.classList.contains('overlay-side-menu-bg')) overlay.classList.remove('overlay-side-menu-bg');
            if (sidemenu.classList.contains('side-menu__show')) sidemenu.classList.remove('side-menu__show');
        }, false)
    });
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
            about.id = '';
            aboutmobile.id = 'about';
        } else {
            about.id = 'about';
            aboutmobile.id = '';
        }
    });
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
}

const onInitService = () => {
    let select = document.getElementById("service-select");
    let targetIndex = select.selectedIndex;
    let targetData = document.querySelector(`[data-service='${select.value}']`);
    if (targetData) {
        targetData.style.hidden = false;
        targetData.style.display = "block";
        document.querySelectorAll(`[data-show]`)[targetIndex].setAttribute("data-show", "true");
    }
}

const OnServiceSelectClick = () => {

    let select = document.getElementById("service-select");

    select.addEventListener("change", (option) => {
        let content = document.querySelectorAll(`[data-show='true']`);

        if (content) {
            content.forEach((value, i) => {
                value.setAttribute("data-show", "false");
                value.style.display = 'none';
            });
        }
        let target = select.value;
        let targetIndex = select.selectedIndex;
        let targetData = document.querySelector(`[data-service='${target}']`);
        if (targetData) {
            targetData.style.hidden = false;
            targetData.style.display = "block";
            document.querySelectorAll(`[data-show]`)[targetIndex].setAttribute("data-show", "true");
        }
    });
}

const OnServiceRadioClick = () => {
    for (let i = 1; i <= 9; i++) {
        let tab = document.getElementById('tab' + i);
        tab.addEventListener("click", (mouseEvent) => {
            currentInputId = mouseEvent.target.id;
            currentInputName = mouseEvent.target.labels[0].innerText;
            currentIndicator = document.getElementById(`slider${mouseEvent.target.id}`);

            {
                let indicators = document.querySelectorAll('.slider').forEach(indicator => {
                    indicator.style.hidden = false;
                    indicator.style.display = "none";
                })
            }

            {
                let showSections = document.querySelectorAll(`[data-show='true']`).forEach(section => {
                    section.setAttribute("data-show", "false");
                    section.style.hidden = true;
                    section.style.display = "none";
                })

            }

            if (currentInputName) {
                let section = document.querySelector(`[data-service='${currentInputName}']`);
                section.setAttribute("data-show", "true");
                section.style.hidden = false;
                section.style.display = "block";
                currentIndicator.style.display = "block";
            }
        })
    }
}

window.onload = () => {
    onInit();
    onInitService();
    resize();
    onScroll();
    OnBurgerClick();
    OnSideMenuClose();
    OnMenuItemClick();
    OnOverlayClick();
    OnServiceSelectClick();
    OnServiceRadioClick();
}