import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const googleAuthProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then(result => {
                console.log(result);
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

initializeAuthentication(useFirebase);
export default useFirebase;