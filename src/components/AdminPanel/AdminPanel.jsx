import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
import { DataContext } from "../../App";
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';//логотип
import MenuPanel from "./Components/MenuPanelAdmin";
import { getAllDocuments_Firebase, getAllNamesOfCollections } from "./helpers";
import PageWrapper from "../PageWrapper/PageWrapper";
import NavigationEditor from "./Components/NavigationEditor/NavigationEditor";
import { Route, Routes, useNavigate } from "react-router";
import { NAVIGATION_PATH, POST_PATH } from "./Components/constants/pathNames";
import Navigation from "./Components/Navigation/Navigation";
import { Editor } from "draft-js";
import TextEditor from "./Components/TextEditor";



function AdminPanel() {

  let [categoriesList, setCategriesList] = useState([
    { title: `navigation`, urlSlug: 'navigation' },
    { title: `post`, urlSlug: 'post' }
  ])//всі категорії
  let collection = `admin-menu-panel`;
  let { setAdminflag } = useContext(DataContext)//перемикач адмінка/сайт

  const navigator = useNavigate();

  let logoWidth = 50;

  // useEffect(() => {
  //   getAllDocuments_Firebase(collection).then((resp => {
  //     setCategriesList(resp)
  //   }));

  // }, [])



  useEffect(() => {
    //getDocumentFromDB_Firebase(dataBaseCollection, document){// отримати елемент з колекції БД
    //addDocumentToDB_Firebase(dataBaseCollection, object)// створити документ в колекції елемент з колекції БД
  })
  function setAdminflagHandler() {//перемикає адмінпанель
    setAdminflag(false);
    navigator(`/`)
  }

  return (
    <PageWrapper>

      <div className="admin-panel">
        <div className="admin-header">

          <div className="admin-header-name">
            <div >

              <img src={inworker_shapka_mini} width={logoWidth} alt="" />
            </div>
            Adminpanel of <span>{document.domain}</span> site</div>
          <button onClick={setAdminflagHandler}>Close</button>

        </div>
        <div className="admin-panel_main">
          <div className="admin-panel_menu">
            <MenuPanel dataBD={categoriesList} />
          </div>
          <div className="admin-panel_main_main">
            <Routes>
              <Route path={NAVIGATION_PATH} element={<Navigation />} />
              <Route path={POST_PATH} element={<TextEditor />} />
            </Routes>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AdminPanel;
