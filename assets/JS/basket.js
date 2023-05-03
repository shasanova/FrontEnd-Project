let cards_list = JSON.parse(localStorage.getItem('cards'));
if (cards_list.length > 0) {
    document.querySelector('.alert-basket').classList.add('d-none')
}
else {
    document.querySelector('.alert-basket').classList.remove('d-none')
}


// Create basket 
function AddCards() {
    let cards_list = JSON.parse(localStorage.getItem('cards'));
    let x = '';
    cards_list.forEach(item => {
        x += `
        <div class="col-lg-6 col-12">
        <div id=${item.Id} class="card">
            <img src=${item.Image}>
            <div class="card-body">
              <h5 class="card-title">${item.Name}</h5>
              <p class="card-text">Bu kartla hər zaman və hər yerdə yüksək statusunu vurğula! Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir.</p>
              <p>Qiymət: ${item.Price}</p>
              <div class="quantity"> 
                <button  class="minus">-</button>
                <span class="num">${item.Count}</span>
                <button  class="plus">+</button> 
                <i id="delete-product" class="fas fa-trash-alt"></i>    
              </div>
            </div>
        </div>
        </div>
        `
    })
    document.querySelector('.added-cards').innerHTML = x;
    document.getElementById('cnt').innerHTML = cards_list.length;
    TotalPrice();
    Increment_Item();
    Decrement_Item();
    DeleteItem();
    ShowCardsCount();
}
AddCards();

function ShowCardsCount() {
    let cards_list = JSON.parse(localStorage.getItem('cards'));
    document.querySelector('#total-count').innerHTML = cards_list.length;
    document.querySelector('#total-count2').innerHTML = cards_list.length;
}
ShowCardsCount();

// Total Price
function TotalPrice(){
    let cards_list = JSON.parse(localStorage.getItem('cards'));
    let count = 0;
    for (let item of cards_list){
        count += item.Count * item.Price ;
        console.log(count);
    }
    document.querySelector('#prc').innerHTML = count + ' AZN';
}

// Clear all
document.querySelector('#delete-all').onclick = function() {
    localStorage.removeItem('cards');
    location.reload();
}

// Quantity 
function Increment_Item() {
    let increment_btns = document.querySelectorAll('.plus');   
    for (let increment of increment_btns ) {
        increment.onclick = function() {
            let cards_list = JSON.parse(localStorage.getItem('cards'));
            let id = this.parentElement.parentElement.parentElement.id;
            let found_card = cards_list.find(item => item.Id === id);
            if (found_card !== undefined) {
                found_card.Count++;
                localStorage.setItem('cards', JSON.stringify(cards_list));
                AddCards();
            }
        }
    }
}
function Decrement_Item() {
    let decrement_btns = document.querySelectorAll('.minus');   
    for (let decrement of decrement_btns ) {
        decrement.onclick = function() {
            let cards_list = JSON.parse(localStorage.getItem('cards'));
            let id = this.parentElement.parentElement.parentElement.id;
            let found_card = cards_list.find(item => item.Id === id);
            if (found_card !== undefined && found_card.Count > 1) {
                found_card.Count--;
                localStorage.setItem('cards', JSON.stringify(cards_list));
                AddCards();
            }
        }
    }
}

// Delete Item
function DeleteItem() {
    let delete_icon = document.querySelectorAll('#delete-product');
    for (let delete_btn of delete_icon) {
        delete_btn.onclick = function() {
            let cards_list = JSON.parse(localStorage.getItem('cards'));
            let id = this.parentElement.parentElement.parentElement.id;
            let found_card = cards_list.find(item => item.Id === id);
            cards_list.splice(found_card, 1)
            localStorage.setItem('cards', JSON.stringify(cards_list));
            AddCards();
        }       
    }
}

