
import Input from "../Input";
import { useState} from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import { addDocumentToDB_Firebase,setDocForID } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { PUSH_USEEFFECT_UPDATE } from "../../../../constants/actions";
import ChipBox from "../ChipBox/ChipBox";

const CategoryEditor = ({ data, showModalDeleteQuestion, collection, setShowModal }) => {
	const categoriesList = useSelector(state => state.uploadCategories.uploadCategories);

	const [title, setTitle] = useState(data?.title || undefined);
	const [priority, setPriority] = useState(data?.priority || undefined);
	const [path, setPath] = useState(data?.path || undefined);
	const [description, setDescription] = useState(data?.description || undefined);
	const [keywords, setKeywords] = useState(data?.keywords || undefined);
	const [parentCategory, setParentCategory] = useState(data?.parentCategory || []);
	let [dateOfCreate, setDateOfCreate] = useState(data?.dateOfCreate || undefined);
	let [dateOfUpdate, setDateOfUpdate] = useState(data?.dateOfUpdate || undefined);
	const [titleChildCategories, setTitleChildCategories] = useState(data?.childCategories || []);
	const [imgUrl, setImgUrl] = useState(data?.imgUrl || undefined);
	let dispatch = useDispatch()

	function onAddDataList() {
		const dataList = {// об'єкт для додавання в БД
			title, description, keywords, parentCategory, childCategories:titleChildCategories, path, priority, dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), dateOfUpdate: new Date().toUTCString(), imgUrl
		};
		addDocumentToDB_Firebase(collection, dataList)
		dispatch({ type: PUSH_USEEFFECT_UPDATE });
		setShowModal(false);

	}
	
	function onSetDataList() {
		let arrTitleCategories=[];
		titleChildCategories.map((el) => {
			for (let index = 0; index < categoriesList.length; index++) {
				
			   if (categoriesList[index].title == el) {
				arrTitleCategories.push(categoriesList[index].id)
			   }
			}
		 })
		const dataList = {// об'єкт для оновлення в БД
			title, description, keywords, parentCategory, childCategories:arrTitleCategories, path, priority, dateOfUpdate: new Date().toUTCString(), dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), imgUrl
		};	 
		setDocForID(collection, data.id, dataList)
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

	const onGetKeywords = (value) => {
		setKeywords(value);
	}
	const onGetDescription = (value) => {
		setDescription(value);
	}

	const onGetDateOfCreate = (value) => {
		setDateOfCreate(value);
	}
	const onGetDateOfUpdate = (value) => {
		setDateOfUpdate(value);
	}
	const onGetImgUrl = (value) => {
		setImgUrl(value);
	}

	return (
		<PageWrapper>
			<div className={'add-new-category'}>
				<p>Усі поля обов'язкові для заповнення</p>
				<div className={"add-new-category-panel"}>
					<Input type={'text'} label={`Назва категорії `} onChangeFunction={onGetName} value={title} />
					<Input type={'text'} label={`Закінчення посилання path (унікальне поле латинськими літерами): `} onChangeFunction={onGetpath} value={path} />
					<Input type={'number'} label={`Порядковий номер виведення: `} onChangeFunction={onGetpriority} value={priority} />
					<Input type={'text'} label={`Ключові слова (через кому): `} onChangeFunction={onGetKeywords} value={keywords} />
					<div className="input">
						<label >Опис категорії (description): </label>
						<textarea onChange={(event) => {
											onGetDescription(event.target.value)
										}} value={description} >
						</textarea>
					</div>
					<Input type={'text'} label={`Посилання на картинку: `} onChangeFunction={onGetImgUrl} value={imgUrl} />
					<Input type={'text'} label={`Створено: `} onChangeFunction={onGetDateOfCreate} value={dateOfCreate} disabled={`disabled`} />
					<Input type={'text'} label={`Внесено зміни: `} onChangeFunction={onGetDateOfUpdate} value={dateOfCreate} disabled={`disabled`} />
					<ChipBox titleChildCategories={titleChildCategories} setTitleChildCategories={setTitleChildCategories}/>
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