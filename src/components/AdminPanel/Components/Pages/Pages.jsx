import "./pages.css";
import { useEffect, useState } from "react";
import { getAllDocuments_Firebase } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { TRANSMIT_EDIT_PAGE_DATA, UPLOAD_NAVIGATION } from "../../../../constants/actions";
import PagesItem from "../PagesItem/PagesItem";
import TextEditor from "../TextEditor";
import { Button } from "@mui/material";

const Pages = () => {
	const [pagesData, setPagesData] = useState([]);
	const [isShowEditor, setIsShowEditor] = useState(false);
	let dispatch = useDispatch()
	let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);
	let collection = 'pages';

	let transmitData = useSelector(state => state.transmitPageData.transmitPageData)
	useEffect(() => {
		getAllDocuments_Firebase(collection).then((resp) => {
			setPagesData(resp);//отримуєм БД з pages
		})
	}
		, [pushForUseEffectUpdate]);

	function onAddPAge() {
		dispatch({ type: TRANSMIT_EDIT_PAGE_DATA, payload: undefined });
		setTimeout(() => {
			setIsShowEditor(true)
		}, 100);

	}
	let item = <>
	 
		<div id="addnew">
			<Button onClick={onAddPAge} variant="outlined" size="small">Створити</Button> 
		</div>
		<div className="page">
			{pagesData.map((element) => {
				return (
					<PagesItem data={element} collection={collection} setIsShowEditor={setIsShowEditor} />)
			})
			}
		</div>
	</>

	return (
		<>
			{!isShowEditor ? item : <TextEditor collectionfromPage={collection} addORedit={true} setIsShowEditor={setIsShowEditor} />
			}
		</>
	);
};

export default Pages;
