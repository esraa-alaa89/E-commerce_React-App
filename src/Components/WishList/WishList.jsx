/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { WishListContext } from '../../Context/WishListContextProvider'
import ProductsDataList from '../ProductsDataList/ProductsDataList';
import { CartContext } from '../../Context/CartContext';
import HomeTitle from '../HomeTitle/HomeTitle';
import { fetchProducts } from '../Home/Home';
import { useQuery } from 'react-query';
import { data } from 'autoprefixer';

export default function WishList() {
    const {wishListProducts, setWishListProducts, setWishListCounter}= useContext(WishListContext);
    const {setCartProducts, setCounter}= useContext(CartContext);
    // add all wishlist product into cart list
    const moveAllToCart = () => {
      setCartProducts((prevCartItems) => {
          const updatedCartProducts = [...prevCartItems];
          wishListProducts.forEach(product => {
              const existingProductIndex = updatedCartProducts.find(item => item.id === product.id);
              if (existingProductIndex) {
                  existingProductIndex.quantity += 1;
              } else {
                  updatedCartProducts.push({ ...product, quantity: 1 });
              }
          });
          return updatedCartProducts;
      });
      setWishListProducts([]);
      setCounter(counter => counter + wishListProducts.length);
      setWishListCounter(0);
    }

    let {data}= useQuery('getSuggestion', ()=>fetchProducts(6,58));


    return <>
      {wishListProducts.length ? <>
          <div className='flex justify-between items-center'>
            <h3 className='text-3xl text-black-900 py-3'>
              Your WishList
              <i className={`fa-solid fa-heart text-2xl text-red-600 ps-2`}></i>
            </h3> 
            <button onClick={()=> moveAllToCart()} className='btn btn-danger px-5 py-2 cursor-pointer'>
              Move all to bag
            </button>
          </div>
          {<ProductsDataList products={wishListProducts} showAllBtn={false} />} 

          <HomeTitle date={'Suggestions'} title={'Just for you'}/>
          <ProductsDataList products={data?.data.products} viewAll={'/viewAllProducts/40/58'} showAllBtn={true} />
        </>
        : 
        <div className="flex justify-center items-center my-10 shadow-lg">
          <h3 className='text-3xl text-black-900 py-5'>
            You haven't products to wish yet!
            <i className={`fa-solid fa-heart-crack text-2xl text-red-600 ps-2`}></i>
           </h3> 
        </div>
      }
    </>
}
