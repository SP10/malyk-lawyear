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

/*auto menu functions*/

const getLink = (path, title) => {
    let link = document.createElement('a');
    link.href = path;
    link.text = title;
    link.classList.add('nav__link');
    return link;
}

const getSubList = (data) => {
    let ul = document.createElement('ul');
    ul.classList.add('dropdown__menu');
    ul.setAttribute('data-expand', 'false');

    if (data.items) {
        for (item of data.items) {
            let li = document.createElement('li');
            li.classList.add('dropdown__item');
            let link;
            if (document.documentElement.lang === "ua-UA") {
                link = getLink(item.link.UA, item.name.UA);
            } else {
                link = getLink(item.link.RU, item.name.RU);
            }
            li.appendChild(link);
            ul.appendChild(li);
        }
    }
    return ul;
}

const getList = (data) => {
    let ul = document.createElement('ul');
    ul.classList.add('dropdown__menu');
    ul.setAttribute('data-expand', 'false');

    for (item of data) {
        if (item.items) {
            let li = document.createElement('li');
            li.classList.add('nav__item', 'dropdown');

            let span = document.createElement('span');
            span.classList.add('dropdown__link');
            span.setAttribute('data-click', 'false');

            if (document.documentElement.lang === "ua-UA") {
                span.innerText = item.name.UA;
            } else {
                span.innerText = item.name.RU;
            }

            span.addEventListener('click', (handler) => {
                let click = (handler.target.dataset.click === 'true');
                click = !click;
                handler.target.setAttribute('data-click', click);

                let expand = (handler.target.nextElementSibling.dataset.expand === 'true');
                expand = !expand;
                handler.target.nextElementSibling.setAttribute('data-expand', expand);
            }, false);

            let subList = getSubList(item);

            li.appendChild(span);
            li.appendChild(subList);
            ul.appendChild(li);
        } else {
            let li = document.createElement('li');
            li.classList.add('dropdown__item');
            let link = getLink(item.link, item.name);
            if (document.documentElement.lang === "ua-UA") {
                link = getLink(item.link.UA, item.name.UA);
            } else {
                link = getLink(item.link.RU, item.name.RU);
            }
            li.appendChild(link);
            ul.appendChild(li);
        }
    }
    return ul;
}

const createSideMenu = (menuObject, target) => {
    for (const menuItem of menuObject) {
        if (menuItem.submenus) {
            let li = document.createElement('li');
            li.classList.add('nav__item', 'dropdown');

            let span = document.createElement('span');
            span.classList.add('dropdown__link');
            span.setAttribute('data-click', 'false');

            if (document.documentElement.lang === "ua-UA") {
                span.innerText = menuItem.name.UA;
            } else {
                span.innerText = menuItem.name.RU;
            }

            span.addEventListener('click', (handler) => {
                let click = (handler.target.dataset.click === 'true');
                click = !click;
                handler.target.setAttribute('data-click', click);

                let expand = (handler.target.nextElementSibling.dataset.expand === 'true');
                expand = !expand;
                handler.target.nextElementSibling.setAttribute('data-expand', expand);
            }, false);

            let submenu = getList(menuItem.submenus);
            li.appendChild(span);
            li.appendChild(submenu);
            target.appendChild(li);
        } else {
            let li = document.createElement('li');

            let link;
            if (document.documentElement.lang === "ua-UA") {
                link = getLink(menuItem.link.UA, menuItem.name.UA);
            } else {
                link = getLink(menuItem.link.RU, menuItem.name.RU);
            }
            li.classList.add('nav__item');
            li.appendChild(link);
            target.appendChild(li);
        }
    }
}


const onInitSideMenu = () => {
    let menus = [
        {
            name: { 'UA': 'Головна', 'RU': 'Главная' },
            link: { 'UA': "/", 'RU': '/ru' },
        },
        {
            name: { 'UA': 'Біографія', 'RU': 'Биография' },
            link: { 'UA': "/#about", 'RU': '/ru/#about' },
        },
        {
            name: { 'UA': 'Послуги', 'RU': 'Услуги' },
            submenus: [
                {
                    name: { 'UA': 'Сімейний адвокат', 'RU': 'Cемейный адвокат' },
                    items: [
                        {
                            name: { 'UA': 'Розірвання шлюбу', 'RU': 'Расторжение брака' },
                            link: { 'UA': "/service/family/rozirvannia-shliubu", 'RU': '' },
                        },
                        {
                            name: { 'UA': 'Стягнення аліментів', 'RU': 'Взыскание алиментов' },
                            link: { 'UA': "/service/family/stiahnennia-alimentiv", 'RU': '' },
                        },
                        {
                            name: { 'UA': 'Розподіл спільного майна подружжя', 'RU': 'Разделе общего имущества супругов' },
                            link: { 'UA': "/service/family/rozpodil-spilnoho-maina", 'RU': '' },
                        },
                        {
                            name: { 'UA': 'Позбавлення батьківських прав', 'RU': 'Лишение родительских прав' },
                            link: { 'UA': "/service/family/pozbavlennia-batkivskykh-prav", 'RU': '' },
                        },
                        {
                            name: { 'UA': 'Встановлення батьківства', 'RU': 'Установление отцовства' },
                            link: { 'UA': "/service/family/vstanovlennia-batkivstva", 'RU': '' },
                        },
                        {
                            name: { 'UA': 'Усиновлення', 'RU': 'Усыновление' },
                            link: { 'UA': "/service/family/usynovlennia", 'RU': '' },
                        }
                    ]
                },
                {
                    name: { 'UA': 'Цивільне право', 'RU': 'Гражданское право' },
                    link: { 'UA': "/#service", 'RU': '/#service' },
                },
                {
                    name: { 'UA': 'Кримінальне право', 'RU': 'Уголовное право' },
                    link: { 'UA': "/#service", 'RU': '/#service' },

                },
                {
                    name: { 'UA': 'Адміністративне право', 'RU': 'Административное право' },
                    link: { 'UA': "/#service", 'RU': '/#service' },

                },
                {
                    name: { 'UA': 'Господарське право', 'RU': 'Хозяйственное право' },
                    link: { 'UA': "/#service", 'RU': '/#service' },
                },
            ],
        },
        {
            name: { 'UA': 'Вартість послуг', 'RU': 'Стоимость услуг' },
            submenus: [
                {
                    name: { 'UA': 'Аналіз справи', 'RU': 'Анализ дела' },
                    link: { 'UA': "/#analysis", 'RU': '/#analysis' },
                },
                {
                    name: { 'UA': 'Адміністративні правопорушення', 'RU': 'Административные правонарушения' },
                    link: { 'UA': "/#administrativeOff", 'RU': '/#administrativeOff' },
                },
                {
                    name: { 'UA': 'Кримінальні справи', 'RU': 'Уголовные дела' },
                    link: { 'UA': "/#criminal", 'RU': '/#criminal' },
                },
                {
                    name: { 'UA': 'Цивільні справи', 'RU': 'Гражданские дела' },
                    link: { 'UA': "/#civil", 'RU': '/#civil' },
                },
                {
                    name: { 'UA': 'Сімейні справи', 'RU': 'Семейные дела' },
                    link: { 'UA': "/#family", 'RU': '/#family' },
                },
                {
                    name: { 'UA': 'Адміністративні справи', 'RU': 'Административные дела' },
                    link: { 'UA': "/#administrative", 'RU': '/#administrative' },
                },
                {
                    name: { 'UA': 'Господарські справи', 'RU': 'Хозяйственные дела' },
                    link: { 'UA': "/#business", 'RU': '/#business' },
                },
            ],
        },
        {
            name: { 'UA': 'Переваги', 'RU': 'Преимущества' },
            link: { 'UA': "/#benefits", 'RU': '/#benefits' },
        },
        {
            name: { 'UA': 'Новини', 'RU': 'Новости' },
            link: { 'UA': "/#news", 'RU': '/#news' },
        },
        {
            name: { 'UA': 'Контакти', 'RU': 'Контакты' },
            link: { 'UA': "/#contacts", 'RU': '/#contacts' },
        },
    ];

    let sideMenuId = document.getElementById('side-menu');
    createSideMenu(menus, sideMenuId);
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
}