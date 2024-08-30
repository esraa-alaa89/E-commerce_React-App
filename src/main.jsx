import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import App from './App';
import UserContextProvider from './Context/UserContext';
import CartContextProvider from './Context/CartContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import WishListContextProvider from './Context/WishListContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
//to make all data cashed in browser and check everyTime if it changed(to replace it)or not
const queryClient= new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <CartContextProvider>
          <WishListContextProvider>
            <App />
          </WishListContextProvider>
        </CartContextProvider>
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen='false' position='bottom-right'/>
    </QueryClientProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
