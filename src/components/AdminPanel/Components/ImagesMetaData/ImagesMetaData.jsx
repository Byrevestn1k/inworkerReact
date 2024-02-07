import { useEffect, useState } from "react";
import "./imagesMetaData.css";
import { getMetadata, getStorage,  ref} from "firebase/storage";
import Input from "../Input/Input";

const ImagesMetaData = ({data, setIsShowModal}) => {

	let [metaImg, setMetaImg] = useState();
	let widthInput ='300px';
	useEffect(() => {

		const forestRef = ref(getStorage(), data.name);
		getMetadata(forestRef)
		.then((meta) => {
			setMetaImg(meta);
			
		})
		.catch((error) => {
			// Uh-oh, an error occurred!
		});	
		
	}, [])
	

	

	return (
		< >
		{
			metaImg?<>
			<Input width={widthInput} label={`bucket`} value={metaImg.bucket} disabled={`disabled`} />
			<Input width={widthInput} label={`generation`} value={metaImg.generation} disabled={`disabled`} />
			<Input width={widthInput} label={`metageneration`} value={metaImg.metageneration} disabled={`disabled`} />
			<Input width={widthInput} label={`fullPath`} value={metaImg.fullPath} disabled={`disabled`} />
			<Input width={widthInput} label={`size`} value={metaImg.size} disabled={`disabled`} />
			<Input width={widthInput} label={`timeCreated`} value={metaImg.timeCreated} disabled={`disabled`} />
			<Input width={widthInput} label={`updated`} value={metaImg.updated} disabled={`disabled`} />
			<Input width={widthInput} label={`md5Hash`} value={metaImg.md5Hash} disabled={`disabled`} />
			<Input width={widthInput} label={`cacheControl`} value={metaImg.cacheControl} disabled={`enabled`} />
			<Input width={widthInput} label={`contentDisposition`} value={metaImg.contentDisposition} disabled={`disabled`} />
			<Input width={widthInput} label={`contentEncoding`} value={metaImg.contentEncoding} disabled={`disabled`} />
			<Input width={widthInput} label={`contentLanguage`} value={metaImg.contentLanguage} disabled={`disabled`} />
			<Input width={widthInput} label={`contentType`} value={metaImg.contentType} disabled={`disabled`} />
			<Input width={widthInput} label={`customMetadata`} value={metaImg.customMetadata} disabled={`disabled`} />
			<button onClick={() => {setIsShowModal(false);}}>Cancel</button></>:
			null
		}
			
		</>
	);
};

export default ImagesMetaData;
