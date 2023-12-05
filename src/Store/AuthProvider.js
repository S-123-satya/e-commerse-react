import React, { useReducer } from "react";
import AuthContext from "./auth-context";
const stored_token=localStorage.getItem('token');
const reducerFxn = (state, action) => {
  if (action.type === "LOGIN") {
    localStorage.setItem("token", action.token);
    return {isLogin:!!action.token, token: action.token };
  } else if (action.type === "LOGOUT") {
    localStorage.removeItem('token')
    return {isLogin:false, token: null };
  }
  return {token: stored_token };
};
const AuthProvider = (props) => {
  const [authState, authDispachAction] = useReducer(reducerFxn, {
    isLogin:!!stored_token,
    token: stored_token,
  });
  const loginHandler = (token) => {
    authDispachAction({ type: "LOGIN", token });
  };
  const logoutHandler = () => {
    authDispachAction({ type: "LOGOUT" });
  };
  return <AuthContext.Provider
    value={{
      isLogin:!!authState.token,
      token: authState.token,
      login: loginHandler,
      logout: logoutHandler,
    }}
    >
    {props.children}
  </AuthContext.Provider>;
};
export default AuthProvider;
