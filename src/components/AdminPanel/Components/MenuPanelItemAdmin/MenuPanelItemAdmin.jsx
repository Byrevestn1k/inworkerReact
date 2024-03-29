
import "./menuPanelItem.css";
import { Link } from "react-router-dom";


const MenuPanelItemAdmin = ({ title, url, keys }) => {
  return (
    <Link key={keys} to={`${url}`}>
      <h5 className="menu-panel_item">
        {title}
      </h5>
    </Link>

  )
};

export default MenuPanelItemAdmin;  