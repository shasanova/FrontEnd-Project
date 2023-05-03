if(localStorage.getItem('cards') === null){
    localStorage.setItem('cards', JSON.stringify([]));
}
let add_to_basket = document.querySelectorAll('.card-button a');
for (let btn of add_to_basket){
    btn.onclick = function(e){
        e.preventDefault();
        let id = this.parentElement.parentElement.parentElement.id;
        let src = this.parentElement.parentElement.parentElement.children[0].src;
        let card_name = this.parentElement.parentElement.children[0].innerHTML;        
        let card_price = this.parentElement.parentElement.children[3].innerHTML;       
        let cards_list = JSON.parse(localStorage.getItem('cards'));     
        let exist_card = cards_list.find(item => item.Id === id);
        if(exist_card === undefined){
            cards_list.push({
                Id: id,
                Image: src,
                Name: card_name,
                Price: card_price,
                Count: 1
            })
            document.querySelector('.alert').innerHTML = 'Məhsul əlave olundu';
            document.querySelector('.alert').style.right = '5%';
        }
        else{
            exist_card.Count +=1;
            document.querySelector('.alert').innerHTML = 'Məhsul yenidən əlave olundu';
            document.querySelector('.alert').style.right = '5%';
        }
        localStorage.setItem('cards',JSON.stringify(cards_list));
        setTimeout(() => {
        document.querySelector('.alert').style.right = '-20%'       
        }, 1000);
        ShowCardsCount();
    }
}
function ShowCardsCount() {
    let cards_list = JSON.parse(localStorage.getItem('cards'));
    document.querySelector('#total-count').innerHTML = cards_list.length;
    document.querySelector('#total-count2').innerHTML = cards_list.length;
}
ShowCardsCount();

