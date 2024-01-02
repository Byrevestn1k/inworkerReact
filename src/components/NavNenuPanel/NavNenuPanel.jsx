//для адаптивної верстки навігації
import "../MenuPanel/menuPanel.css";
import { v4 as uuidv4 } from 'uuid';
import MenuPanelItem from "../MenuPanelItem";
import { useContext} from "react";
import { DataContext } from "../../App";

const NavNenuPanel = (props) => {
   let {data}=useContext(DataContext)

   return (
   <div className="menu-panel"> 
      {
       data.map((el)=>{
               return(
                   <MenuPanelItem key={uuidv4()} title={el.title} url={el.urlSlug}/>
               )
           }
       )
       }
   </div>
   )
}

export default NavNenuPanel;