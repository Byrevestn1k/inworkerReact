
import { useDispatch } from 'react-redux'
import './adaptiveNavButtonCloce.css'
import { HIDE_MENU } from '../../constants/actions'
const AdaptiveNavButtonCloce = ({onClick, onClickClose}) => {
	let dispatch = useDispatch()
	function setOnClickNavCloseFlag (){
		onClick(false)//ховаєм Х 
		onClickClose(true)// показуєм кнопку-нав
		dispatch({ type: HIDE_MENU});//ховаємо меню категорій
	}
	return 	(
		<div onClick={setOnClickNavCloseFlag} className="button-close">
           
        </div>
	)
}

export default AdaptiveNavButtonCloce;
