import { useEffect, useState } from "react";
import { addFileToFirebaseStorage} from "../../helperStorage";
import "./imagesAdd.css";
import { deleteObject, getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import Modal from "../Modal/Modal";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { LOGO_CHANGE, PUSH_USEEFFECT_UPDATE, SHOW_MODAL } from "../../../../constants/actions";

const ImagesAdd = () => {
	let	pushForUseEffectUpdate = useSelector(state=>state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	let dispatcher =useDispatch()
	let [inputFile, setInputFile]=useState()
	let [checkLogo, setCheckLogo]=useState()
	let [imageList, setImageList] =useState([]);
	let [isShowModal, setIsShowModal] =useState(false);
	let images = 'images/';

	const storage = getStorage();
    const listRef = ref(storage, 'images/');

	useEffect(()=>{
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
			})
		},[pushForUseEffectUpdate])
	
	
	function onAddImageHendler(){
		if(!inputFile) return
		addFileToFirebaseStorage(images, inputFile)	
		setTimeout(() => {
			setIsShowModal(true);
			dispatcher({type: PUSH_USEEFFECT_UPDATE});
		}, 2000);
		dispatcher({type: LOGO_CHANGE, payload: checkLogo});
		
	}
	
    
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
						<button onClick={()=>{
						
						const listRef = ref(storage, `${el.name}`);
						console.log(`${el.name}`);
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
					}>delete</button>
						</div>}
					)
					}
					
				</div>
			<Modal showModal={isShowModal} openModalFunc={setIsShowModal}>
				<div>
					<p>Файл завантажено/видалено</p>
				</div>
			</Modal>
		</div>
		
	);
};

export default ImagesAdd;
