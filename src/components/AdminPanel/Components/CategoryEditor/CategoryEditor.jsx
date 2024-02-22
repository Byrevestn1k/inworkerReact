
import Input from "../Input";
import styles from './categoryEditor.css'
import { useState, useContext, useEffect } from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import { addDocumentToDB_Firebase, getAllDocuments_Firebase, setDocForID } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MODAL, PUSH_USEEFFECT_UPDATE } from "../../../../constants/actions";

const CategoryEditor = ({ data, showModalDeleteQuestion, collection, setShowModal }) => {

	const [title, setTitle] = useState(data?.title || undefined);
	const [priority, setPriority] = useState(data?.priority || undefined);
	const [path, setPath] = useState(data?.path || undefined);
	const [description, setDescription] = useState(data?.description || undefined);
	const [keywords, setKeywords] = useState(data?.keywords || undefined);
	const [parentCategory, setParentCategory] = useState(data?.parentCategory || []);
	const [childCategories, setChildCategories] = useState(data?.childCategories || []);
    let [dateOfCreate, setDateOfCreate] = useState(data?.dateOfCreate || undefined);
    let [dateOfUpdate, setDateOfUpdate] = useState(data?.dateOfUpdate || undefined);

	
	const [imgUrl, setImgUrl] = useState(data?.imgUrl || undefined);

	let dispatch = useDispatch()

	function onAddDataList() {
		const dataList = {// об'єкт для додавання в БД
			title, description, keywords, parentCategory, childCategories, path, priority,  dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), dateOfUpdate: new Date().toUTCString(), imgUrl
		};
		addDocumentToDB_Firebase(collection, dataList)
		setTitle('');
		setKeywords('');
		setPriority('');
		setPath('');
		setDescription('');
		setParentCategory('');
		setChildCategories('');
		setDateOfCreate('');
		setDateOfUpdate('');
		setImgUrl('');
		dispatch({ type: PUSH_USEEFFECT_UPDATE });
		setShowModal(false);

	}
	function onSetDataList() {
		const dataList = {// об'єкт для оновлення в БД
			title, description, keywords, parentCategory, childCategories, path, priority, dateOfUpdate: new Date().toUTCString(), dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), imgUrl
		};

		setDocForID(collection, data.id, dataList)
		setTitle('');
		setPriority('');
		setPath('');
		setKeywords('');
		setDescription('');
		setParentCategory('');
		setChildCategories('');
		setDateOfCreate('');
		setDateOfUpdate('');
		setImgUrl('');
		dispatch({ type: PUSH_USEEFFECT_UPDATE });
		setShowModal(false);

	}
	const onGetName = (value) => {
		setTitle(value)
	};

	const onGetpriority = (value) => {
		setPriority(value)
	}

	const onGetpath = (value) => {
		setPath(value)
	};

	const onGetKeywords = (value) =>{
		setKeywords(value);
	}
	const onGetDescription = (value) =>{
		setDescription(value);
	}
	const onGetCategory = (value) =>{
		setParentCategory(value);
	}
	const onGetchildCategories = (value) =>{
		setChildCategories(value);
	}
	const onGetDateOfCreate = (value) =>{
		setDateOfCreate(value);
	}
	const onGetDateOfUpdate = (value) =>{
		setDateOfUpdate(value);
	}
	const onGetImgUrl = (value) =>{
		setImgUrl(value);
	}


	return (
		<PageWrapper>

			<div className={'add-new-category'}>


				<p>Усі поля обов'язкові для заповнення</p>

				<div className={"add-new-category-panel"}>
					<Input type={'text'} label={`Назва категорії `} onChangeFunction={onGetName} value={title} />
					<Input type={'text'} label={`Закінчення посилання path (унікальне поле латинськими літерами): `} onChangeFunction={onGetpath} value={path}/>
					<Input type={'number'} label={`Порядковий номер виведення: `} onChangeFunction={onGetpriority} value={priority}/>
					<Input type={'text'}  label={`Ключові слова (через кому): `} onChangeFunction={onGetKeywords}  value={keywords}/>
					<Input type={'text'} label={`Опис категорії (description): `} onChangeFunction={onGetDescription}  value={description}/>
					<Input type={'text'}  label={`Посилання на картинку: `} onChangeFunction={onGetImgUrl}  value={imgUrl}/>
					<Input type={'text'} label={`Створено: `} onChangeFunction={onGetDateOfCreate}  value={dateOfCreate} disabled={`disabled`}/>
					<Input type={'text'}  label={`Внесено зміни: `} onChangeFunction={onGetDateOfUpdate}  value={dateOfCreate} disabled={`disabled`}/>
					
					{showModalDeleteQuestion ?
						<button className={"add-category-item"} type="button" onClick={onSetDataList}>Внести зміни</button> 
						:
						<button className={"add-category-item"} type="button" onClick={onAddDataList}>Додати категорію</button>}
					</div>


			</div >
		</PageWrapper>
	);
};

export default CategoryEditor;