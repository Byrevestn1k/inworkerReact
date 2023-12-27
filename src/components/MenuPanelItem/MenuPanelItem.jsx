
import "./menuPanelItem.css";
import { Link } from "react-router-dom";


const MenuPanelItem = ({title, url}) => {

    return (
    <Link to={url || `null`}>
    <h5 className="menu-panel_item">
        {title}
      </h5>
    </Link>
    
    )
};

export default MenuPanelItem;