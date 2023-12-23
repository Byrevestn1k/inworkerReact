// import Navigation from "../Navigation";
import inworker_shapka from '../../images/header/inworker_shapka.jpg';
import "./header.css";

import PageWrapper from "../PageWrapper";
const Header = () => {

	return (
		
			<PageWrapper>
            <header>
                    <div class="container">
                        <div class="button-menu hidden">
                            <div class="stroke"></div>
                            <div class="stroke"></div>
                            <div class="stroke"></div>
                        </div>
                        <div class="logotype">
                            <img src={inworker_shapka} alt="" />
                        </div>
                        <div class="header">
                            <div class="main"><a href="">Главная</a></div>
                            <div class="blog"><a href="">блог</a></div>
                            <div class="map"><a href="">Mini games</a></div>
                            <div class="services"><a href="">Мои услуги</a></div>
                        </div>
                    </div>
                </header>
             
			</PageWrapper>
		
	)
};

export default Header;