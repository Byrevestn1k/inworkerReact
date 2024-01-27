
import "./menuPanel.css";
import { v4 as uuidv4 } from 'uuid';
import MenuPanelItem from "../MenuPanelItem";
import { useEffect, useState } from "react";

import { WIDTH_MONITOR } from "../../constants/constants";

const MenuPanel = ({ dataBD }) => {

    let [isShowPAnel, setIisShowPAnel] = useState(false)
    //адаптивна панель меню при загрузці
    useEffect(() => {
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
            setIisShowPAnel(false)
        }
        else {
            setIisShowPAnel(true)
        }
    }, [])
    //адаптивна панель меню при загрузці+

    //адаптивна панель меню при зміні розміру вікна
    window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
            setIisShowPAnel(false)
        }
        else {
            setIisShowPAnel(true)
        }
    })

    return (
        <div className="menu-panel">

            {isShowPAnel ?
                dataBD.map((el) => {
                    return (
                        <MenuPanelItem key={uuidv4()} title={el.title} url={el.urlSlug} />
                    )
                }
                ) :
                null
            }
        </div>
    )
};

export default MenuPanel;