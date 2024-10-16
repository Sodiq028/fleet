let loader = document.getElementById("loader");
let form = document.getElementById("form");
let inputText = document.getElementById("input");
let inputPassword = document.getElementById("password");
let modalOpen = document.getElementById("modalOpen");
let modal = document.getElementById("modal");
let closeBtn = document.getElementById("close");

form.style.display = "none";
loader.style.display = "flex";
modal.style.display = "none";

let adminname = "admin028";
let password = "028";

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(inputText.value === adminname && inputPassword.value === password) {
        window.location.href = "index.html";
    } else if (!inputText.value || !inputPassword.value) {
        modalOpen.addEventListener("click", () => {
            modal.style.display = "flex";
        })
    } else {
        modalOpen.addEventListener("click", () => {
            modal.style.display = "flex";
        })
    }
})

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        loader.style.display = "none"
        form.style.display = "flex";
    }, 100)
})