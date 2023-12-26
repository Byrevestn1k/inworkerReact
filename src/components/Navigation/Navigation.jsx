import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";

import {
  HOME_PATH,
    PRODUCTS_PATH,
    BLOG_PATH,
    MINI_GAMES_PATH,
} from "../../constants/pathNames";

const Navigation = () => {

   const navElements = [
      {
         id: uuidv4(),
         text: 'Головна',
         isUppercasetext: true,
         path: HOME_PATH,
         isCategiries: false,
      },

      {
         id: uuidv4(),
         text: 'Blog',
         isUppercasetext: true,
         path: BLOG_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Mini games',
         isUppercasetext: true,
         path: MINI_GAMES_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Мої послуги',
         isUppercasetext: true,
         path: PRODUCTS_PATH,
         isCategiries: true,
      },
      {
        id: uuidv4(),
        text: 'Карта сайту',
        isUppercasetext: true,
        // path: PRODUCTS_PATH,
        isCategiries: false,
        isFooter: true
     },
     {
      id: uuidv4(),
      text: 'Контакти',
      isUppercasetext: true,
      // path: PRODUCTS_PATH,
      isCategiries: false,
      isFooter: true
   },
   ];

  return (
    <div className="header">
    <nav className="navigation">
      {navElements.map((element) => {
        return (
          // <Link key={element.id} to={element.path}>
            <NavigationItem
              text={element.text}
              isUppercasetext={element.isUppercasetext}
              isCategiries={element.isCategiries}
              isFooter={element.isFooter}
            />
          // </Link>
        
        );
      })}
    </nav>
    </div>
  );
};

export default Navigation;
