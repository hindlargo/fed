const button = document.querySelector("header nav button:first-of-type");
const nav = document.querySelector("header nav:nth-child(2)");

function openMenu(){
    nav.classList.toggle("show");
}

button.addEventListener("click", openMenu);
