let carCards = document.getElementById('car-cards')
let name = document.getElementById('name')
let numder = document.getElementById('number')
let gov = document.getElementById('gov')
let model = document.getElementById('m')
const inputs = document.querySelectorAll('input');

let cardArray = [];

function Alert (type , msg) {
    let bs_class = (type == 'SUCCESS') ? 'alert-success' : 'alert-danger'
    let element = document.createElement('div')
    
    element.innerHTML=`<div class="alert ${bs_class} alert-dismissible fade show custom-alert" role="alert" 
    style="top:10px; position: fixed; right: 18px; left: 18px; cursive; padding-bottom: 10px;">
    <strong class="me-3 fs-5"> ${msg} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`

    document.body.append(element);
}

function add() {
    if (name.value === '' | numder.value === '' | gov.value === '' | model.value === '' ) {
        Alert('ERROR', 'To Save Changes You Have to fill all Fileds')
        name.value = ''
        numder.value = ''
        gov.value = ''
        model.value = ''
    }
    else {
        cardArray.push([name.value , numder.value , gov.value , model.value]);
        console.log(cardArray)
        carCards.innerHTML += 
        `<div class="col-12 col-lg-4 col-md-6">
            <div class="p-3 d-flex justify-content-around align-items-center bg-light rounded shadow mt-2 mb-2">
                <i class="icon fa-solid fa-car-side text-primary"></i>
                <div>
                    <h4 class="text-primary">${name.value}</h4>
                    <p class="text-primary">${numder.value}</p>
                    <p class="text-primary">${gov.value}</p>
                    <p class="text-primary">${model.value}</p>
                </div>
            </div>
        </div>`
        name.value = ''
        numder.value = ''
        gov.value = ''
        model.value = ''
        Alert('SUCCESS', 'Add a New Car Successfully')
    }
}


