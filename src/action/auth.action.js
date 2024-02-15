import {
  USER_SIGNIN,
  USER_END,
  USER_START,
  USER_SIGNOUT,
} from "../constant/auth.constant";
import { showAlert } from "./alert.action";
import { auth, db } from "../config/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const SignIn = (email, password, dispatch) => {
  dispatch({
    type: USER_START,
    payload: null,
  });
  signInWithEmailAndPassword(auth, email, password)
    .then((data) => {
      getDoc(doc(db, "admin", data?.user.uid))
        .then((doc) => {
          let role = doc.data()?.role;
          console.log(`role => `, doc);
          if (role === "admin" || role !== undefined) {
            dispatch({
              type: USER_SIGNIN,
              payload: {
                user: data?.user,
                level: doc.data()?.level
              },
            });
            // dispatch(
            //   showAlert({
            //     type: "success",
            //     msg: "😄 Logged in Successfull.",
            //   })
            // );
          } else {
            // dispatch(
            //   showAlert({
            //     type: "error",
            //     msg: "😢 sorry ! you are not a admin.",
            //   })
            // );
          }
          dispatch({
            type: USER_END,
            payload: null,
          });
        });
    })
    .catch((err) => {
      console.log(`err => `, err);
      // dispatch(
      //   showAlert({
      //     type: "error",
      //     msg: err.message,
      //   })
      // );
      dispatch({
        type: USER_END,
        payload: null,
      });
    });
};

export function SignOut (dispatch){
  dispatch({
    type: USER_START,
    payload: null,
  });
  auth
    .signOut()
    .then(() => {
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
      // dispatch(
      //   showAlert({
      //     type: "success",
      //     msg: "😄 Logged out successfull.",
      //   })
      // );
    })
    .catch((err) => {
      // dispatch(
      //   showAlert({
      //     type: "error",
      //     msg: err.message,
      //   })
      // );
    });
  dispatch({
    type: USER_END,
    payload: null,
  });
};
