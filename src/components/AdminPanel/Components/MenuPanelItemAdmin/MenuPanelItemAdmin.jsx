
import "./menuPanelItem.css";
import { Link } from "react-router-dom";


const MenuPanelItemAdmin = ({ title, url, key }) => {
  console.log(`${url}`);
  return (
    <Link key={key} to={`${url}`}>
      <h5 className="menu-panel_item">
        {title}
      </h5>
    </Link>

  )
};

export default MenuPanelItemAdmin;  