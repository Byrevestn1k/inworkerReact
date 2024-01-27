import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import NavMenuPanel from "../NavNenuPanel/NavNenuPanel";
import { WIDTH_MONITOR } from "../../constants/constants";
import { DataContext } from "../../App";
import { getAllDocuments_Firebase } from "../AdminPanel/helpers";
// import { useSelector } from "react-redux";
// let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate).pushForUseEffectUpdate;

const Navigation = ({ isFooterRender ,isHeaderRender }) => {
  let { setAdminflag } = useContext(DataContext)

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

  function setAdminflagHandler() {
    setAdminflag(true)
  }

  //адаптивне меню, ховаєм в кнопку нав
  return (
    <div className="header">
      <nav className="navigation">
        {navigationData.map((element) => {
      

           if (element.isHeader && !isFooterRender) {
            if (element.text === 'admin') {
              return <Link key={element.id} to={element.path}>
                <button onClick={setAdminflagHandler}>
                  <NavigationItem
                  //  isFooterShow={isFooter}
                    text={element.text}
                    isUppercasetext={element.isUppercasetext}
                    // isCategiries={element.isCategiries}
                    // isFooter={element?.isFooter}
                  />
                </button>
              </Link>

            }
            else{
              return (
              <Link key={element.id} to={element?.path}>
                <NavigationItem 
                  // data={navigationData}
                  // isHeaderShow={isHeaderRender}
                  text={element?.text}
                  isUppercasetext={element?.isUppercasetext}
                  // isCategiries={element?.isCategiries}
                  // isFooter={element?.isFooter}
                />
              </Link>

            )
            }
            
          }
          if ( element.isFooter && isFooterRender) {
            return (
              <Link key={element.id} to={element?.path}>
                <NavigationItem 
                  // data={navigationData}
                  // isFooterShow={isFooterRender}
                  text={element?.text}
                  isUppercasetext={element?.isUppercasetext}
                  // isCategiries={element?.isCategiries}
                  // isFooter={element?.isFooter}
                />
              </Link>

            )
          }
            
    

          }

        )

        }
        {

          !isFooterRender && isShowPAnel ? <NavMenuPanel /> : null//isFooter використовуємо для того щоб показувати деякі елементи лише в футері, а  isShowPAnel - елемент адаптивності, який показує елемент лише коли ширина екрану меншя 535
        }
      </nav>
    </div>
  );
};

export default Navigation;
