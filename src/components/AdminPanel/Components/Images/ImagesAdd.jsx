import { useEffect, useState } from "react";
import { addFileToFirebaseStorage } from "../../helperStorage";
import "./imagesAdd.css";
import { deleteObject, getDownloadURL, getMetadata, getStorage, listAll, ref, updateMetadata } from "firebase/storage";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_CHANGE, PUSH_USEEFFECT_UPDATE, SHOW_MODAL } from "../../../../constants/actions";
const storage = getStorage();
const ImagesAdd = () => {
	let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	let dispatcher = useDispatch()
	let [inputFile, setInputFile] = useState()
	let [imageList, setImageList] = useState([]);
	let [metaImg, setMetaImg] = useState(null);
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
				return metaImg ?
					setSwitchParams(<><Input width={'300px'} label={`bucket`} value={metaImg.bucket} disabled={`disabled`} />
						<Input width={'300px'} label={`generation`} value={metaImg.generation} disabled={`disabled`} />
						<Input width={'300px'} label={`metageneration`} value={metaImg.metageneration} disabled={`disabled`} />
						<Input width={'300px'} label={`fullPath`} value={metaImg.fullPath} disabled={`disabled`} />
						<Input width={'300px'} label={`size`} value={metaImg.size} disabled={`disabled`} />
						<Input width={'300px'} label={`timeCreated`} value={metaImg.timeCreated} disabled={`disabled`} />
						<Input width={'300px'} label={`updated`} value={metaImg.updated} disabled={`disabled`} />
						<Input width={'300px'} label={`md5Hash`} value={metaImg.md5Hash} disabled={`disabled`} />
						<Input width={'300px'} label={`cacheControl`} value={metaImg.cacheControl} disabled={`enabled`} />
						<Input width={'300px'} label={`contentDisposition`} value={metaImg.contentDisposition} />
						<Input width={'300px'} label={`contentEncoding`} value={metaImg.contentEncoding} />
						<Input width={'300px'} label={`contentLanguage`} value={metaImg.contentLanguage} />
						<Input width={'300px'} label={`contentType`} value={metaImg.contentType} />
						<Input width={'300px'} label={`customMetadata`} value={metaImg.customMetadata} />
						<button onClick={() => {
							setIsShowModal(false);
							setMetaImg(null);
						}
						}>Cancel</button></>)
					:
					null;
			case 'deleteQuestion':
				return setSwitchParams(<div>
					Видалити {el.name}?
					<div>
						<button onClick={() => { onClickDeleteHendler(el); modalDataChenge(`deleted`, el) }}>ok</button>
						<button onClick={() => setIsShowModal(false)}>cansel</button>
					</div>
				</div>);

			case 'deleted':
				return setSwitchParams(<div>
					{el.name} видалено
					<div>
						<button onClick={() => setIsShowModal(false)}>cansel</button>
					</div>
				</div>);
			case 'added':
				return setSwitchParams(<div>
					Картинку завантежено
					<div>
						<button onClick={() => setIsShowModal(false)}>cansel</button>
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
		<div>
			<input type="file" onChange={(e) => {
				setInputFile(e.target.files[0])
			}}></input>
			<button onClick={onAddImageHendler}>Upload</button>

			<div className="admin-images">
				{imageList.map((el) => {

					return <div>
						{/* <Input type={`radio`} name={`logoCheck`} onChangeFunction={setCheckLogo} value={el}/> */}
						<div className="image">
							<img src={el.path} alt="" />
						</div>
						<button onClick={() => {
							getMetaDataOfImage(el);
							modalDataChenge(`showMetaImage`, el);
							setIsShowModal(true)


						}
						}>show details</button>
						<button onClick={() => {
							modalDataChenge(`deleteQuestion`, el);
							setIsShowModal(true);
						}}>delete</button>
					</div>
				}
				)
				}

			</div>

			<Modal showModal={isShowModal} openModalFunc={setIsShowModal} >
				{
					switchParams

				}
			</Modal>

		</div>

	);
};

export default ImagesAdd;
