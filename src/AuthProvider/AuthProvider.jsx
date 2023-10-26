import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
const [user, setUser] = useState([])
const [loading, setLoading] = useState(true)


const createUser = (email, password) => {
    setLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
}

const sinInUser = (email, password) => {
    setLoading(false)
    return signInWithEmailAndPassword(auth, email, password)
}

useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    })
    return () =>{
        unSubscribe()
    }
} ,[]) 

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

    const auth = getAuth(app)
    const authInfo = {user, loading, createUser, sinInUser,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;