import { useEffect, useState } from "react";
import { addFileToFirebaseStorage} from "../../helperStorage";
import "./imagesAdd.css";
import { deleteObject, getDownloadURL, getMetadata, getStorage, listAll, ref, updateMetadata } from "firebase/storage";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_CHANGE, PUSH_USEEFFECT_UPDATE, SHOW_MODAL } from "../../../../constants/actions";
const storage = getStorage();
const ImagesAdd = () => {
	let	pushForUseEffectUpdate = useSelector(state=>state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	let dispatcher =useDispatch()
	let [inputFile, setInputFile]=useState()
	let [checkLogo, setCheckLogo]=useState()
	let [imageList, setImageList] =useState([]);
	let [metaImg, setMetaImg] =useState(null);
	let [isShowModal, setIsShowModal] =useState(false);
	let images = 'images/';
	
	function getListOfImage(){
		
    	const listRef = ref(storage, 'images/');
		listAll(listRef).then((resp)=>{
			setImageList([])
			resp.items.forEach((item)=>{
				let arr={
				}
				arr.name = item._location.path_
				 	
				getDownloadURL(item).then((url)=>{
					arr.path= url			
					setImageList((prev) =>[...prev, arr])
				})
				})
			});
	}
    
	function getMetaDataOfImage(el){
		const listRef = ref(storage, `${el.name}`);
		getMetadata(listRef)
				.then((listRef) => {
					setMetaImg(listRef);
				})
				.catch((error) => {
					// Uh-oh, an error occurred!
				});
	}

	function onAddImageHendler(){
		if(!inputFile) return
		addFileToFirebaseStorage(images, inputFile)	
		setTimeout(() => {
			setIsShowModal(true);
			dispatcher({type: PUSH_USEEFFECT_UPDATE});
		}, 2000);
		dispatcher({type: LOGO_CHANGE, payload: checkLogo});
		
	}

	function onClickDeleteHendler(el){
		const listRef = ref(storage, `${el.name}`);

		deleteObject(listRef).then(() => {
			// File deleted successfully
			setTimeout(() => {
				setIsShowModal(true);
				dispatcher({type: PUSH_USEEFFECT_UPDATE});
			}, 2000);
		  }).catch((error) => {
			// Uh-oh, an error occurred!
		  });
	}

	function onEditMetaDataImgHendler(el){
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
	useEffect(()=>{
		getListOfImage()

		},[pushForUseEffectUpdate])
	
	
	
	
	
	return (
		<div>
			<input type="file" onChange={(e)=>{
					setInputFile(e.target.files[0])	
				}}></input>
			<button onClick={onAddImageHendler}>Upload</button>

			<div className="admin-images">
				{imageList.map((el)=>{
			
					return <div>
					{/* <Input type={`radio`} name={`logoCheck`} onChangeFunction={setCheckLogo} value={el}/> */}
						<div className="image">
							<img src={el.path} alt="" /> 
						</div>
						<button onClick={()=>getMetaDataOfImage(el)}>show details</button>
						<button onClick={()=>onClickDeleteHendler(el)}>delete</button>
						</div>}
					)
					}
					
				</div>
			<Modal showModal={isShowModal} openModalFunc={setIsShowModal}>
				<div>
					<p>Файл завантажено/видалено</p>
				</div>
			</Modal>
			{metaImg?<>
				<Input width={'300px'} label = {`bucket`} value={metaImg.bucket} disabled={`disabled`} />
				<Input width={'300px'} label = {`generation`} value={metaImg.generation} disabled={`disabled`} />
				<Input width={'300px'} label = {`metageneration`} value={metaImg.metageneration} disabled={`disabled`} />
				<Input width={'300px'} label = {`fullPath`} value={metaImg.fullPath} disabled={`disabled`} />
				<Input width={'300px'} label = {`size`} value={metaImg.size} disabled={`disabled`} />
				<Input width={'300px'} label = {`timeCreated`} value={metaImg.timeCreated} disabled={`disabled`} />
				<Input width={'300px'} label = {`updated`} value={metaImg.updated} disabled={`disabled`} />
				<Input width={'300px'} label = {`md5Hash`} value={metaImg.md5Hash} disabled={`disabled`} />
				<Input width={'300px'} label = {`cacheControl`} value={metaImg.cacheControl} disabled={`enabled`} />
				<Input width={'300px'} label = {`contentDisposition`} value={metaImg.contentDisposition}  />
				<Input width={'300px'} label = {`contentEncoding`} value={metaImg.contentEncoding} />
				<Input width={'300px'} label = {`contentLanguage`} value={metaImg.contentLanguage} />
				<Input width={'300px'} label = {`contentType`} value={metaImg.contentType} />
				<Input width={'300px'} label = {`customMetadata`} value={metaImg.customMetadata} />
				<button onClick={()=>setMetaImg(null)}>Cancel</button>
				
				</>
			:
			null
			}
		</div>
		
	);
};

export default ImagesAdd;
