import "./pages.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../constants/constants";
import { getAllDocuments_Firebase } from "../../helpers";
import Modal from "../Modal";
import NavigationEditor from "../NavigationEditor/NavigationEditor";
import { useDispatch, useSelector } from "react-redux";
import { TRANSMIT_EDIT_PAGE_DATA, UPLOAD_NAVIGATION } from "../../../../constants/actions";
import PagesItem from "../PagesItem/PagesItem";
import { useNavigate } from "react-router";
import { PAGES_EDITOR_PATH } from "../constants/pathNames";
import TextEditor from "../TextEditor";

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
		<div id="addnew"><button onClick={onAddPAge}>add new</button></div>
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
