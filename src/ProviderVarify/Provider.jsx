import { useState,useEffect, createContext } from "react";

import {  createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup , signOut ,getAuth, onAuthStateChanged} from "firebase/auth";
import app from "../Firebase/firebase.config";
// context
export const AuthContext=createContext(null);
const auth=getAuth(app)

const Provider = ({children}) => {
const[user,setUser]=useState(null);
const [load,setLoading]=useState(true);
// create user--------------
const createUser=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password);
}


//----------------------- sign in (login)----------------------------------
const signIn=(email,password)=>{
  setLoading(true);
   return signInWithEmailAndPassword(auth,email,password);
}

//------------------- signOut------------------
const logOut=()=>{
  setLoading(true) 
    return signOut(auth);
}

// -------------------sing in google-----------------


const signInWithGoogle = async () => {
  setLoading(true)
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user); 
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  //------------- user manage -----------------------
useEffect(()=>{
  const unSubcribe=onAuthStateChanged(auth,currentUser=>{
    console.log('user in the auth changed'.currentUser);
    setUser(currentUser)
    setLoading(false)
  })
  return()=>unSubcribe();
},[])


//------------------ data send child---------------------

const authInfo={
    user,createUser,signIn,logOut,  signInWithGoogle,
}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default Provider;