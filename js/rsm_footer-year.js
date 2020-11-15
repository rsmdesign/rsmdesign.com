document.addEventListener("DOMContentLoaded", function () {
    const yrSpan = document.querySelector(".current-year");
    const currentYr = new Date().getFullYear();
    yrSpan.textContent = currentYr;
});