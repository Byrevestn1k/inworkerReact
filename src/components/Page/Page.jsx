import Navigation from "../Navigation";
import "./page.css";
import PageWrapper from "../PageWrapper/PageWrapper";
import { useEffect, useState } from "react";
import { getDocumentFromDB_Firebase_for_path } from "../AdminPanel/helpers";


const Page = ({ data }) => {

   let { dateOfCreate, dateOfUpdate, description, keywords, path, picture, priority, published, textvalue, title } = data;
   let [dataOfPage, setDataOfPage] = useState([]);
   useEffect(() => {

      getDocumentFromDB_Firebase_for_path("pages", path).then((resp) => {
         setDataOfPage(resp);//отримуєм БД з навігацією
      })
   }
      , [path]);
   let head = document.getElementsByTagName("title");
   head[0].text = dataOfPage.title;
   let mainInformation = document.querySelector(".content");
   mainInformation.innerHTML = dataOfPage.textvalue;
   return (

      <div >

         <div>published: {dataOfPage.dateOfCreate}</div>

      </div>





   )
};

export default Page;