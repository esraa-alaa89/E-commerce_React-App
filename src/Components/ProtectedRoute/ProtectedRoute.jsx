import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  if (localStorage.getItem('userToken') !== null) {
    console.log('from ProtectedRoute');
    
    // console.log(localStorage.getItem('userToken'));
    
    return props.children;
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
