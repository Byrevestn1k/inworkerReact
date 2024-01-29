import { useState } from "react";
import { addFileToFirebaseStorage } from "../../helperStorage";
import "./images.css";
import { getStorage, ref, uploadBytes } from "firebase/storage";


const Images = () => {
	const storage = getStorage();
	let [inputFile, setInputFile]=useState()
	let images = 'images/'
	function onAddImageHendler(){
		// if(inputFile==null)return;
		// let umageRef=ref(storage, `images/${inputFile.name}`);
		// uploadBytes(umageRef, inputFile).then((snapshot) => {
		// 	console.log('Uploaded a blob or file!');
		// });
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
		</>
	);
};

export default Images;
