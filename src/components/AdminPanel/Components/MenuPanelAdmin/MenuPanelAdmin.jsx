
import "./menuPanel.css";
import MenuPanelItem from "../MenuPanelItemAdmin/MenuPanelItemAdmin";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../../../../constants/constants";

const MenuPanelAdmin = ({dataBD}) => {
    
    let [isShowPAnel, setIisShowPAnel] = useState(false)
    //адаптивна панель меню при загрузці
    useEffect(()=>{
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
       
          
      
            {isShowPAnel?
            dataBD.map((el)=>{
                    return(
                        <MenuPanelItem key={el.id} title={el.title} url={el.urlSlug}/>
                    )
                }
            ):
            null
            }
       
    </div>
    )
};

export default MenuPanelAdmin;