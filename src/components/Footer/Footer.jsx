import Navigation from "../Navigation";
import { useState } from 'react';
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import "./footer.css";
import Logotype from '../Logotype/Logotype';
import PageWrapper from "../PageWrapper/PageWrapper";


const Footer = () => {
  
    return (	
        <footer>
            <PageWrapper>
                <div class="container">
                    <div class="corporation">
                        <p>2023 - <span class="this-year">{new Date().getFullYear()}</span></p>
                        <p>All rights reserved&#169;</p>
                        <p>Копирование информации без указания прямой ссылки на сайт <span class="this-site"><b>{ document.domain}</b></span> является
                            нарушением авторских прав.</p>
                    </div>
                    <Navigation isFooter={true}/>
                </div>
            </PageWrapper>
        </footer>
             
        
		
	)
};

export default Footer;