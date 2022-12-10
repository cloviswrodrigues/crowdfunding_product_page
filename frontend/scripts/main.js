const btnBookmark = document.querySelector('.js-btn-bookmark');
const btnSucess = document.querySelector('.js-btn-sucess');
const modalClose = document.querySelector('.js-modal-close');
const buttonsPledge = document.querySelectorAll('.js-btn-pledge');

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

btnBookmark.addEventListener('click', btnMarked)
btnSucess.addEventListener('click', closeModal)
modalClose.addEventListener('click', closeModal)

buttonsPledge.forEach((e) =>
    e.addEventListener('click', openModalPledge)
)
