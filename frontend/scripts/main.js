const btnBookmark = document.querySelector('.js-btn-bookmark');

function btnMarked(e) {
    btnBookmark.classList.toggle('btn-bookmark--marked');
    let span = btnBookmark.lastElementChild;
    if (span.innerText === 'Bookmark') {
        span.innerText = 'Bookmarked'
    } else {
        span.innerText = 'Bookmark'
    }
}

btnBookmark.addEventListener('click', btnMarked)

const btnSucess = document.querySelector('.js-btn-sucess');

function closeModal() {
    let modalActive = document.querySelector('.active-modal');
    modalActive.classList.remove('active-modal');
}

btnSucess.addEventListener('click', closeModal)

const modalClose = document.querySelector('.js-modal-close');
modalClose.addEventListener('click', closeModal)
