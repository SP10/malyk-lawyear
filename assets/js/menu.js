class Menu {
    constructor() {
        this.menus = [
            {
                name: { 'UA': 'Головна', 'RU': 'Главная' },
                link: { 'UA': "/", 'RU': '/ru' },
            },
            {
                name: { 'UA': 'Біографія', 'RU': 'Биография' },
                link: { 'UA': `/#about`, 'RU': '/ru/#about' },
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
                        name: { 'UA': 'Цивільні спори', 'RU': 'Гражданские споры' },
                        items: [
                            {
                                name: { 'UA': 'Адвокат по спадщині', 'RU': 'Адвокат по наследству' },
                                link: { 'UA': "/service/inheritance-lawyer", 'RU': '/ru/service/сivil-disputes/inheritance-lawyer' },
                            },
                            {
                                name: { 'UA': 'Земельні питання', 'RU': 'Земельные вопросы' },
                                link: { 'UA': "/service/land-issues", 'RU': '/ru/service/сivil-disputes/land-issues' },
                            },
                            {
                                name: { 'UA': 'Кредитні справи', 'RU': 'Кредитные дела' },
                                link: { 'UA': "/service/credit-affairs", 'RU': '/ru/service/сivil-disputes/credit-affairs' },
                            },
                            {
                                name: { 'UA': 'Стягнення боргів', 'RU': 'Взыскание долгов' },
                                link: { 'UA': "/service/debt-collection", 'RU': '/ru/service/сivil-disputes/debt-collection' },
                            },
                        ]
                    },
                    {
                        name: { 'UA': 'Автоадвокат', 'RU': 'Автоадвокат' },
                        link: { 'UA': "/service/car-lawyer", 'RU': '/ru/service/car-lawyer' },
                    },
                    {
                        name: { 'UA': 'Адміністративні справи', 'RU': 'Административные дела' },
                        link: { 'UA': "/service/administrative", 'RU': '/ru/service/administrative' },
                    },
                    {
                        name: { 'UA': 'Адміністративні  правопорушення', 'RU': 'Административные правонарушения' },
                        link: { 'UA': "/service/administrative-offenses", 'RU': '/ru/service/administrative-offenses' },
                    },
                    {
                        name: { 'UA': 'Господарські справи', 'RU': 'Хозяйственные дела' },
                        link: { 'UA': "/service/business", 'RU': '/ru/service/business' },
                    },
                    {
                        name: { 'UA': 'Кримінальні справи', 'RU': 'Уголовные дела' },
                        link: { 'UA': "/service/criminal", 'RU': '/ru/service/criminal' },
                    },
                    {
                        name: { 'UA': 'Податкові та митні питання', 'RU': 'Налоговые и таможенные вопросы' },
                        link: { 'UA': "/service/tax-and-customs", 'RU': '/ru/service/tax-and-customs' },
                    },
                    {
                        name: { 'UA': 'Трудові спори', 'RU': 'Трудовые споры' },
                        link: { 'UA': "/service/labor-disputes", 'RU': '/ru/service/labor-disputes' },
                    },
                    {
                        name: { 'UA': 'Цивільні справи', 'RU': 'Гражданские дела' },
                        link: { 'UA': "/service/сivil", 'RU': '/ru/service/сivil' },
                    },
                    {
                        name: { 'UA': 'Юридична допомога військовослужбовцям', 'RU': 'Юридическая помощь военнослужащим' },
                        link: { 'UA': "/service/military", 'RU': '/ru/service/military' },
                    },
                ],
            },
            {
                name: { 'UA': 'Вартість послуг', 'RU': 'Стоимость услуг' },
                submenus: [
                    {
                        name: { 'UA': 'Аналіз справи', 'RU': 'Анализ дела' },
                        link: { 'UA': "/#analysis", 'RU': '/ru/#analysis' },
                    },
                    {
                        name: { 'UA': 'Адміністративні правопорушення', 'RU': 'Административные правонарушения' },
                        link: { 'UA': "/#administrativeOff", 'RU': '/ru/#administrativeOff' },
                    },
                    {
                        name: { 'UA': 'Кримінальні справи', 'RU': 'Уголовные дела' },
                        link: { 'UA': "/#criminal", 'RU': '/ru/#criminal' },
                    },
                    {
                        name: { 'UA': 'Цивільні справи', 'RU': 'Гражданские дела' },
                        link: { 'UA': "/#civil", 'RU': '/ru/#civil' },
                    },
                    {
                        name: { 'UA': 'Сімейні справи', 'RU': 'Семейные дела' },
                        link: { 'UA': "/#family", 'RU': '/ru/#family' },
                    },
                    {
                        name: { 'UA': 'Адміністративні справи', 'RU': 'Административные дела' },
                        link: { 'UA': "/#administrative", 'RU': '/ru/#administrative' },
                    },
                    {
                        name: { 'UA': 'Господарські справи', 'RU': 'Хозяйственные дела' },
                        link: { 'UA': "/#business", 'RU': '/ru/#business' },
                    },
                ],
            },
            {
                name: { 'UA': 'Переваги', 'RU': 'Преимущества' },
                link: { 'UA': "/#benefits", 'RU': '/ru/#benefits' },
            },
            {
                name: { 'UA': 'Новини', 'RU': 'Новости' },
                link: { 'UA': "/#news", 'RU': '/ru/#news' },
            },
            {
                name: { 'UA': 'Контакти', 'RU': 'Контакты' },
                link: { 'UA': "/#contacts", 'RU': '/ru/#contacts' },
            },
        ];
    }

    createSideMenu(target, overlay, html) {
        for (const menuItem of this.menus) {
            if (menuItem.submenus) {
                let li = document.createElement('li');
                li.classList.add('nav__item', 'dropdown');

                let span = document.createElement('span');
                span.classList.add('dropdown__link');
                span.setAttribute('data-click', 'false');

                if (document.documentElement.lang === "ua") {
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

                let submenu = this._getList(menuItem.submenus);
                li.appendChild(span);
                li.appendChild(submenu);
                target.appendChild(li);
            } else {
                let li = document.createElement('li');

                let link;
                if (document.documentElement.lang === "ua") {
                    link = this._getLink(menuItem.link.UA, menuItem.name.UA);
                } else {
                    link = this._getLink(menuItem.link.RU, menuItem.name.RU);
                }

                link.addEventListener('click', (handler) => {
                    //  handler.preventDefault();

                    html.classList.remove('overflow');
                    overlay.classList.remove('overlay-side-menu-bg');
                    target.offsetParent.classList.remove('side-menu__show');
                });

                li.classList.add('nav__item');
                li.appendChild(link);
                target.appendChild(li);
            }
        }
    }

    _getLink = (path, title) => {
        let link = document.createElement('a');
        link.href = path;
        link.text = title;
        link.classList.add('nav__link');
        return link;
    }

    _getSubList = (data) => {
        let ul = document.createElement('ul');
        ul.classList.add('dropdown__menu');
        ul.setAttribute('data-expand', 'false');

        if (data.items) {
            for (let item of data.items) {
                let li = document.createElement('li');
                li.classList.add('dropdown__item');
                let link;
                if (document.documentElement.lang === "ua") {
                    link = this._getLink(item.link.UA, item.name.UA);
                } else {
                    link = this._getLink(item.link.RU, item.name.RU);
                }
                li.appendChild(link);
                ul.appendChild(li);
            }
        }
        return ul;
    }

    _getList = (data) => {
        let ul = document.createElement('ul');
        ul.classList.add('dropdown__menu');
        ul.setAttribute('data-expand', 'false');

        for (let item of data) {
            if (item.items) {
                let li = document.createElement('li');
                li.classList.add('nav__item', 'dropdown');

                let span = document.createElement('span');
                span.classList.add('dropdown__link');
                span.setAttribute('data-click', 'false');

                if (document.documentElement.lang === "ua") {
                    span.innerText = item.name.UA;
                } else {
                    span.innerText = item.name.RU;
                }

                span.addEventListener('click', (handler) => {
                    // handler.preventDefault();

                    let click = (handler.target.dataset.click === 'true');
                    click = !click;
                    handler.target.setAttribute('data-click', click);

                    let expand = (handler.target.nextElementSibling.dataset.expand === 'true');
                    expand = !expand;
                    handler.target.nextElementSibling.setAttribute('data-expand', expand);
                }, false);

                let subList = this._getSubList(item);

                li.appendChild(span);
                li.appendChild(subList);
                ul.appendChild(li);
            } else {
                let li = document.createElement('li');
                li.classList.add('dropdown__item');
                let link = this._getLink(item.link, item.name);
                if (document.documentElement.lang === "ua") {
                    link = this._getLink(item.link.UA, item.name.UA);
                } else {
                    link = this._getLink(item.link.RU, item.name.RU);
                }
                li.appendChild(link);
                ul.appendChild(li);
            }
        }
        return ul;
    }
}

export default Menu;