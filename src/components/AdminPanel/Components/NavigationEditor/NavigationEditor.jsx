
import Input from "../Input";
import styles from './navigationEditor.css'
import { useState, useContext, useEffect } from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import { addDocumentToDB_Firebase, getAllDocuments_Firebase } from "../../helpers";

const NavigationEditor = ({ data }) => {
	let collectionTitle = `navigation`;// в яку колекцію БД додаєм

	const [text, setText] = useState(data.text || undefined);
	const [priority, setPriority] = useState(data.priority || undefined);
	const [path, setPath] = useState(data.path || undefined);
	const [isUppercasetext, setIsUppercasetext] = useState(data.isUppercasetext || false);
	const [isFooter, setIsFooter] = useState(data.isFooter || (false));
	const [isHeader, setIsHeader] = useState(data.isHeader || false);


	// useEffect(()=>{
	// getAllDocuments_Firebase(collectionTitle).then(resp=>	console.log(resp))
	// })

	function onAddDataList() {
		const dataList = {// об'єкт для додавання в БД
			text, isFooter, isHeader, path, priority, isUppercasetext,
		};
		addDocumentToDB_Firebase(collectionTitle, dataList)
		setText('');
		setIsFooter('');
		setPriority('');
		setPath('');

	}

	const onGetName = (value) => {
		setText(value)
	};

	const onGetisFooter = () => {
		let checkbox1 = document.querySelector(".is-footer-checkbox");
		!checkbox1.checked ? setIsFooter(false) : setIsFooter(true);
	}

	const onGetisHeader = () => {
		let checkbox1 = document.querySelector(".is-header-checkbox");
		!checkbox1.checked ? setIsHeader(false) : setIsHeader(true);
	}

	const onGetpriority = (value) => {
		setPriority(value)
	}

	const onGetpath = (value) => {
		setPath(value)
	};

	const onGetIsUppercasetext = () => {
		let checkbox1 = document.querySelector(".is-uppercase-checkbox");
		!checkbox1.checked ? setIsUppercasetext(false) : setIsUppercasetext(true);

	}

	function isChecked(data) {
		return data ? `checked` : null;
	}

	return (
		<PageWrapper>

			<div className={'add-new-category'}>


				<p>Усі поля обов'язкові для заповнення</p>

				<div className={"add-new-category-panel"}>
					<Input type={'text'} label={`Назва кнопки навігації: `} onChangeFunction={onGetName} value={text} />
					<Input type={'text'} label={`Закінчення посилання path (унікальне поле латинськими літерами): `} onChangeFunction={onGetpath} value={path} />
					<Input type={'number'} label={`Порядковий номер виведення): `} onChangeFunction={onGetpriority} value={priority} />
					<Input type={'checkbox'} className={'is-uppercase-checkbox'} label={`Відображати все великими літерами: `} onChangeFunction={onGetIsUppercasetext} name={`isUppercasetext`} checked={isChecked(isUppercasetext)} />
					<Input type={'checkbox'} className={'is-footer-checkbox'} label={`Відображати у футері сайту: `} onChangeFunction={onGetisFooter} name={`isFooter`} checked={isChecked(isFooter)} />
					<Input type={'checkbox'} className={'is-header-checkbox'} label={`Відображати у шапці сайту: `} onChangeFunction={onGetisHeader} name={`isHeader`} checked={isChecked(isHeader)} />
					<button className={"add-category-item"} type="button" onClick={onAddDataList}>Внести зміни</button>

				</div>


			</div >
		</PageWrapper>
	);
};

export default NavigationEditor;