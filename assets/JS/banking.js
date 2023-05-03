// Banking-left
let dots = document.querySelectorAll('.ebank-dots .dot');
for (let dot of dots) {
  dot.onclick = function () {
      let active = document.querySelector('.active-dot');
      active.classList.remove('active-dot');
      this.classList.add('active-dot');
      let data_id = this.getAttribute('data-id');
      let tab_contents = document.querySelectorAll('.ebank-sliders .ebank-content');
      for (let content of tab_contents) {
          if (content.id === data_id) {
              content.classList.remove('d-none');
          }
          else {
              content.classList.add('d-none');

          }

      }
  }
}

// Banking-right Tab_Menu
let tabs = document.querySelectorAll('.qr-inputs .inputs');
for (let tab of tabs) {
    tab.onclick = function () {
        let active = document.querySelector('.active-tab');
        active.classList.remove('active-tab');
        this.classList.add('active-tab');
  
        let data_id = this.getAttribute('data-id');
  
        let tab_contents = document.querySelectorAll('.qr-tab-contents .tab-content');
        for (let content of tab_contents) {
            if (content.id === data_id) {
                content.classList.remove('d-none');
            }
            else {
                content.classList.add('d-none');
  
            }
  
        }
    }
}


// Modal-input-Validation
let confirm_btn = document.querySelector('.confirm-button');
let pin_input = document.getElementById("input1").value;
let num_btn = document.getElementById("input2").value;
confirm_btn.onclick = function() {  
    console.log(pin_input);
    let text_pin;
    let text_num;
    if (pin_input === '') {
      text_pin = "Pin kod daxil edilməyib";
    } 
    if ( num_btn === ''){
        text_num = "Mobil nomrə daxil edilmeyib";
    }
    document.getElementById("error-msg-pin").innerHTML = text_pin;
    document.getElementById("error-msg-number").innerHTML = text_num;
}

// Modal-input
let hidden_info = document.querySelector('.hidden-info');
let modal_info = document.querySelector('.modal-info')
let pin_inp = document.querySelector('#input1');
let mob_inp = document.querySelector('#input2');

pin_inp.onclick = function() {
    hidden_info.classList.toggle('d-none');
    modal_info.classList.toggle('d-none');
    console.log(hidden_info);
}
mob_inp.onclick = function() {
    hidden_info.classList.add('d-none');
    modal_info.classList.remove('d-none');
    console.log(hidden_info);
}

















