import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
import { DataContext } from "../../App";
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';//логотип
import MenuPanel from "./Components/MenuPanelAdmin";
import { getAllDocuments_Firebase, } from "./helpers";
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes, useNavigate } from "react-router";
import { IMAGES_PATH, NAVIGATION_PATH, PAGES_EDITOR_PATH, PAGES_PATH, POST_PATH } from "./Components/constants/pathNames";
import Navigation from "./Components/Navigation/Navigation";
import { Editor } from "draft-js";
import TextEditor from "./Components/TextEditor";
import Pages from "./Components/Pages";
import { v4 as uuidv4 } from 'uuid';
import Images from "./Components/Images/ImagesAdd";
import ImagesAdd from "./Components/Images/ImagesAdd";
import { SignOut } from "../../auth/action/auth.action";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Test from "./Test";
import { CATEGIRIES_PATH } from "../../constants/pathNames";
import Categories from "./Components/Categories/Categories";

function AdminPanel() {
  const { isLoggedIn, loading } = useSelector((state) => state.authReducer);
  let [categoriesList, setCategriesList] = useState([
    { title: `navigation`, urlSlug: 'navigation' },
    { title: `post`, urlSlug: 'post' }
  ])//всі категорії
  let collection = `admin-menu-panel`;
  let dispath = useDispatch()
  const navigator = useNavigate();
  let logoWidth = 50;

  useEffect(() => {
    if (isLoggedIn) {
      navigator("/admin");
    } else navigator("/auth");
    getAllDocuments_Firebase(collection).then((resp => {
      setCategriesList(resp)
    }));

  }, [isLoggedIn])



  useEffect(() => {
    //getDocumentFromDB_Firebase(dataBaseCollection, document){// отримати елемент з колекції БД
    //addDocumentToDB_Firebase(dataBaseCollection, object)// створити документ в колекції елемент з колекції БД
  })
  function setAdminflagHandler() {//перемикає адмінпанель
    SignOut(dispath);
    navigator(`/`);
  }

  return (
    <PageWrapper>

      <div className="admin-panel">
        <div className="admin-header">

          <div className="admin-header-name">
            <div className="admin-panel_menu">
              <MenuPanel key={uuidv4()} dataBD={categoriesList} />
            </div>
            <div >

              <Link to={`/`}><img src={inworker_shapka_mini} width={logoWidth} alt="" /></Link>
            </div>
            Adminpanel of <span>{document.domain}</span> site</div>
          <LogoutIcon onClick={setAdminflagHandler} fontSize="large" sx={{ color: `black`, cursor: 'pointer' }} />


        </div>
        <div className="admin-panel_main">
          <div className="admin-panel_main_main">
            <Routes>
              <Route path={NAVIGATION_PATH} element={<Navigation />} />
              <Route path={POST_PATH} element={<TextEditor />} />
              <Route path={PAGES_PATH} element={<Pages />} />
              <Route path={PAGES_EDITOR_PATH} element={<TextEditor />} />
              <Route path={IMAGES_PATH} element={<ImagesAdd />} />
              <Route path={CATEGIRIES_PATH} element={<Categories />} />
              <Route path={'posts'} element={<Test />} />
            </Routes>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AdminPanel;
