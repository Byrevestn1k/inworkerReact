import Navigation from "../Navigation";
import "./header.css";
import Logotype from '../Logotype/Logotype';
import PageWrapper from "../PageWrapper/PageWrapper";
import AdaptiveNavButton from "../AdaptiveNavButton/AdaptiveNavButton"
import { useEffect, useState } from "react";
import AdaptiveNavButtonCloce from "../AdaptiveNavButtonCloce/AdaptiveNavButtonCloce";
import { WIDTH_MONITOR } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
const Header = () => {
    let [buttonNavigation, setButtonNavigation] = useState(false);// перемикач між кнопкою-нав та навігацією
    let [onClickNavCloseFlag, setOnClickNavCloseFlag] = useState(true);//перемикач між кнопкою-нав та кнопкою Х
    let dispatch = useDispatch()
     //адаптивний хеадер при загрузці
       useEffect(()=>{
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
            setButtonNavigation(true);
            setOnClickNavCloseFlag(false)
            }
        else {
            setButtonNavigation(false);
            setOnClickNavCloseFlag(false)
        }
       }, [])
    //адаптивний хеадер при загрузці

    //адаптивний хеадер при зміні розміру вікна
        window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth < WIDTH_MONITOR) {
            setButtonNavigation(true);
            setOnClickNavCloseFlag(false)
            }
        else {
            setButtonNavigation(false);
             setOnClickNavCloseFlag(false)
        }
        })

    return (
            <header>
                <PageWrapper key={uuidv4()}>
                <div className="container">
                    <Logotype key={uuidv4()}/>
                    {buttonNavigation?
                    <AdaptiveNavButton key={uuidv4()} onClick={setButtonNavigation} onClickClose={setOnClickNavCloseFlag}/>:
                    <>
                    <div id="firebaseui-auth-container"></div>
                    <Navigation key={uuidv4()} isFooterRender={false} />
                    
                    {onClickNavCloseFlag?
                    <AdaptiveNavButtonCloce key={uuidv4()} onClick={setOnClickNavCloseFlag}  onClickClose={setButtonNavigation}/>:
                    null}
                    </>}
                </div>
                </PageWrapper>
            </header>
        )
};

export default Header;