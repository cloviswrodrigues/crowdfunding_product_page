const btnBookmark = document.querySelector('.js-btn-bookmark');
const btnSucess = document.querySelector('.js-btn-sucess');
const modalClose = document.querySelector('.js-modal-close');
const buttonsPledge = document.querySelectorAll('.js-btn-pledge');
const inputsRadio = document.querySelectorAll('input[name="plan-pledge"]');
const inputWithForm = ['pledge-option-2','pledge-option-3'];
const forms = document.querySelectorAll('.pledge__form-pledge');

function btnMarked(e) {
    btnBookmark.classList.toggle('btn-bookmark--marked');
    let span = btnBookmark.lastElementChild;
    if (span.innerText === 'Bookmark') {
        span.innerText = 'Bookmarked'
    } else {
        span.innerText = 'Bookmark'
    }
}

function overflowHiddenActive(element){
    let selectElement = document.querySelector(element);
    selectElement.classList.add('overflow-hidden');
}

function overflowHiddenDisabled(element){
    let selectElement = document.querySelector(element);
    selectElement.classList.remove('overflow-hidden');
}

function openModalPledge() {
    let modal = document.querySelector('.js-modal-pledge');
    modal.classList.add('active-modal');
    
    overflowHiddenActive('body');
}

function closeModal() {
    let modalActive = document.querySelector('.active-modal');
    modalActive.classList.remove('active-modal');

    overflowHiddenDisabled('body');
}


function activeOption(e) {
    disabledAllOptionsActive()
    inputId = e.target.id;
    if (inputWithForm.includes(inputId)){

        pledgeWrapper = e.target.parentNode.parentNode.parentNode;
        form = pledgeWrapper.lastElementChild;

        pledgeWrapper.classList.add('active-option');
        form.classList.add('active-form');
    }
}


function disabledAllOptionsActive() {
    let options = document.querySelectorAll('.active-option');
    let forms = document.querySelectorAll('.active-form');

    options.forEach((e) => {
        option = e;
        option.classList.remove('active-option');
    })

    forms.forEach((e) => {
        form = e;
        form.classList.remove('active-form');
    })
}

function openModalSucess() {
    let modalSucess = document.querySelector('.js-modal-sucess');
    modalSucess.classList.add('active-modal');    
    overflowHiddenActive('body');
}

function validateForm(form) {
    let planValue = form['plan-value'];
    let minValue = Number(planValue.dataset.minValue);

    if (Number(planValue.value) < minValue) {
        let label = document.querySelector(`label[for="${planValue.id}"]`)
        label.textContent = "value less than $"+ minValue;
        label.classList.add('msg-error');
        return false
    }


    return true
}

function handleForm(e) {
    e.preventDefault();
    let form = e.target;
    if (validateForm(form)) {
        closeModal();
        openModalSucess();
    }
}


btnBookmark.addEventListener('click', btnMarked)
btnSucess.addEventListener('click', closeModal)
modalClose.addEventListener('click', closeModal)

buttonsPledge.forEach((e) =>
    e.addEventListener('click', openModalPledge)
)

inputsRadio.forEach((e) =>
    e.addEventListener('click', activeOption)
)

forms.forEach((e) => {
    e.addEventListener('submit', handleForm)
})