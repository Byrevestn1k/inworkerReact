
import { NAVIGATION_PATH } from "../constants/pathNames";
import "./menuPanelItem.css";
import { Link } from "react-router-dom";


const MenuPanelItemAdmin = ({title, url, key}) => {

    return (
    <Link key={key} to={url}>
    <h5 className="menu-panel_item">
        {title}
      </h5>
    </Link>
    
    )
};

export default MenuPanelItemAdmin;  