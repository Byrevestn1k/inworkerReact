
import { Route, Routes } from 'react-router';
import './App.css';
import './adaptive.css';
import AdminPanel from './components/AdminPanel';
import { ADMIN_PATH } from './constants/pathNames';
import MainPage from './components/MainPage';
import Authentication from './auth/views/Authentication';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ALERT_END } from './auth/constant/alert.constant';


function App() {
  const dispatch = useDispatch();
  const { flag, type, msg } = useSelector((state) => state.alertReducer);

  const handleAlertClose = () => {
    dispatch({
      type: ALERT_END,
      payload: null
  })
  };
  return (
    <div className="App">
        <Snackbar open={flag} autoHideDuration={5000} onClose={handleAlertClose}>
            <Alert onClose={handleAlertClose} severity={type}>
              {msg}
            </Alert>
        </Snackbar>
          <Routes>
            <Route path={ADMIN_PATH} element={<AdminPanel />}/>
            <Route path={`/auth`} element={<Authentication/>}/>
            <Route path={`*`} element={<MainPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
