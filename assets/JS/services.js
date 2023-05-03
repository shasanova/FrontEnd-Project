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

fetch('/assets/json/service.json')
        .then(res => res.json())
        .then(out => ShowInfo(out))
        .catch(err => { throw err });

function ShowInfo(data) {
    let officesHtml = '';
    data.offices.forEach(item => {
        officesHtml += `
        <div class="col-lg-12 col-12">
            <div class="office">
                <div class="office-name">
                    <p class="name">${item.name}</p>
                    <p class="info">${item.address}</p>
                </div>
                <div class="others">
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-clock" aria-hidden="true"></i>
                        <p class="info">${item.openingTimes}</p>
                    </div>
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-info-circle"></i>
                        <p class="info">${item.service}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.querySelector('#offices').innerHTML = officesHtml;



    let saturdayOfficesHtml = '';
    data.saturdayOffices.forEach(item => {
        
        saturdayOfficesHtml += `
        <div class="col-lg-12 col-12">
            <div class="office">
                <div class="office-name">
                    <p class="name">${item.name}</p>
                    <p class="info">${item.address}</p>
                </div>
                <div class="others">
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-clock" aria-hidden="true"></i>
                        <p class="info">${item.openingTimes}</p>
                    </div>
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-info-circle"></i>
                        <p class="info">${item.service}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.querySelector('#saturdayOffices').innerHTML = saturdayOfficesHtml;



    let businessOfficesHtml = '';
    data.businessOffices.forEach(item => {
        businessOfficesHtml += `
        <div class="col-lg-12 col-12">
            <div class="office">
                <div class="office-name">
                    <p class="name">${item.name}</p>
                    <p class="info">${item.address}</p>
                </div>
                <div class="others">
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-clock" aria-hidden="true"></i>
                        <p class="info">${item.openingTimes}</p>
                    </div>
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-info-circle"></i>
                        <p class="info">${item.service}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.querySelector('#businessOffices').innerHTML = businessOfficesHtml;


    let utmHtml = '';
    data.utm.forEach(item => {
        
        utmHtml += `
        <div class="col-lg-12 col-12">
            <div class="office">
                <div class="office-name">
                    <p class="name">${item.name}</p>
                    <p class="info">${item.address}</p>
                </div>
                <div class="others">
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-clock" aria-hidden="true"></i>
                        <p class="info">${item.openingTimes}</p>
                    </div>
                    <div class="other d-flex">
                        <i id="icon" class="fas fa-info-circle"></i>
                        <p class="info">${item.service}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    document.querySelector('#utm').innerHTML = utmHtml;
}
