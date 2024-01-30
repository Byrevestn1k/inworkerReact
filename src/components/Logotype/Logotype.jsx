// import Navigation from "../Navigation";
import { useEffect, useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';
import "./logotype.css";
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../constants/pathNames';
import { useSelector } from 'react-redux';

const Logotype = () => {
    let  [width, setWidth]= useState()
    let logo = useSelector(state=>state.logoChanger.logoChanger)
    let  [logotype, setLogotype]= useState(inworker_shapka);

    useEffect(()=>{
        if (document.documentElement.clientWidth < 535) {
            setLogotype(inworker_shapka_mini);
            }
        else {
            setLogotype(inworker_shapka);
        }

       }, [])
   

    //адаптивний хеадер при загрузці

    //адаптивний хеадер при зміні розміру вікна
        window.addEventListener("resize", (e) => {
        if (document.documentElement.clientWidth < 535) {
            setLogotype(inworker_shapka_mini);
        }
         else {
            setLogotype(inworker_shapka);
        }
        })
        
     //адаптивний хеадер при зміні розміру вікна
    return (	
        <Link  to={HOME_PATH}>
            <div className="logotype">
                <img src={logotype} alt="" />
            </div>
        </Link>
	)
};

export default Logotype;