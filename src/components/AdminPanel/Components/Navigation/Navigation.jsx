import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../constants/constants";
import { getAllDocuments_Firebase } from "../../helpers";
import Modal from "../Modal";
import NavigationEditor from "../NavigationEditor/NavigationEditor";
import { useDispatch, useSelector } from "react-redux";
import { SHOW_MODAL, UPLOAD_NAVIGATION } from "../../../../constants/actions";

const Navigation = ({ isFooter }) => {
  //адаптивне меню, ховаєм в кнопку нав
  let [isShowPAnel, setIisShowPAnel] = useState(false)
  const [navigationData, setNavigationData] = useState([]);// БД з навігацією
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();
  let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);
  let collection = 'navigation';
  // const data = useSelector(state => state.navigation.navigation)
  let data = [
    {
      text: `main`, isUppercase: true, isFooter: true, path: '/', priority: 1, isHeader: true, id: 1111111
    },
    {
      text: `blog`, isUppercase: true, isFooter: true, path: '/blog', priority: 1, isHeader: true, id: 2
    }
  ]
  useEffect(() => {
    //адаптивна панель меню при загрузці
    if (document.documentElement.clientWidth < WIDTH_MONITOR) {
      setIisShowPAnel(true)
    }
    else {
      setIisShowPAnel(false)
    }
    //адаптивна панель меню при загрузці

    // getAllDocuments_Firebase(collection).then((resp) => {
    //   setNavigationData(resp);//отримуєм БД з навігацією
    //   dispatch({ type: UPLOAD_NAVIGATION, payload: resp })
    // })

    setNavigationData(data);
    dispatch({ type: UPLOAD_NAVIGATION, payload: data })
  }
    , [pushForUseEffectUpdate]);

  //адаптивна панель меню при зміні розміру вікна
  window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < WIDTH_MONITOR) {
      setIisShowPAnel(true)
    }
    else {
      setIisShowPAnel(false)
    }
  })


  function modalCall() {
    dispatch({ type: SHOW_MODAL });
  }

  //адаптивне меню, ховаєм в кнопку нав
  return (
    <> <div id="addnew"><button onClick={modalCall}>add new</button></div>
      <nav className="navigation">
        {navigationData.map((element) => {
          return (
            <NavigationItem data={element} collection={collection}
            />
          )
        })
        }
      </nav>
      <Modal  >
        <NavigationEditor />
      </Modal>
    </>
  );
};

export default Navigation;