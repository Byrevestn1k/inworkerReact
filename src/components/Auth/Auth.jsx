import { useEffect, useState } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../../firebase"


export const AuthProvider = () => {
	let auth = getAuth(app);
	let [user, setUser] = useState(auth.currentUser);
	//сторінка реєстрації за допомогою гугл попап
	useEffect(() => {
		let unsub = auth.onAuthStateChanged((mayBeUser) => {
			if (mayBeUser != null) {
				return setUser(mayBeUser)
			}
		})
		signInWithPopup(auth, googleAuthProvider).
			then(credentials => setUser(credentials.user)).catch((e) => { console.log(e); })
		return unsub;
	}, [auth]);
	console.log(user);
	return user != null ? <>{user.displayName}</> : <>loading</>;
};


