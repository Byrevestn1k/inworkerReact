let nav = document.querySelector(`nav`)
let button = document.querySelector(`.button-menu`)
let menuItem = document.querySelectorAll(`.navigation_item`)
function removeActiv() {
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].parentNode.querySelector(`ul`).classList.remove(`active`)
        menuItem[i].parentNode.querySelector(`h5`).classList.remove(`minus`)
    }
}
//випадаюче меню
function liHover() {
    let li = document.querySelectorAll(`.navigation_linck li`)
    for (let i = 0; i < li.length; i++) {
        if (li[i].childNodes.length > 1) {
            li[i].classList.add(`arrowRight`)
        }
        li[i].addEventListener(`mouseover`, function (e) {

            for (let a = 0; a < li[i].childNodes.length; a++) {
                if (li[i].childNodes[a].className == "dropdown-item") {
                    li[i].childNodes[a].classList.add(`active`);
                    li[i].childNodes[a].addEventListener(`mouseover`, function (e) {
                        li[i].childNodes[a].classList.add(`active`);
                    })
                    li[i].childNodes[a].addEventListener(`mouseout`, function (e) {
                        li[i].childNodes[a].classList.remove(`active`);
                    })
                    break;
                }
            }

        })
        li[i].addEventListener(`mouseout`, function (e) {
            for (let a = 0; a < li[i].childNodes.length; a++) {
                if (li[i].childNodes[a].className == "dropdown-item active") {
                    li[i].childNodes[a].classList.remove(`active`);
                    break;
                }
            }

        })
    }
}
//випадаюче меню
//accardeon nav menu
export function navigationMenu() {
    liHover()
    for (let i = 0; i < menuItem.length; i++) {
        menuItem[i].addEventListener(`click`, (e) => {
            let p = menuItem[i].parentNode.querySelector(`ul`)
            if (!p.classList.contains(`active`)) {
                removeActiv()
                p.classList.add(`active`)
                menuItem[i].parentNode.querySelector(`h5`).classList.add(`minus`)
            }
            else {
                removeActiv()
            }
        })
    }
}
//accardeon nav menu
//adaptive nav menu
export function adaptiveNavigation() {
    window.addEventListener("DOMContentLoaded", (e) => {
        buttonMenu()
        if (document.documentElement.clientWidth < 535) {
            nav.classList.add(`nav-hidden`)
            button.classList.remove(`hidden`)
            button.classList.add(`buttonMenu`)
        }
        else {
            nav.classList.remove(`nav-hidden`)
            document.querySelector(`.button-menu`).classList.add(`hidden`)
        }

        window.addEventListener("resize", (e) => {
            if (document.documentElement.clientWidth < 535) {

                nav.classList.add(`nav-hidden`)
                removeActiv()
                button.classList.remove(`hidden`)
                button.classList.add(`buttonMenu`)
            }
            else {
                nav.classList.remove(`nav-hidden`)
                document.querySelector(`.button-menu`).classList.add(`hidden`)
                nav.classList.remove(`nav-visible`)
                button.classList.remove(`button-menu-in-nav`)
            }
        })
    })
}
//adaptive nav menu

//adaptive nav menu button
function buttonMenu() {
    button.classList.remove(`hidden`)
    button.classList.add(`buttonMenu`)
    button.addEventListener(`click`, () => {
        if (nav.classList.contains(`nav-hidden`)) {
            nav.classList.remove(`nav-hidden`)
            nav.classList.add(`nav-visible`)
            button.classList.add(`button-menu-in-nav`)
        }
        else {
            removeActiv()
            nav.classList.add(`nav-hidden`)
            nav.classList.remove(`nav-visible`)
            button.classList.remove(`button-menu-in-nav`)
        }
    })
}
//adaptive nav menu button