import "./navigation.css";
import NavigationItem from "../NavigationItem/NavigationItem";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

import {
    PRODUCTS_PATH,
    BLOG_PATH,
    CATEGIRIES_PATH,
    CATEGIRIES_VALENTINE_PATH,
    ADD_CATEGORIES_FORM_VALENTINE_PATH,
    ADD_VLAD_BLOGS_PATH,
    BLOG_LENA_PATH,
    ADD_CATEGORIES_FORM_PATH,
    ADD_LERA_PRODUCTS_PATH,
    PRODUCTS_LERA_PATH } from "../../constants/pathNames";

// export let dataCategories = createContext()
const Navigation = () => {

   const navElements = [
      {
         id: uuidv4(),
         text: 'Categoties',
         isUppercasetext: true,
         path: CATEGIRIES_PATH,
         isCategiries: true,
      },
      {
         id: uuidv4(),
         text: 'Add Categories',
         isUppercasetext: true,
         path: ADD_CATEGORIES_FORM_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'CategotiesValentine',
         isUppercasetext: true,
         path: CATEGIRIES_VALENTINE_PATH,
         isCategiries: true,
      },
      {
         id: uuidv4(),
         text: 'AddCategoriesValentine',
         isUppercasetext: true,
         path: ADD_CATEGORIES_FORM_VALENTINE_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Blog',
         isUppercasetext: true,
         path: BLOG_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Add Blogs',
         isUppercasetext: true,
         path: ADD_VLAD_BLOGS_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'Product',
         isUppercasetext: true,
         path: PRODUCTS_PATH,
         isCategiries: false,
      },

      {
         id: uuidv4(),
         text: 'AddProductsLera',
         isUppercasetext: true,
         path: ADD_LERA_PRODUCTS_PATH,
         isCategiries: false,
      },
      {
         id: uuidv4(),
         text: 'ProductsLera',
         isUppercasetext: true,
         path: PRODUCTS_LERA_PATH,
         isCategiries: false,
      },
       {
           id: uuidv4(),
           text: "BlogLena",
           isUppercasetext: true,
           path: BLOG_LENA_PATH,
           isCategiries: false,
       },
       // {
       //    id: uuidv4(),
       //    text: 'Contact us',
       //    isUppercasetext: true,
       //    path: CONTACT_PATH,
       //    isCategiries: false,
       // },

       // {
       //    id: uuidv4(),
       //    text: 'Help & support',
       //    isUppercasetext: true,
       //    path: HELP_PATH,
       //    isCategiries: false,
       // },
   ];

  return (
    <nav className="navigation">
      {navElements.map((element) => {
        return (
          <Link key={element.id} to={element.path}>
            <NavigationItem
              text={element.text}
              isUppercasetext={element.isUppercasetext}
              isCategiries={element.isCategiries}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
