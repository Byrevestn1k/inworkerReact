
import Input from "../Input";
import styles from './navigationEditor.css'
import { useState, useContext } from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import { addDocumentToDB_Firebase } from "../../helpers";




const NavigationEditor = () => {
	let collectionTitle = `navigation`;// в яку колекцію БД додаєм
	const [text, setText] = useState();
	const [isFooter, setIsFooter] = useState(true);
	const [priority, setPriority] = useState();
	const [path, setPath] = useState();
	const [isUppercasetext, setIsUppercasetext] = useState(true);
	const [isCategiries, setIsCategiries] = useState(true);
	const [redClassFlag, setredClassFlag] = useState(false);
	const dataList = {// об'єкт для додавання в БД
		text, isFooter, path, priority, isUppercasetext, isCategiries,
	};
	let keys = Object.keys(dataList);//масив з назвами ключів

	function onAddDataList() {

		console.log(dataList);
		setText(``);
		setIsFooter('');
		setPriority('');
		setPath('');
		setredClassFlag(false)
		addDocumentToDB_Firebase(collectionTitle, dataList)


	}

	const onGetName = (value) => {
		setText(value)
	};

	const onGetisFooter = (value) => {
		setIsFooter(value)
	}

	const onGetpriority = (value) => {
		setPriority(value)
	}
	const onGetpath = (value) => {
		setPath(`/` + value)
	};
	const onGetIsUppercasetext = (value) => {
		setIsUppercasetext(value)
	}
	const onGetIsCategiries = (value) => {
		setIsCategiries(value)
	}
	return (
		<PageWrapper>

			<div className={styles['add-new-category']}>

				<h2>{`Add new ${collectionTitle}  button`}</h2>
				<p>Усі поля обов'язкові для заповнення</p>

				<div className={styles["add-new-category-panel"]}>

					{
						keys.map((el) => {

							let swithOfFuncOnChange = (a) => {

								switch (el) {
									case 'isFooter':
										return onGetisFooter
										break;
									case 'isUppercasetext':
										return onGetIsUppercasetext
										break;
									case 'isCategiries':
										return onGetIsCategiries
										break;
									case 'priority':
										return onGetpriority
										break;
									case 'text':
										return onGetName;
										break;
									case 'path':
										return onGetpath
										break;
									default:
										break;
								}
							}
							let swithOfFuncValue = () => {
								switch (el) {
									case 'isFooter':
										return `isFooter`
									case 'isUppercasetext':
										return `isUppercasetext`
									case 'isCategiries':
										return `isCategiries`
									case 'priority':
										return `priority`
									case 'text':
										return `text`
									case 'path':
										return `path`
									default:
										break;
								}
							}
							let swithOfFuncOnChangReturn = swithOfFuncOnChange();

							if (el == `isFooter` || el == `isUppercasetext` || el == `isCategiries`) {

								return <div>
									<Input type={'radio'} checked={`checked`} label={`${el} true: `} onChangeFunction={swithOfFuncOnChangReturn} value={true} name={swithOfFuncValue()} /><br></br>
									<Input type={'radio'} label={`false: `} onChangeFunction={swithOfFuncOnChangReturn} value={false} name={swithOfFuncValue()} />
								</div>
							}

							return <div>

								<Input type={el == `priority` ? 'number' : `text`} label={`${el == `path` ? el + `/` : el} : `} placeholder={`Enter name of new ${el} element`} onChangeFunction={swithOfFuncOnChangReturn} />
							</div>
						})

					}
				</div>
				<button className={styles["add-category-item"]} type="button" onClick={onAddDataList}>add new {collectionTitle}</button>
				<hr />
			</div >
		</PageWrapper>
	);
};

export default NavigationEditor;