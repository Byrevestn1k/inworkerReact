import './navigationitem.css';
import { Link } from "react-router-dom";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "../../constants/pathNames";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, createContext } from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { CARTEGORIES_LIST_ENDPOINT } from "../../constants/endpoints";

// export let DataCategoriesContext = createContext()

const NavigationItem = (props) => {
   const { text, isUppercasetext, isCategiries, isFooter } = props
   const [fetching, setFetching] = useState(false)
   const [fetchError, setFetchError] = useState(null);

   let categories = [
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: HOME_PATH,
         isCategiries: false,
      },
      // {
      //    "title": "string",
      //    "priority": 0,
      //    "urlSlug": "string",
      //    "image": "string"
      //  },
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: BLOG_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         title: 'Item',
         isUppercasetext: true,
         // urlSlug: ABOUT_PATH,
         isCategiries: false,
      },


   ];
   const [data, setData] = useState(categories)
   useEffect(function () {
      setFetching(true)
      fetch(createRequestPath(CARTEGORIES_LIST_ENDPOINT))
         .then(response => response.json())
         .then(resp => {
            setFetching(false)
            setData(resp)


         })
         .catch(err => {

            setFetching(false)
            setFetchError(err)
         });
   }, [])





   return (

      <div className='nav-item'>

         <div>{!isUppercasetext ? text.toUpperCase() : text}</div>

         {isCategiries &&
            (
               <>
                  <div className='nav-arrow_down'></div>
                  <div className='navigatin-categiries hidden'>
                     {
                        data.map((element) => {

                           return (

                              // <Link key={uuidv4()} to={element.urlSlug}>
                              <div className="navigatin-categiries-item">
                                 {element.title}
                              </div>
                              // </Link>
                           )
                        })
                     }
                  </div>
               </>
            )
         }
      </div>

   )
}

export default NavigationItem;