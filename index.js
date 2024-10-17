let mode = document.getElementById("mode");
let mode_icon = document.getElementById("mode_icon");
let mode2 = document.getElementById("mode2");
let mode_icon2 = document.getElementById("mode_icon2");
let btn = document.getElementById("btn");
let burger_menu = document.getElementById("burger_menu");
let burger_btn = document.getElementById("burger");
let avatar = document.getElementById("avatar");

avatar.addEventListener("click", () => {
    window.location.href = "index.html"
})


let theme = localStorage.getItem("theme");
if(!theme) {
    localStorage.setItem("theme", "light");
}
if(theme === "dark") {
    document.body.classList.add("dark");
    mode_icon.src = "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
}

mode.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        mode_icon.src = "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
    }
    if (theme === "dark") {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        mode_icon.src = "https://cdn2.iconfinder.com/data/icons/canoopi-mobile-contact-apps/32/Dark_Theme-512.png"
    }
})

mode2.addEventListener("click", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "light") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        mode_icon2.src = "https://static-00.iconduck.com/assets.00/sun-icon-2048x2048-ylj2peao.png";
    }
    if (theme === "dark") {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        mode_icon2.src = "https://cdn2.iconfinder.com/data/icons/canoopi-mobile-contact-apps/32/Dark_Theme-512.png"
    }
})

burger_btn.addEventListener("click", () => {
    burger_menu.classList.toggle("-translate-x-[600px]")
})


