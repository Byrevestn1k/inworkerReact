import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../constants/constants";
import { getAllDocuments_Firebase } from "../../helpers";
import Modal from "../Modal";
import NavigationEditor from "../NavigationEditor/NavigationEditor";

const Navigation = ({ isFooter }) => {


  //адаптивне меню, ховаєм в кнопку нав
  let [isShowPAnel, setIisShowPAnel] = useState(false)
  const [navigationData, setNavigationData] = useState([]);// БД з навігацією
  const [showModal, setShowModal] = useState(false)

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
    , [navigationData]);

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
    setShowModal(true)
    console.log(showModal);
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
      <Modal showModal={showModal} openModalFunc={setShowModal} >
        <NavigationEditor />
      </Modal>
    </>
  );
};

export default Navigation;
