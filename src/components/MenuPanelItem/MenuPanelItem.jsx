
import "./menuPanelItem.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const MenuPanelItem = ({title, url}) => {

    return (
    <Link to={url || `null`} key={uuidv4()}>
    <h5 className="menu-panel_item">
        {title}
      </h5>
    </Link>
    
    )
};

export default MenuPanelItem;