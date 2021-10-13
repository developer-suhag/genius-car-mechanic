import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const singInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUsers(result.user);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    // setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .finally(() => setIsLoading(false));
  };
  // observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    singInUsingGoogle,
    logOut,
    users,
    isLoading
    
  };
};

export default useFirebase;
