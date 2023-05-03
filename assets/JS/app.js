// Search
let search_icon = document.querySelector('.search i');
let search_hidden_inp = document.querySelector('.wrapper');
let close_icon = document.querySelector('.close-icon i');

search_icon.onclick = function () {
    search_hidden_inp.classList.toggle('d-none')
}

close_icon.onclick = function () {
    search_hidden_inp.classList.add('d-none')
}

let additional_info = document.querySelector('.addition-inputs ');
let button = document.querySelector('.button');
let search_icon_2 = document.querySelector('.inp i');
search_icon_2.onclick = function () {
    additional_info.classList.toggle('d-none')
    button.classList.toggle('d-none')
}


// Slider
$('.sliders').slick({
    dots: true,        
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1
});

// Dark-Light Mode
let moon_icon = document.querySelector('.theme a i');
let sun_icon = document.querySelector('.sun-icon');
let moon_mobile = document.querySelector('.menu-bottom-tools .theme i');
let sun_mobile = document.querySelector('.menu-bottom-tools .theme .sun-icon ');
if (localStorage.getItem('lightMode') === 'undefined') {
    localStorage.setItem('lightMode', 'enabled')
}
else if (localStorage.getItem('lightMode') === 'disabled') {
    let e = document.body;
    e.classList.toggle('dark-mode');
    sun_icon.classList.toggle('d-none');
    moon_icon.classList.toggle('d-none');
    sun_mobile.classList.toggle('d-none');
    moon_mobile.classList.toggle('d-none');
}
moon_icon.onclick = function () {
    SetDarkMode();
}
sun_icon.onclick = function () {
    SetLightMode();
}
moon_mobile.onclick = function () {
    SetDarkMode();
}
sun_mobile.onclick = function () {
    SetLightMode();
}
function SetDarkMode() {
    localStorage.setItem('lightMode', 'disabled')
    let e = document.body;
    e.classList.toggle('dark-mode');
    sun_icon.classList.toggle('d-none');
    moon_icon.classList.toggle('d-none');
    sun_mobile.classList.toggle('d-none');
    moon_mobile.classList.toggle('d-none');
}
function SetLightMode() {
    localStorage.setItem('lightMode', 'enabled');
    let e = document.body;
    e.classList.toggle('dark-mode');
    moon_icon.classList.toggle('d-none')
    sun_icon.classList.toggle('d-none');
    sun_mobile.classList.toggle('d-none');
    moon_mobile.classList.toggle('d-none');
}


// Private and Business Btns
let business_btn = document.querySelector('.pr-bs .business');
let private_btn = document.querySelector('.pr-bs .private')
business_btn.onclick = function () {
    business_btn.classList.toggle('pr-bs-design')
    private_btn.classList.remove('pr-bs-design')

}
private_btn.onclick = function () {
    private_btn.classList.toggle('pr-bs-design')
    business_btn.classList.remove('pr-bs-design')

}

// Mobile-header
let burger_icon = document.querySelector('.burger-icon');
let hidden_header_menu = document.querySelector('.hidden-header-menu');
burger_icon.onclick = function () {
    hidden_header_menu.classList.toggle('active-menu');
}
let private_btn_hidden = document.querySelector('.private-business .private');
let business_btn_hidden = document.querySelector('.private-business .business');
private_btn_hidden.onclick = function () {
    private_btn_hidden.classList.toggle('private_business_btns');
    business_btn_hidden.classList.remove('private_business_btns')
}
business_btn_hidden.onclick = function () {
    business_btn_hidden.classList.toggle('private_business_btns');
    private_btn_hidden.classList.remove('private_business_btns')
}

let mobile_search_btn = document.querySelector('.menu-bottom-tools .search i');
let hidden_menu = document.querySelector('.wrapper');
mobile_search_btn.onclick = function () {
    hidden_menu.classList.toggle('d-none')
}

function ShowCardsCount() {
    let cards_list = JSON.parse(localStorage.getItem('cards'));
    document.querySelector('#total-count').innerHTML = cards_list.length;
    document.querySelector('#total-count2').innerHTML = cards_list.length;
}
ShowCardsCount();


// Exchange Mobile-TabMenu
let exchange_tabLinks = document.querySelectorAll('.menu-tabLinks .all-branches');
for (let exc_tab of exchange_tabLinks) {
    exc_tab.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.active-header');
        active.classList.remove('active-header');
        this.classList.add('active-header');
        let data_id_exg = this.getAttribute('data-id');
        let tab_contents = document.querySelectorAll('.tab-contents .tab-content');
        for (let content of tab_contents) {
            if (content.id === data_id_exg) {
                content.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
            }
        }
    }
}


// Currency exchange calculator
// Fake exchangeRate API 
let curr_input = document.querySelector('#curr-input');
let curr_output = document.querySelector('#curr-output');
curr_input.oninput = function () {
    let base_currency = $('#curr-base').val();
    let target_currency = $('#curr-target').val();
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    fetch(`https://api.exchangerate.host/convert?from=${base_currency}&to=${target_currency}&amount=${curr_input.value}`, options)
        .then(response => response.json())
        .then(response => curr_output.value = response.result)
        .catch(err => console.error(err));
}

// Select2 initialization
$(document).ready(function () {
    $('.currency-dropdown').select2({
        minimumResultsForSearch: Infinity,
        templateResult: formatState,
        templateSelection: formatState,
        dropdownCssClass: 'currency-option',
        width: 80
    });
});

function formatState(state) {
    if (!state.id) {
        return state.text;
    }
    var baseUrl = "/assets/images";
    var $state = $(
        '<span class="currency-option"><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.webp" /> ' + state.text + '</span>'
    );
    return $state;
};