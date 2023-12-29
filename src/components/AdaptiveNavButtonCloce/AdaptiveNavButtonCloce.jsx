
import './adaptiveNavButtonCloce.css'
const AdaptiveNavButtonCloce = ({onClick, onClickClose}) => {

	function setOnClickNavCloseFlag (){
		onClick(false)//ховаєм Х 
		onClickClose(true)// показуєм кнопку-нав
	}
	return 	(
		<div onClick={setOnClickNavCloseFlag} className="button-close">
           
        </div>
	)
}

export default AdaptiveNavButtonCloce;
