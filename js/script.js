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
            let click=(link.dataset.click==='true');
            click=!click;
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
    OnSideMenuClose();
    OnMenuItemClick();
    OnOverlayClick();
    OnExpandList();
}