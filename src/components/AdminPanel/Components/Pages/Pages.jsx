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

const Pages = () => {
	const [pagesData, setPagesData] = useState([]);// БД з навігацією
	const dispatch = useDispatch();
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
		console.log(pagesData);
	}

	//адаптивне меню, ховаєм в кнопку нав
	return (
		<> <div id="addnew"><button onClick={onAddPAge}>add new</button></div>
			<div className="page">
				{pagesData.map((element) => {
					return (
						<PagesItem data={element} collection={collection}
						/>)

				})
				}
			</div>

		</>
	);
};

export default Pages;
