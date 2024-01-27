import "./pages.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../constants/constants";
import { getAllDocuments_Firebase } from "../../helpers";
import Modal from "../Modal";
import NavigationEditor from "../NavigationEditor/NavigationEditor";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_NAVIGATION } from "../../../../constants/actions";
import PagesItem from "../PagesItem/PagesItem";
import { useNavigate } from "react-router";
import { PAGES_EDITOR_PATH } from "../constants/pathNames";
import TextEditor from "../TextEditor";

const Pages = () => {
	const [pagesData, setPagesData] = useState([]);
	const [isShowEditor, setIsShowEditor] = useState(false);// БД з навігацією
	const dispatch = useDispatch(false);
	let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate).pushForUseEffectUpdate;
	let collection = 'pages';
	useEffect(() => {
		getAllDocuments_Firebase(collection).then((resp) => {
			setPagesData(resp);//отримуєм БД з pages
			dispatch({ type: UPLOAD_NAVIGATION, payload: resp });
		})
	}
		, [pushForUseEffectUpdate]);

	function onAddPAge() {
		setIsShowEditor(true)
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
	//адаптивне меню, ховаєм в кнопку нав
	return (
		<>
			{!isShowEditor ? item : <TextEditor collection={collection} setIsShowEditor={setIsShowEditor} />
			}
		</>
	);
};

export default Pages;
