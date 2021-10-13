import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState();
    const auth = getAuth();
    const singInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {
            setUsers(result.user);
        });
    };
    const logOut = () => {
        signOut(auth).then(() => {
            setUsers({});
        });
    };
    // observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            } else {
                setUsers({});
            }
        });
    }, [auth]);
    return {
        singInUsingGoogle,
        logOut,
        user: users,
    };
};

export default useFirebase;
