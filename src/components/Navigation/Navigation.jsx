import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NavMenuPanel from "../NavNenuPanel/NavNenuPanel";
import { WIDTH_MONITOR } from "../../constants/constants";
import { DataContext } from "../../App";
import { getAllDocuments_Firebase } from "../AdminPanel/helpers";
import LockOpenIcon from '@mui/icons-material/Login';
import { uuidv4 } from "@firebase/util";
// import { useSelector } from "react-redux";
// let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate).pushForUseEffectUpdate;

const Navigation = ({ isFooterRender, isHeaderRender }) => {


  //адаптивне меню, ховаєм в кнопку нав
  let [isShowPAnel, setIisShowPAnel] = useState(false)
  const [navigationData, setNavigationData] = useState([]);// БД з навігацією
  let collection = 'navigation';

  useEffect(() => {
    //адаптивна панель меню при загрузці
    if (document.documentElement.clientWidth < WIDTH_MONITOR) {
      setIisShowPAnel(true)
    }
    else {
      setIisShowPAnel(false)
    }
    //адаптивна панель меню при загрузці

    getAllDocuments_Firebase(collection).then((resp) => {
      setNavigationData(resp);//отримуєм БД з навігацією

    })
  }
    , []);

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
        {navigationData.map((element) => {

          if (element.isHeader && !isFooterRender) {
              return (
                <Link key={element.id} to={element?.path}>
                  <NavigationItem
                    text={element?.text}
                    isUppercasetext={element?.isUppercasetext}
                  />
                </Link>
              )
          }
          if (element.isFooter && isFooterRender) {
            return (
              <Link key={element.id} to={element?.path}>
                <NavigationItem
                  text={element?.text}
                  isUppercasetext={element?.isUppercasetext}
                />
              </Link>
            )
          }
        })
        }
        {
          !isFooterRender && isShowPAnel ? <NavMenuPanel data={navigationData} /> : null//isFooter використовуємо для того щоб показувати деякі елементи лише в футері, а  isShowPAnel - елемент адаптивності, який показує елемент лише коли ширина екрану меншя 535
        }
        {isFooterRender?null:
        <div className="nav-item">
        <Link  key={uuidv4()} to={`/auth`}>
            <LockOpenIcon sx={{ color: '#00b7cc', fontSize: 25 }}/>
        </Link>
        </div>
        }
      </nav>
    </div>
  );
};

export default Navigation;
