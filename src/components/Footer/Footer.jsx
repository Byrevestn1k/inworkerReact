import Navigation from "../Navigation";
import "./footer.css";
import PageWrapper from "../PageWrapper/PageWrapper";


const Footer = () => {
  
    return (	
        <footer>
            <PageWrapper>
                <div className="container">
                    <div className="corporation">
                        <p>2023 - <span className="this-year">{new Date().getFullYear()}</span></p>
                        <p>All rights reserved&#169;</p>
                        <p>Копирование информации без указания прямой ссылки на сайт <span className="this-site"><b>{ document.domain}</b></span> является
                            нарушением авторских прав.</p>
                    </div>
                    <Navigation isFooterRender={true}/>
                </div>
            </PageWrapper>
        </footer>
             
        
		
	)
};

export default Footer;