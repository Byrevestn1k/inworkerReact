
import './adaptiveNavButton.css'
const AdaptiveNavButton = ({onClick}) => {

	function onClickNavButtonHendler (){
		onClick(false)//перемикач для кнопки-нав/звичайною навігацією 
	}
	return 	(
		<div onClick={onClickNavButtonHendler} className="button-menu">
            <div className="stroke"></div>
            <div className="stroke"></div>
            <div className="stroke"></div>
        </div>
	)
}

export default AdaptiveNavButton;
