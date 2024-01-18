import Input from "../Input";
import styles from './editorOfNavigation.css'
import { useState, useContext } from 'react';
import { createRequestPath } from "../../../helpers/helpers";
import { CARTEGORIES_ADD_ENDPOINT } from "../../../constants/endpoints";
import Categories from "../Categories";
import PageWrapper from "../PageWrapper";
import { v4 as uuidv4 } from 'uuid'; 
import {ChangeIdContext} from "../../App"
import { useSelector } from "react-redux";
import { counterReducer } from "../../reducers/counterReducer";
import { DECREMENT, INCREMENT } from "../../constants/actions";



const EditorOfNavigation = () => {
	let {refetchId, setRefetchId}=useContext(ChangeIdContext) 
	const {count} = useSelector(state=>state.counter)
	const [title, settitle] = useState();
	const [image, setImage] = useState();
	const [priority, setpriority] = useState();
	const [urlSlug, seturlSlug] = useState();
	const [redClassFlag, setredClassFlag] = useState(false);

	const onSubmitDataToApi = (category) => {
		const apiEndpoint = createRequestPath(CARTEGORIES_ADD_ENDPOINT);
		fetch(apiEndpoint, {
			method: "POST",
			body: JSON.stringify(category),
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => {
				console.log('response => ', resp);
				if (resp.status) {
					setRefetchId(uuidv4())	
                }
			})
	}

	function onAddcategory() {
		const category = {
			title,
			image,
			priority,
			urlSlug,
		};
		if (category.title && category.image && category.priority) {
			settitle(``);
			setImage('');
			setpriority('');
			seturlSlug('');
			setredClassFlag(false)
			onSubmitDataToApi(category)
		
		}
		else {
			setredClassFlag(true)
		}
	}

	const onGetName = (value) => {
		settitle(value)
	};

	const onGetImage = (value) => {
		setImage(value)
	}

	const onGetpriority = (value) => {
		setpriority(value)
	}
	const onGeturlSlug = (value) => {
		seturlSlug(value)
	};

	return (
		<PageWrapper>
			<h1>{count}</h1>
			<div className={styles['add-new-category']}>
				{
				 	<h2>Add new category</h2>
				}
				<div className={styles["add-new-category-panel"]}>
					<Input classNameFlag={redClassFlag} label="name: " placeholder="Enter category's name" onChangeFunction={onGetName} value={title} />
					<Input classNameFlag={redClassFlag} label="image: " placeholder="Enter category's image url" onChangeFunction={onGetImage} value={image} />
					<Input classNameFlag={redClassFlag} label="priority: " placeholder="Enter category's priority" onChangeFunction={onGetpriority} type='number' value={priority} />
					<Input label="urlSlug: " placeholder="Enter category's urlSlug" onChangeFunction={onGeturlSlug} value={urlSlug} />
				</div>
				<button className={styles["add-category-item"]} type="button" onClick={onAddcategory}>add new category</button>
				<hr />
				<Categories flagReverse={true} buttonFlag={true}/>
			</div >
		</PageWrapper>
	);
};

export default EditorOfNavigation;