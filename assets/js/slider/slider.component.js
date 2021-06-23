class SliderComponent {
    slider = null;
    select = null;
    previousButton = null;
    nextButton = null;

    tabs = [];
    articles = [];

    constructor(previousButton, nextButton, slider, select) {
        this.previousButton = previousButton;
        this.nextButton = nextButton;
        this.slider = slider;
        this.select = select;
    }

    setData(tabElements, articleElements) {

        articleElements.forEach(article => {
            this._createArticle(article);
        });

        tabElements.forEach(tab => {
            this._createTab(tab);
        });

        this.select.addEventListener("change", this._handlerSelect);

        this._setActive(0);

        // this._next();
        // this._prev();

        // this._reset();
    }

    _setActive(number) {
        this.articles[number].active = true;
        this.tabs[number].active=true;
        this.select.value=this.select[number].value;
    }

    _createTab(tabElement) {
        let tab = new Tab(tabElement, this._handlerTab);
        this.tabs.push(tab);
    }

    _createArticle(articleElement) {
        let article = new Article(articleElement);
        this.articles.push(article);
    }

    _getArticleByType(type) {
        let article = this.articles.find(article => article.type === type);
        return article;
    }

    _getTabIndexByType(type) {
        let index = this.tabs.findIndex(tab => tab.type === type);
        return index;
    }

    _getActive(){
        let article=this.articles.find(article=> article.active==='true');
        return article;
    }


    _hideArticle() {
        this.articles.forEach(item => {
            item.active = false;
        });
    }

    _hideIndicator() {
        this.tabs.forEach(item => {
            item.active=false;
        })
    }

    _handlerTab = el => {
        let type = el.currentTarget.getAttribute('data-type');
        let currentArticle = this._getArticleByType(type);

        this._hideArticle();
        this._hideIndicator();

        this.select.selectedIndex=this._getTabIndexByType(type);
        currentArticle.active = true;

        el.currentTarget.children[1].classList.add('active');
    }

    _handlerSelect = el => {
        let type = el.currentTarget.value;
        let currentArticle = this._getArticleByType(type);

        this._hideArticle();
        this._hideIndicator();

        let indexTab=this._getTabIndexByType(type);
        this.tabs[indexTab].active=true;

        currentArticle.active = true;
    }

    _next() {
        this.nextButton.addEventListener('click', event => {
            // this.slider.scrollBy(180, 0);
            event.preventDefault();

            this.slider.scrollBy({
            left: event.offsetY*7,    
            behavior: 'smooth'});

            this._reset();
        });
    }

    _prev() {
        this.previousButton.addEventListener('click', event => {
            // this.slider.scrollBy(-180, 0);
            event.preventDefault();

            this.slider.scrollBy({
            left: -event.offsetY*9,    
            behavior: 'smooth'});
            this._reset();
        });

    }

    _reset() {

        if (this.slider.scrollLeft === 0) {
            this.previousButton.classList.add('service-button-disabled');
        } else {
            this.previousButton.classList.remove('service-button-disabled');
        }

        if (this.slider.scrollLeft > this.slider.clientWidth) {
            this.nextButton.classList.add('service-button-disabled');
        } else {
            this.nextButton.classList.remove('service-button-disabled');
        }
    }
}

class Tab {
    constructor(tabElement, handler) {
        this.tab = tabElement;

        this.tab.addEventListener('click', handler);
    }

    get type() {
        return this.tab.getAttribute('data-type');
    }

    set type(value) {
        this.tab.setAttribute('data-type', value);
    }

    set active(value) {
        if (value) {
            this.tab.children[1]?.classList.add('active');
        } else {
            this.tab.children[1]?.classList.remove('active');
        }
    }
}

class Article {
    constructor(articleElement) {
        this.article = articleElement;
    }

    get type() {
        return this.article.getAttribute('data-type');
    }

    set type(value) {
        this.article.setAttribute('data-type', value);
    }

    get active() {
        return this.article.getAttribute('data-active');
    }

    set active(value) {
        this.article.setAttribute('data-active', value);
    }
}

class Slider {
    navigation = {};

    constructor(sliderClass, selectClass, tabClass, articleClass, { navigation: { nextEl, prevEl } }) {
        this.selectClass = selectClass;
        this.sliderClass = sliderClass;
        this.navigation.nextEl = nextEl;
        this.navigation.prevEl = prevEl;
        this.tabClass = tabClass;
        this.articleClass = articleClass;
        // this._loadStyle('./assets/js/slider/slider.style.css');
        this._init();

    }

    _init() {
        const select = this.selectClass ? document.querySelector(this.selectClass) : document.querySelector('[role=switch]');
        const slider = this.sliderClass ? document.querySelector(this.sliderClass) : document.querySelector('[role=slider]');
        const nextButton = this.navigation.nextEl ? document.querySelector(this.navigation.nextEl) : null;
        const prevButton = this.navigation.prevEl ? document.querySelector(this.navigation.prevEl) : null;
        const articles = this.articleClass ? document.querySelectorAll(this.articleClass) : document.querySelectorAll('[role=article]');
        const tabs = this.tabClass ? document.querySelectorAll(this.tabClass) : document.querySelectorAll('[role=tab]');

        const serviceSlider = new SliderComponent(prevButton, nextButton, slider, select);
        serviceSlider.setData(tabs, articles);
        // serviceSlider.setActive(0);
    }

    _loadStyle(filename) {
        let fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);

        if (typeof fileref != "undefined") {
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    }
}

export {
    Slider
}
