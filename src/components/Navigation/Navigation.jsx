import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import {
  HOME_PATH,
  PRODUCTS_PATH,
  BLOG_PATH,
  MINI_GAMES_PATH,
  SITEMAP_PATH, 
  CONTACT_PATH,
} from "../../constants/pathNames";
import { useEffect, useState } from "react";
import NavMenuPanel from "../NavNenuPanel/NavNenuPanel";
import { WIDTH_MONITOR } from "../../constants/constants";

const Navigation = ({ isFooter }) => {

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
      text: 'Блог',
      isUppercasetext: true,
      path: BLOG_PATH,
      isCategiries: true,
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
      isCategiries: false,
    },
    {
      id: uuidv4(),
      text: 'Карта сайту',
      isUppercasetext: true,
      path: SITEMAP_PATH,
      isCategiries: false,
      isFooter: true
    },
    {
      isFooter: true,
      id: uuidv4(),
      text: 'Контакти',
      isUppercasetext: true,
      path:CONTACT_PATH,
      isCategiries: false,

    },
  ];
  //адаптивне меню, ховаєм в кнопку нав
  let [isShowPAnel, setIisShowPAnel] = useState(false)
  //адаптивна панель меню при загрузці
  useEffect(()=>{
      if (document.documentElement.clientWidth < WIDTH_MONITOR) {
          setIisShowPAnel(true)
          }
      else {
          setIisShowPAnel(false)
      }
     }, [])
  //адаптивна панель меню при загрузці

  //адаптивна панель меню при зміні розміру вікна
      window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < WIDTH_MONITOR) {
          setIisShowPAnel(true)
          }
      else {
          setIisShowPAnel(false)
      }
      })
      //адаптивне меню, ховаєм в кнопку нав
  return (
    <div className="header">
      <nav className="navigation">
        {navElements.map((element) => {
          if (isFooter) {
            return (
              <Link key={element.id} to={element.path}>
                <NavigationItem
                  isFooterShow={isFooter}
                  text={element.text}
                  isUppercasetext={element.isUppercasetext}
                  isCategiries={element.isCategiries}
                  isFooter={element?.isFooter}
                />
              </Link>

            )
          }
          else {
           
            if (element.isFooter === true) {
              return
            }
            else {
              return (
                <Link key={element.id} to={element.path}>
                  <NavigationItem
                    isFooterShow={isFooter}
                    text={element.text}
                    isUppercasetext={element.isUppercasetext}
                    isCategiries={element.isCategiries}
                    isFooter={element?.isFooter}
                  />
                </Link>
              )
            }
         
          }
           
        })
        
        }
        {
          
          !isFooter && isShowPAnel?<NavMenuPanel/>:null//isFooter використовуємо для того щоб показувати деякі елементи лише в футері, а  isShowPAnel - елемент адаптивності, який показує елемент лише коли ширина екрану меншя 535
        }
      </nav>
    </div>
  );
};

export default Navigation;
