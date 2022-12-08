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
const modal = document.querySelector('.js-modal-sucess');

function closeModal() {
    modal.classList.remove('active-modal');
}

btnSucess.addEventListener('click', closeModal)