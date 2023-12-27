
import "./menuPanel.css";

import MenuPanelItem from "../MenuPanelItem";
import { useContext } from "react";
import { DataContext } from "../../App";

const MenuPanel = () => {
    let {data}=useContext(DataContext) 
    return (
    <div className="menu-panel"> 
        {
        data.map((el)=>{
                return(
                    <MenuPanelItem title={el.title} url={el.urlSlug}/>
                )
            }
        )
        }
    </div>
    )
};

export default MenuPanel;