
import "./main.css";
import PageWrapper from "../PageWrapper/PageWrapper";
import { Route, Routes } from "react-router";
import MenuPanel from "../MenuPanel//MenuPanel";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { getAllDocuments_Firebase } from "../AdminPanel/helpers";
import Page from "../Page/Page";
import { UPLOAD_CATEGIRIES, UPLOAD_NAVIGATION } from "../../constants/actions";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    let [categoriesList, setCategriesList] = useState([]);
    let [navigationsList, setNavigationsList] = useState([]);
    let collectionCategories = `categories`;
    let collectionNavigations = `navigation`;
    let dispatch = useDispatch()
    useEffect(() => {
        getAllDocuments_Firebase(collectionCategories).then((resp => {
            setCategriesList(resp);
            
            dispatch({ type: UPLOAD_CATEGIRIES, payload: resp });
        }))
        getAllDocuments_Firebase(collectionNavigations).then((resp => {
            setNavigationsList(resp)
            dispatch({ type: UPLOAD_NAVIGATION, payload: resp });
        }))
    }, [])

    return (
        <div  className="main" key={uuidv4()}>
            <PageWrapper key={uuidv4()}>
                <MenuPanel dataBD={categoriesList} />
                <div className="main-information">
                    <div className="content">
                        <Routes>
                            {
                                navigationsList.map((el) => {
                                    return <Route path={`/${el.path}`} element={<Page data={el} />} />
                                })
                            }
                        </Routes>
                    </div>
                    <div>
                        <Comments />
                    </div>
                </div>
            </PageWrapper>
        </div>
    )
};

export default Main;