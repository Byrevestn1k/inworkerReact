import { useState } from 'react';
import Modal from '../Modal';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const NavigationItem = ({ data, collection }) => {
   let { text, isUppercasetext, isFooter, path, priority, isHeader, id } = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const [showModal, setShowModal] = useState(false)
  
   function onClickEdit() {
      setShowModalDeleteQuestion(true)
      setShowModal(true);
   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true);
   }

   return (
      
      <Card sx={{ minWidth: 275, margin: `10px` }}>

         <CardContent>
            <Typography variant="h5" component="div">{text}</Typography> 
            <Typography sx={{ textAlign: "left" }}  gutterBottom><span className='card-span'>ID</span>: {id}</Typography>
            <Typography sx={{ textAlign: "left" }}  gutterBottom><span className='card-span'>PATH</span>: {path}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>PRIORITY</span>: {priority}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>ISUPPERCASE</span>: {`${isUppercasetext}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>ISFOOTER</span>: {`${isFooter}`}</Typography>
            <Typography sx={{ textAlign: "left" }} ><span className='card-span'>ISHEADER</span>: {`${isHeader}`}</Typography>
         </CardContent>

         <CardActions>
            <Button onClick={onClickEdit} size="small">Edit</Button>
            <Button onClick={onClickDeleteHendler} size="small">Delete</Button>
         </CardActions>

         <Modal showModal={showModal} openModalFunc={setShowModal}>
            {showModalDeleteQuestion ? <NavigationEditor showModalDeleteQuestion={showModalDeleteQuestion} setShowModalDeleteQuestion={setShowModalDeleteQuestion} setShowModal={setShowModal} data={data} collection={collection} /> : <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />}
         </Modal>
      </Card>
   )
}

export default NavigationItem;