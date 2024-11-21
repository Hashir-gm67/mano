let currentPage = 0;

function goToPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages[currentPage].classList.remove('active');
    pages[pageNumber].classList.add('active');
    currentPage = pageNumber;
}
