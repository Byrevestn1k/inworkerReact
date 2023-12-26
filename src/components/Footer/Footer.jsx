import Navigation from "../Navigation";
import { useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import "./footer.css";
import Logotype from '../Logotype/Logotype';


const Footer = () => {

    
    
    return (	
        <footer>
        <div class="container">
            <div class="corporation">
                <p>2022 - <span class="this-year">{new Date().getFullYear()}</span></p>
                <p>All rights reserved&#169;</p>
                <p>Копирование информации без указания прямой ссылки на сайт <span class="this-site">{thisSite.textContent = document.domain}</span> является
                    нарушением авторских прав.</p>
            </div>
            <div class="header">
               
            </div>
        </div>
        </footer>
             
        
		
	)
};

export default Footer;