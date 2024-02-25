import { useEffect, useState } from "react";
import { getAllDocuments_Firebase } from "../AdminPanel/helpers";

function Test() {
   let [DB, setDB] = useState()
   let dataBaseCollection = 'navigation';


   useEffect(() => {
      getAllDocuments_Firebase(dataBaseCollection)
         .then(resp => {
            setDB(resp.sort((a, b) => a.priority - b.priority));



         })
   }, [])

   console.log(DB);
   return (
      <div>TEST</div>
   )
}

export default Test;