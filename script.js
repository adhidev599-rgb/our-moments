const pages = document.querySelectorAll(".page");

let currentPage = 0;

// Show the first page
pages[currentPage].classList.add("active");

function nextPage() {
    pages[currentPage].classList.remove("active");

    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = 0;
    }

    pages[currentPage].classList.add("active");
}