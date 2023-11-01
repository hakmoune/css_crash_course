const mobileBtn = document.getElementById("mobile-cta")
const mobileBtnExit = document.getElementById("mobile-exit")
const nav = document.querySelector("nav")

/*mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})*/

function toogleMenu() {
    nav.classList.toggle("menu-btn")
}

mobileBtn.addEventListener('click', toogleMenu)
mobileBtnExit.addEventListener('click', toogleMenu)