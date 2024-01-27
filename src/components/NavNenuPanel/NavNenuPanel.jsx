//для адаптивної верстки навігації
import "../MenuPanel/menuPanel.css";
import { v4 as uuidv4 } from 'uuid';
import MenuPanelItem from "../MenuPanelItem";
import { useSelector } from "react-redux";

const NavNenuPanel = () => {
    let uploadCategories = useSelector(state => state.uploadCategories).uploadCategories;
    return (
        <div className="menu-panel">
            {
                uploadCategories.map((el) => {
                    return (
                        <MenuPanelItem key={uuidv4()} title={el.title} url={el.urlSlug} />
                    )
                }
                )
            }
        </div>
    )
}

export default NavNenuPanel;