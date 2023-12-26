import Navigation from "../Navigation";
import "./header.css";
import Logotype from '../Logotype/Logotype';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="button-menu hidden">
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                    <div className="stroke"></div>
                </div>
                <Logotype />
                <Navigation isFooter={false} />

            </div>

        </header>



    )
};

export default Header;