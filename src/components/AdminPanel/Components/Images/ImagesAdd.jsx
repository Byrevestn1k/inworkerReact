import { useEffect, useState } from "react";
import { addFileToFirebaseStorage, downloadFileFromFirebaseStorage } from "../../helperStorage";
import "./imagesAdd.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const ImagesAdd = () => {
	let [inputFile, setInputFile]=useState()
	let [url, setUrl] =useState();
	let [changer, setChanger] =useState(0);
	let images = 'images/';

	useEffect(()=>{
		downloadFileFromFirebaseStorage(`${images}/${inputFile}`).then((resp)=> console.log(resp))
		// if(!downloadFileFromFirebaseStorage(`${images}/${inputFile}`)){
		// 	return
		// }
		
		

	},[changer])
	
	
	function onAddImageHendler(){
		addFileToFirebaseStorage(images, inputFile)
	}
 

	return (
		<>
			<input type="file" onChange={(e)=>{
					setInputFile(e.target.files[0])	
				}}></input>
			<button onClick={
				onAddImageHendler
			}>Upload</button>
			<img src={url} alt="" />
		</>
	);
};

export default ImagesAdd;
