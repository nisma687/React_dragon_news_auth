import {  createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from "../firebase/firebase.config";

// create a context first
// as it will be using in various places it needs to be exported
export const AuthContext=createContext(null);

const Authprovider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const auth = getAuth(app);
    const createUser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut=()=>
    {
        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
        user,createUser,signIn,logOut,loading
    };
    useEffect(()=>{
     const unsubscribe=   onAuthStateChanged(auth, (currentUser)=>{
        console.log('user in the authprovider',currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return ()=>
        {
            unsubscribe();
        }
        
    },[])



    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
Authprovider.propTypes={

    children:PropTypes.node.isRequired,


};