import {
  USER_SIGNIN,
  USER_END,
  USER_START,
  USER_SIGNOUT,
} from "../constant/auth.constant";
import { showAlert } from "./alert.action";
import { db } from "../../config/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { ALERT_START } from "../constant/alert.constant";
import { doc, getDoc } from "@firebase/firestore";
import { func } from "prop-types";


export function SignIn(email, password, dispatch) {

  dispatch({
    type: USER_START,
    payload: null,
  });

  signInWithEmailAndPassword(getAuth(), email, password)
    .then((data) => {
      getDoc(doc(db, "admin", data?.user.uid))
        .then((doc) => {
          let role = doc.data()?.role;
          if (role === "admin") {
            dispatch({
              type: USER_SIGNIN,
              payload: {
                user: data?.user,
                level: doc.data()?.level
              },
            });

            dispatch({
              type: ALERT_START,
              payload: {
                type: "success",
                msg: "😄 Logged in Successfull.",
              }
            })


          } else {
            dispatch({
              type: ALERT_START,
              payload: {
                type: "error",
                msg: "😢 sorry ! you are not a admin.",
              }
            })
          }
          dispatch({
            type: USER_END,
            payload: null,
          });
        });
    })
    .catch((err) => {
      console.log(`err => `, err);

      dispatch({
        type: ALERT_START,
        payload: {
          type: "error",
          msg: err.message,
        }
      })

      dispatch({
        type: USER_END,
        payload: null,
      });
    });
};

export function SignOut(dispatch) {
  dispatch({
    type: USER_START,
    payload: null,
  });

  signOut(getAuth())
    .then(() => {
      dispatch({
        type: USER_SIGNOUT,
        payload: null,
      });
      dispatch({
        type: ALERT_START,
        payload: {
          type: "success",
          msg: "😄 Logged out successfull.",
        }
      }
      );
    })
    .catch((err) => {
      dispatch({
        type: ALERT_START,
        payload: {
          type: "error",
          msg: err.message,
        }
      });


    });
  dispatch({
    type: USER_END,
    payload: null,
  });
};
