import {  Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
  const auth = localStorage.getItem('user')
  
  return auth ? children : <Navigate to='/register' />
}

