const button = document.querySelector("header nav button:first-of-type");
const nav = document.querySelector("header nav:nth-child(2)");
const slider = document.querySelector('#slider');
const waarde = document.querySelector('#waarde');

function openMenu(){
    nav.classList.toggle("show");
}

function printWaarde () {
    waarde.textContent = slider.value;
}


button.addEventListener("click", openMenu);
slider.addEventListener('input', printWaarde);


