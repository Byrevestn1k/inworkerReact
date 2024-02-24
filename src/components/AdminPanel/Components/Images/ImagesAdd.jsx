import { useEffect, useState } from "react";
import { addFileToFirebaseStorage } from "../../helperStorage";
import "./imagesAdd.css";
import { deleteObject, getDownloadURL,  getStorage, listAll, ref, updateMetadata } from "firebase/storage";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import {  PUSH_USEEFFECT_UPDATE } from "../../../../constants/actions";
import ImagesMetaData from "../ImagesMetaData/ImagesMetaData";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Button } from "@mui/material";
import { CardMedia } from '@mui/material';
const storage = getStorage();

const ImagesAdd = () => {
	let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	let dispatcher = useDispatch()
	let [inputFile, setInputFile] = useState()
	let [imageList, setImageList] = useState([]);
	let [isShowModal, setIsShowModal] = useState(false);
	let [switchParams, setSwitchParams] = useState(false);
	let images = 'images/';



	function getListOfImage() {//отримуєм список картинок з БД

		const listRef = ref(storage, 'images/');
		listAll(listRef).then((resp) => {
			setImageList([])
			resp.items.forEach((item) => {
				let arr = {
				}
				arr.name = item._location.path_
				getDownloadURL(item).then((url) => {
					arr.path = url
					setImageList((prev) => [...prev, arr])
				})
			})
		});
	}


	function onAddImageHendler() {//додаєм картинку в БД
		if (!inputFile) return
		addFileToFirebaseStorage(images, inputFile)
		setTimeout(() => {
			modalDataChenge('added',)
			setIsShowModal(true);
			dispatcher({ type: PUSH_USEEFFECT_UPDATE });
		}, 2000);
	}

	function onClickDeleteHendler(el) {//видаляє картинку з БД
		const listRef = ref(storage, `${el.name}`);

		deleteObject(listRef).then(() => {
			// File deleted successfully
			setTimeout(() => {
				setIsShowModal(true);
				dispatcher({ type: PUSH_USEEFFECT_UPDATE });
			}, 2000);
		}).catch((error) => {
			// Uh-oh, an error occurred!
		});
	}

	function onEditMetaDataImgHendler(el) {//редагує метадані в БД / наразі не використовується
		const forestRef = ref(storage, `${el.name}`);

		// Create file metadata to update
		const newMetadata = {
			cacheControl: 'public,max-age=300',
			contentType: 'image/jpeg'
		};

		// Update metadata properties
		updateMetadata(forestRef, newMetadata)
			.then((metadata) => {
				// Updated metadata for 'images/forest.jpg' is returned in the Promise
			}).catch((error) => {
				// Uh-oh, an error occurred!
			});
	}

	function modalDataChenge(params, el) {
		switch (params) {
			case 'showMetaImage':
				return setSwitchParams(<ImagesMetaData data={el} setIsShowModal={setIsShowModal}/>);
			
				case 'deleteQuestion':
				return setSwitchParams(<div>
					Видалити {el.name}?
					<div>
						<button onClick={() => { onClickDeleteHendler(el); modalDataChenge(`deleted`, el) }}>ok</button>
						<button onClick={() => setIsShowModal(false)}>cancel</button>
					</div>
				</div>);

			case 'deleted':
				return setSwitchParams(<div>
					{el.name} видалено
					<div>
						<button onClick={() => setIsShowModal(false)}>cancel</button>
					</div>
				</div>);
			case 'added':
				return setSwitchParams(<div>
					Картинку завантежено
					<div>
						<button onClick={() => setIsShowModal(false)}>cancel</button>
					</div>
				</div>);
			default:
				break;
		}
	}
	useEffect(() => {
		getListOfImage();
	}, [pushForUseEffectUpdate])


	return (
		<>
			<input type="file" onChange={(e) => {
				setInputFile(e.target.files[0])
				}}>
			</input>
			
			<Button onClick={onAddImageHendler} variant="outlined" size="small">Завантажити</Button> 

			<div className="admin-images">
				{imageList.map((el) => {
					return  (
						<Card sx={{ maxWidth: 345, background:'#f2f2f2' }}>
					<CardMedia
						sx={{ height: 140 }}
						image={el.path}
						title={el?.title}
						alt={el?.alt}
					/>
					<CardActions>
						<Button size="small" onClick={() => {
								// getMetaDataOfImage(el);
								modalDataChenge(`showMetaImage`, el);
								setIsShowModal(true);						
							}}>Змінити</Button>
						<Button size="small" onClick={() => {
								modalDataChenge(`deleteQuestion`, el);
								setIsShowModal(true);
							}}>Видалити</Button>
					</CardActions>
						</Card>)
				})}
			</div>
			<Modal showModal={isShowModal} openModalFunc={setIsShowModal} >
				{
					switchParams
				}
			</Modal>
	  </>

	);
};

export default ImagesAdd;
