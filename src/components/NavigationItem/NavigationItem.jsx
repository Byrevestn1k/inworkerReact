import './navigationitem.css';
import { Link } from "react-router-dom";
import { ABOUT_PATH, BLOG_PATH, HOME_PATH } from "../../constants/pathNames";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState, createContext } from 'react';
import { createRequestPath } from "../../helpers/helpers";
import { BLOGS_LIST_ENDPOINT} from "../../constants/endpoints";

// export let DataCategoriesContext = createContext()

const NavigationItem = ({isFooterShow, isHeaderShow,  text,   isUppercasetext,   isCategiries,   isFooter}) => {
   let [data, setData]=useState([])
   useEffect(function () {
     
   }, [])





   return (

      <div className='nav-item'>

         <div>{isUppercasetext ? text.toUpperCase() : text.toLowerCase()}</div>

         {/* {isCategiries &&
            (
               <>
                  <div className='nav-arrow_down'></div>
                  <div className='navigatin-categiries hidden'>
                     {
                        data.map((element) => {

                           return (

                              <Link key={uuidv4()} to={element.text}>
                              <div className="navigatin-categiries-item">
                                 {element.name}
                              </div>
                              </Link>
                           )
                        })
                     }
                  </div>
               </>
            )
         } */}
      </div>

   )
}

export default NavigationItem;