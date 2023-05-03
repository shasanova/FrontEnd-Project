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