
import Input from "../Input";
import styles from './navigationEditor.css'
import { useState, useContext } from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import {addDocumentToDB_Firebase} from "../../helpers";




const NavigationEditor = () => {
	const [text, setText] = useState();
	const [isFooter, setIsFooter] = useState();
	const [priority, setPriority] = useState();
	const [path, setPath] = useState();
	const [isUppercasetext, setIsUppercasetext] = useState();
	const [isCategiries, setIsCategiries] = useState();
	const [redClassFlag, setredClassFlag] = useState(false);


	function onAddDataList() {
		const dataList = {
			text,isFooter,path,priority,isUppercasetext,isCategiries,	
		};
		if (dataList.text && dataList.isFooter && dataList.priority) {
			setText(``);
			setIsFooter('');
			setPriority('');
			setPath('');
			setredClassFlag(false)
			addDocumentToDB_Firebase(`navigation`, dataList)
		
		}
		else {
			setredClassFlag(true)
		}
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
		setPath(value)
	};

	return (
		<PageWrapper>
			
			<div className={styles['add-new-category']}>
				{
				 	<h2>Add new navigation button</h2>
				}
				<div className={styles["add-new-category-panel"]}>
					<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter category's name" onChangeFunction={onGetName} value={text} />
					<Input classNameFlag={redClassFlag} label="isFooter: " placeholder="Enter category's isFooter url" onChangeFunction={onGetisFooter} value={isFooter} />
					<Input classNameFlag={redClassFlag} label="priority: " placeholder="Enter category's priority" onChangeFunction={onGetpriority} type='number' value={priority} />
					<Input label="path: " placeholder="Enter category's path" onChangeFunction={onGetpath} value={path} />
				</div>
				<button className={styles["add-category-item"]} type="button" onClick={onAddDataList}>add new category</button>
				<hr />
			</div >
		</PageWrapper>
	);
};

export default NavigationEditor;