
import { useDispatch } from 'react-redux'
import './adaptiveNavButton.css'
import { SHOW_MENU } from '../../constants/actions'
const AdaptiveNavButton = ({onClick, onClickClose}) => {
    let dispatch = useDispatch()
	function onClickNavButtonHendler (){
		onClick(false)//перемикач для кнопки-нав/звичайною навігацією 
		onClickClose(true)
		dispatch({ type: SHOW_MENU });//ховаємо меню категорій
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
