import { useState } from 'react';
import Modal from '../Modal';
import './categoriesItem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CategoryEditor from '../CategoryEditor/CategoryEditor';
import { useSelector } from 'react-redux';


const CategoriesItem = ({ data, collection }) => {
   let { title, description, keywords, parentCategory, childCategories, path, priority, id, dateOfCreate, dateOfUpdate, imgUrl } = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const [showModal, setShowModal] = useState(false)
   const categoriesList = useSelector(state => state.uploadCategories.uploadCategories)
   //   console.log(data);
   function onClickEdit() {
      setShowModalDeleteQuestion(true)
      setShowModal(true);
   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true);
   }



   return (

      <Card sx={{ width: 400, margin: `10px`, background: '#f2f2f2' }}>

         <CardContent>
            <Typography variant="h5" component="div">{title}</Typography>
            <Typography sx={{ textAlign: "left" }} gutterBottom><span className='card-span'>id</span>: {id}</Typography>
            <Typography sx={{ textAlign: "left" }} gutterBottom><span className='card-span'>path</span>: {path}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>priority</span>: {priority}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>description</span>: {`${description}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>keywords</span>: {`${keywords}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>parentCategory</span>: {parentCategory?.map((el) => {
               for (let index = 0; index < categoriesList.length; index++) {
                  if (categoriesList[index].id == el) return `${categoriesList[index].title}, `

               }
            })}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>imgUrl</span>: {`${imgUrl}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>childCategories</span>: {childCategories?.map((el) => {
               for (let index = 0; index < categoriesList.length; index++) {
                  if (categoriesList[index].id == el) return `${categoriesList[index].title}, `

               }
            })}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>dateOfCreate</span>: {`${dateOfCreate}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>dateOfUpdate</span>: {`${dateOfUpdate}`}</Typography>
         </CardContent>

         <CardActions>
            <Button onClick={onClickEdit} size="small">Змінити</Button>
            <Button onClick={onClickDeleteHendler} size="small">Видалити</Button>
         </CardActions>

         <Modal showModal={showModal} openModalFunc={setShowModal}>
            {showModalDeleteQuestion ?
               <CategoryEditor showModalDeleteQuestion={showModalDeleteQuestion} setShowModalDeleteQuestion={setShowModalDeleteQuestion} setShowModal={setShowModal} data={data} collection={collection} /> :
               <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />}
         </Modal>
      </Card>
   )
}

export default CategoriesItem;