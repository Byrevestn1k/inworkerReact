import Navigation from "../Navigation";
import "./header.css";
import Logotype from '../Logotype/Logotype';
import PageWrapper from "../PageWrapper/PageWrapper";

const Header = () => {
    return (
        
            <header>
                <PageWrapper>
                <div className="container">
                    <div className="button-menu hidden">
                        <div className="stroke"></div>
                        <div className="stroke"></div>
                        <div className="stroke"></div>
                    </div>
                    <Logotype />
                    <Navigation isFooter={false} />
                </div>
                </PageWrapper>
            </header>
        


    )
};

export default Header;