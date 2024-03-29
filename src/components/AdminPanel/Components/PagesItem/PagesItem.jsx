import { useState } from 'react';
import Modal from '../Modal';
import './pagesItem.css';
import DeleteQuestion from '../DeleteQuestion';
import { useDispatch,  } from 'react-redux';
import { TRANSMIT_EDIT_PAGE_DATA, TRANSMIT_EDIT_PAGE_NAME} from '../../../../constants/actions';
import { useNavigate } from 'react-router';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


// export let DataCategoriesContext = createContext()

const PagesItem = ({ data, collection, setIsShowEditor }) => {
   let navigator = useNavigate()
   let { title,  path, keywords, dateOfUpdate, picture} = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch(false);

   function onClickEdit() {
      dispatch({ type: TRANSMIT_EDIT_PAGE_DATA, payload: data });
      dispatch({ type: TRANSMIT_EDIT_PAGE_NAME, payload: collection });
      navigator(`/admin/pages/editor`)

   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true);
   }

   return (   
      <Card sx={{ minWidth: 275, margin: `10px`, background:'#f2f2f2' }}>
      <CardMedia
        sx={{ height: 100 }}
        image={picture}
        title={title}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Оновлено: {dateOfUpdate}</Typography>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography sx={{ textAlign: "left" }} ><span className='card-span'>keywords</span>: {keywords}</Typography>
        <Typography sx={{ textAlign: "left" }} ><span className='card-span'>path</span>: {path}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClickEdit} size="small">Змінити</Button>
        <Button onClick={onClickDeleteHendler} size="small">Видалити</Button>
      </CardActions>
      <Modal showModal={showModal} openModalFunc={setShowModal}>
            <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />
         </Modal>
      </Card>
   )
}

export default PagesItem;