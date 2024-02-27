
import Input from "../Input";
import styles from './categoryEditor.css'
import { useState, useContext, useEffect } from 'react';
import PageWrapper from "../../../PageWrapper/PageWrapper";
import { addDocumentToDB_Firebase, getAllDocuments_Firebase, setDocForID } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { HIDE_MODAL, PUSH_USEEFFECT_UPDATE } from "../../../../constants/actions";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const CategoryEditor = ({ data, showModalDeleteQuestion, collection, setShowModal }) => {
	const categoriesList = useSelector(state => state.uploadCategories.uploadCategories);

	const [title, setTitle] = useState(data?.title || undefined);
	const [priority, setPriority] = useState(data?.priority || undefined);
	const [path, setPath] = useState(data?.path || undefined);
	const [description, setDescription] = useState(data?.description || undefined);
	const [keywords, setKeywords] = useState(data?.keywords || undefined);
	const [parentCategory, setParentCategory] = useState(data?.parentCategory || []);
	const [childCategories, setChildCategories] = useState(data?.childCategories || []);
	let [dateOfCreate, setDateOfCreate] = useState(data?.dateOfCreate || undefined);
	let [dateOfUpdate, setDateOfUpdate] = useState(data?.dateOfUpdate || undefined);
	const [personName, setPersonName] = useState([]);
	const [checkedCategories, setCheckedCategories] = useState([]);
	const theme = useTheme();
	const [imgUrl, setImgUrl] = useState(data?.imgUrl || undefined);
	let dispatch = useDispatch()

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		console.log(event);
		setPersonName(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
		setCheckedCategories(...checkedCategories, value);

	};
	console.log(`childCategories => `, childCategories);
	const ITEM_HEIGHT = 28;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	// const shortCategoryList = [];
	// categoriesList.map((el)=>{
	// 	shortCategoryList.push({
	// 		title:el.title,
	// 		id:el.id,
	// 		path:el.path
	// 	})
	// })

	function getStyles(name, personName, theme) {

		return {
			fontWeight:
				personName.indexOf(name) === -1
					? theme.typography.fontWeightRegular
					: theme.typography.fontWeightMedium,
		};
	}




	function onAddDataList() {
		const dataList = {// об'єкт для додавання в БД
			title, description, keywords, parentCategory, childCategories, path, priority, dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), dateOfUpdate: new Date().toUTCString(), imgUrl
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

	const onGetKeywords = (value) => {
		setKeywords(value);
	}
	const onGetDescription = (value) => {
		setDescription(value);
	}
	const onGetCategory = (value) => {
		setParentCategory(value);
	}
	const onGetchildCategories = (value) => {
		setChildCategories(value);
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

	console.log(`personName = > `, personName);
	return (
		<PageWrapper>
			<div className={'add-new-category'}>
				<p>Усі поля обов'язкові для заповнення</p>
				<div className={"add-new-category-panel"}>
					<Input type={'text'} label={`Назва категорії `} onChangeFunction={onGetName} value={title} />
					<Input type={'text'} label={`Закінчення посилання path (унікальне поле латинськими літерами): `} onChangeFunction={onGetpath} value={path} />
					<Input type={'number'} label={`Порядковий номер виведення: `} onChangeFunction={onGetpriority} value={priority} />
					<Input type={'text'} label={`Ключові слова (через кому): `} onChangeFunction={onGetKeywords} value={keywords} />
					<Input type={'text'} label={`Опис категорії (description): `} onChangeFunction={onGetDescription} value={description} />
					<Input type={'text'} label={`Посилання на картинку: `} onChangeFunction={onGetImgUrl} value={imgUrl} />
					<Input type={'text'} label={`Створено: `} onChangeFunction={onGetDateOfCreate} value={dateOfCreate} disabled={`disabled`} />
					<Input type={'text'} label={`Внесено зміни: `} onChangeFunction={onGetDateOfUpdate} value={dateOfCreate} disabled={`disabled`} />
					<FormControl sx={{ m: 2, width: 500 }}>
						<InputLabel>Батьківська категорія</InputLabel>
						<Select
							// labelId="demo-multiple-chip-label"
							id={"demo-multiple-chip"}
							multiple
							value={personName}
							onChange={handleChange}
							input={<OutlinedInput id="select-multiple-chip" label="Батьківська категорія" />}
							renderValue={(selected) => (
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.1 }}>
									{selected.map((value) => (
										<Chip key={value} label={value} />
									))}
								</Box>
							)}
							MenuProps={MenuProps}
							selected
						>
							{categoriesList.map((name) => (
								<MenuItem
									key={name.id}
									value={name.title}
									style={getStyles(name.title, personName, theme)}
									onClick={(e) => {

									}}
								>
									{name.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>

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