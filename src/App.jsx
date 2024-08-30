/* eslint-disable no-unused-vars */

import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import { useContext, useEffect } from 'react';
import { UserContext } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import AllProductsPage from './Components/AllProductsPage/AllProductsPage';
import CategoryData from './Components/CategoryData/CategoryData';
import WishList from './Components/WishList/WishList';
import Profile from './Components/Profile/Profile';
import Checkout from './Components/Checkout/Checkout';

let router= createHashRouter([
  {path:'/', element:<Layout/>,  
    children:[    
      {path:'/', element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'/home', element:<ProtectedRoute><Home/></ProtectedRoute>},
      {path:'/productDetails/:id/:category', element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
      {path:'/viewAllProducts/:limit/:skip', element:<ProtectedRoute><AllProductsPage/></ProtectedRoute>},
      {path:'/categories/:categoryName', element:<ProtectedRoute><CategoryData/></ProtectedRoute>},
      {path:'/cart', element:<ProtectedRoute><Cart/></ProtectedRoute>},
      {path:'/wishlist', element:<ProtectedRoute><WishList/></ProtectedRoute>},
      {path:'/checkout', element:<ProtectedRoute><Checkout/></ProtectedRoute>},
      {path:'/contact', element:<ProtectedRoute><Contact/></ProtectedRoute>},
      {path:'/about', element:<ProtectedRoute><About/></ProtectedRoute>},
      {path:'/profile', element:<ProtectedRoute><Profile/></ProtectedRoute>},
      {path:'/signup', element:<SignUp/>},
      {path:'/login', element:<Login/>},
      {path:'*', element:<NotFound/>},
    ]
  }
], 
)

function App() {
  const {setUserToken}= useContext(UserContext);
  
  useEffect(()=>{
    if (localStorage.getItem('userToken') !== null) {
      console.log('from useeffect not null');
      setUserToken(localStorage.getItem('userToken'));
    }
  },[]);

  
  
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>
}

export default App;
