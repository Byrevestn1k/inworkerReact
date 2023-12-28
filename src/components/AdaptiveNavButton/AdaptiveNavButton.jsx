import { useState } from 'react';
import './adaptiveNavButton.css'
import { createPortal } from "react-dom";


let portalElement = document.querySelector('#portal')

const AdaptiveNavButton = ({onClick}) => {
	let [closeButton, setCloseButton] = useState(false);

	// let [flagshowMessageDelete, setFlagshowMessageDelete] = useState(true)
	// const onCloseAdaptiveNavButton = () => {
	// 	setDeleteCategory(false)
	// }
	function onClickNavButtonHendler (){
		onClick(false)
		setCloseButton(true)
	}

	function onClickNavButtonCloseHendler(){
		setCloseButton(false)
	}

	let navButton = (
		<div onClick={onClickNavButtonHendler} className="button-menu">
            <div className="stroke"></div>
            <div className="stroke"></div>
            <div className="stroke"></div>
        </div>
	)

	let closeNavButton = (
			<div onClick={onClickNavButtonCloseHendler} className="button-close">
	
			</div>
	)
	let element = closeButton?closeNavButton:navButton;
	return 	(
		element
	)
}

export default AdaptiveNavButton;
