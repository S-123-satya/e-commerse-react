import React from "react";
const AuthContext=React.createContext({
    isLogin:false,
    token:'',
    login:(token)=>{},
    logout:()=>{}
})



export default AuthContext;
