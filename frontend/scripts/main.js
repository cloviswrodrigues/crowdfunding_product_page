const btnBookmark = document.querySelector('.js-btn-bookmark');
const btnSucess = document.querySelector('.js-btn-sucess');
const modalClose = document.querySelector('.js-modal-close');
const buttonsPledge = document.querySelectorAll('.js-btn-pledge');
const inputsRadio = document.querySelectorAll('input[name="plan-pledge"]');
const inputWithForm = ['pledge-option-2','pledge-option-3'];
const forms = document.querySelectorAll('.pledge__form-pledge');
const inputsPledge = document.querySelectorAll('input[name="plan-value"]');
const iconMenuMobile = document.querySelector('.js-icon-menu');
const iconHamburguer = document.querySelector('.icon-hamburguer');
const iconClose = document.querySelector('.icon-close');
const menuMobile = document.querySelector('.js-menu');

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

function inputPledgeValidate(e) {
    let input = e.target;
    let minValue = Number(input.dataset.minValue);
    let label = document.querySelector(`label[for="${input.id}"]`)

    if (Number(input.value) < minValue) {
        label.textContent = "value less than $"+ minValue;
        label.classList.add('msg-error');
        input.classList.add('input-error');
        input.classList.remove('valid');
        return false
    }else {
        label.textContent = "Enter your pledge";
        label.classList.remove('msg-error');
        input.classList.remove('input-error');
        input.classList.add('valid');
    }
}

function validateForm(form) {
    let planValue = form['plan-value'];
    
    if (planValue.className.includes('valid')){
        return true
    }  

    return false
}

function handleForm(e) {
    e.preventDefault();
    let form = e.target;
    if (validateForm(form)) {
        closeModal();
        openModalSucess();
    }
}

function toggleMenuMobile(e) {
    console.log('toggle menu')
    let body = document.querySelector('body');
    body.classList.toggle('darken');
    body.classList.toggle('overflow-hidden');
    iconHamburguer.classList.toggle('icon-active');
    iconClose.classList.toggle('icon-active');
    menuMobile.classList.toggle('mobile-active');
}

iconMenuMobile.addEventListener('click', toggleMenuMobile)

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

inputsPledge.forEach((e) => {
    e.addEventListener('input', inputPledgeValidate)
})