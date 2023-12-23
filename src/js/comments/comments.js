export function comments() {
    clickTab()


}

function clickTab() {
    let comments__tabsitem = document.querySelectorAll(`.comments__tabsitem`);
    let comments__comments = document.querySelectorAll(`.comments__comments`);

    for (let i = 0; i < comments__tabsitem.length; i++) {
        comments__tabsitem[i].addEventListener(`click`, () => {
            for (let c = 0; c < comments__tabsitem.length; c++) {
                comments__tabsitem[c].classList.remove(`active-tab`);
                comments__comments[c].classList.remove(`active`);
            }
            comments__tabsitem[i].classList.add(`active-tab`)
            comments__comments[i].classList.add(`active`)
        })

    }
}