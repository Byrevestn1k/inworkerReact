import { useState } from "react"



export function adaptiveHeader() {
let  [width, setWidth]= useState()
console.log(document.documentElement.clientWidth);
    window.addEventListener("DOMContentLoaded", (e) => {
        let logotype = document.querySelector(`.logotype img`)
        let header = document.querySelector(`.header`)
        if (document.documentElement.clientWidth < 535) {
            logotype.setAttribute(`src`, "images/header/inworker_shapka_mini.png")

            header.classList.add(`hidden`)
        }
        else {
            logotype.setAttribute(`src`, "images/header/inworker_shapka.jpg")
            header.classList.remove(`hidden`)
        }

        window.addEventListener("resize", (e) => {
            if (document.documentElement.clientWidth < 535) {
                logotype.setAttribute(`src`, "images/header/inworker_shapka_mini.png")
                header.classList.add(`hidden`)
            }
            else {
                header.classList.remove(`hidden`)
                logotype.setAttribute(`src`, "images/header/inworker_shapka.jpg")
            }
        })
    })
}

