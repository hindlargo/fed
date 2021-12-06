var demenuButton = document.querySelector("header nav button:first-of-type");

function openMenu(){
    hetMenu.classList.toggle("open");
}

demenuButton.addEventListener("click", openMenu);