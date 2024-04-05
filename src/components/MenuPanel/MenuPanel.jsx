
import "./menuPanel.css";
import { v4 as uuidv4 } from 'uuid';
import MenuPanelItem from "../MenuPanelItem";
import { useEffect, useState } from "react";

import { WIDTH_MONITOR } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MENU, SHOW_MENU } from "../../constants/actions";

const MenuPanel = () => {
    const categoriesList = useSelector(state => state.uploadCategories.uploadCategories); //список усых категорый
    let isShowPAnel = useSelector(state => state.showMenu.showMenu);// перемикач панелі меню
    let dispatch = useDispatch()
    //адаптивна панель меню при загрузці
    useEffect(() => {
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
             dispatch({ type: HIDE_MENU });
        }
        else {
             dispatch({ type: SHOW_MENU });
        }
    }, [])
    //адаптивна панель меню при загрузці+

    //адаптивна панель меню при зміні розміру вікна
    window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
             dispatch({ type: HIDE_MENU });
        }
        else {
             dispatch({ type: SHOW_MENU});
        }
    })

    return (
        <div className="menu-panel" key={uuidv4()} >

            {isShowPAnel && categoriesList ?
                categoriesList.map((el) => {
                    return (
                        <MenuPanelItem navItemData={el} />
                    )
                }
                ) :
                null
            }
        </div>
    )
};

export default MenuPanel;

<nav>
<script async src="https://cse.google.com/cse.js?cx=005559873973306921414:q4xirmihkmt">
</script>
<div class="gcse-search"></div>
<div class="navigation">
    <h5 class="navigation_item">Lorem, ipsum dolor.</h5>

    <ul class="navigation_linck">
        <li><a href="">Lorem, ipsum dolor.</a>
            <ul class="dropdown-item">
                <li>item 1sfsdfs dfsd sd</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </li>

        <li><a href="">Lorem, ipsum dolor.</a>
            <ul class="dropdown-item">
                <li>item 1</li>
                <li>item 2dhf s </li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
        </li>
        <li><a href="">Lorem, ipsum dolor.</a>
            <ul class="dropdown-item">
                <li>item </li>
                <li>item 2</li>
                <li>item 3 fgh fg hfghf</li>
                <li>item 4</li>
            </ul>
        </li>
    </ul>

</div>
<div class="navigation">
    <h5 class="navigation_item">Lorem, ipsum dolor.</h5>

    <ul class="navigation_linck">
        <li><a href="">Lorem, ipsum dolor.</a></li>
        <li><a href="">Exercitationem, edsdfsdfsdfsdfdsf nim dolores?</a></li>
        <li><a href="">Qui, enim officia?</a></li>
    </ul>

</div>
<div class="navigation">
    <h5 class="navigation_item">Lorem, ipsum dolor.</h5>

    <ul class="navigation_linck">
        <li><a href="">Lorem, ipsum dolor.</a></li>
        <li><a href="">Exercitationem, enim dolores?</a></li>
        <li><a href="">Qui, enim officia?</a></li>
    </ul>

</div>
<div class="navigation">
    <h5 class="navigation_item">Lorem, ipsum dolor.</h5>

    <ul class="navigation_linck">
        <li><a href="">Lorem, ipsum dolor.</a></li>
        <li><a href="">Esfsd sd fsdf sdfsd sd sdxercitationem, enim dolores?</a></li>
        <li><a href="">Qui, enim officia?</a></li>
    </ul>

</div>
</nav>