let tab_links = document.querySelectorAll('.service-headers .all-branches');
for (let link of tab_links) {
    link.onclick = function () {
        let active = document.querySelector('.active-header');
        active.classList.remove('active-header');
        this.classList.add('active-header');
        let data_id = this.getAttribute('data-id');
        let tab_contents = document.querySelectorAll('.service-contents .content');
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


fetch ('/assets/json/human-resources.json')
    .then(res => res.json())
    .then(out => GetInfo(out))
    .catch(err => { throw err });

function GetInfo(info) {
    let vacanciesHtml = "";
    info.vacancies.forEach(item => {
        vacanciesHtml += `
        <div class="col-lg-12 col-12">
            <div class="vacancy">
                <div class="vc-titles">
                    <a href="#">
                        <h5>${item.vacamcyName}</h5>
                        <span>${item.deadline}</span>
                    </a>
                </div>
                <div class="vc-button">
                    <a href="#">Müraciət et
                        <i class="fas fa-long-arrow-right"></i>
                    </a> 
                </div>      
            </div>
        </div>
        `;
    });
    document.querySelector('#vacancies').innerHTML = vacanciesHtml;
}

// Slider
// $('.human-capital-sliders').slick({
//     dots: false,
//     arrows:true,
//     infinite: true,
//     // autoplay: true,
//     // autoplaySpeed: 3000,
//     speed: 700,
//     pauseOnHover:false,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });


$('.human-capital-sliders').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1
  });