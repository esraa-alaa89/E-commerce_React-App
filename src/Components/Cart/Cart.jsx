/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext';
import CartStyle from '../Cart/Cart.module.css';
import Swal from 'sweetalert2';


export default function Cart() {
  let {cartProducts, setCartProducts, counter, setCounter}= useContext(CartContext);
  // increase product quantity
  function increaseProductQuantity(productId) {
    setCartProducts((prevItems) => prevItems.map( (item) => item.id === productId ? 
      { ...item, quantity: item.quantity + 1 }
      : item
      )
    )
  }

  // decrease product quantity
  function decreaseProductQuantity(productId) {
    setCartProducts((prevItems) => prevItems.map( (item) => item.id === productId ? 
      { ...item, quantity: Math.max(item.quantity - 1, 1) }
      : item
      )
    )
  }

  // delete product from the cart
  function deleteCartProduct(id) {
    const newCartProducts= cartProducts.filter((cartItem) => cartItem.id !== id);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts))
    setCartProducts([...newCartProducts]);

    Swal.fire({
      title: "Are you sure?",
      text: "Delete this item from cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Product is deleted!",
          icon: "success"
        });
      }
    });
    setCounter(()=>counter-1);
    
  }

  const navigate= useNavigate();
  // fuction to navigate to checkout pafe
  function getCheckout() {
    navigate('/checkout');
  }
  let totalPrice= cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(0);  
 
  
  
  return <>

    {!cartProducts.length ? <div className="flex justify-center items-center my-5 shadow-md">
        <h3 className='text-3xl text-black-900 py-5'>Your cart is empty!</h3> 
      </div>: <>
    
      <div className="position-relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-100 text-xl text-center text-black-500 dark:text-black-400">
          <thead className="text-lg text-black-100 bg-black-50 dark:bg-black-700 dark:text-black-400 my-10">
              <th scope="col" className="px-4 py-2">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-3 py-1">
                Product
              </th>
              <th scope="col" className="px-3 py-1">
                Quantity
              </th>
              <th scope="col" className="px-3 py-1">
                Subtotal
              </th>
              <th scope="col" className="px-3 py-1">
                Action
              </th>
          </thead>

          <tbody>
            {cartProducts.map( (cartProduct) => { 
              return <tr className='my-5' key={cartProduct.id}>
                  <td><img src={cartProduct.thumbnail} className="w-30 h-30 md:w-32 md:h-32 max-w-full max-h-full" alt={cartProduct.title} /></td>
                  <td><span className='text-xl'>{cartProduct.title}</span></td>

                  <td>
                    <div className="flex justify-center items-center">

                      <button onClick={()=> decreaseProductQuantity(cartProduct.id)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black-500 bg-white border border-black-300 rounded-full focus:outline-none hover:bg-black-100 focus:ring-4 focus:ring-black-200 dark:bg-black-800 dark:text-black-400 dark:border-black-600 dark:hover:bg-black-700 dark:hover:border-black-600 dark:focus:ring-black-700" type="button">

                        <span className="sr-only">Quantity button</span>
                        
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M1 1h16" />
                          </svg>
                      </button>

                      <span>{cartProduct.quantity}</span>

                      <button onClick={()=>increaseProductQuantity(cartProduct.id)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black-500 bg-white border border-black-300 rounded-full focus:outline-none hover:bg-black-100 focus:ring-4 focus:ring-black-200 dark:bg-black-800 dark:text-black-400 dark:border-black-600 dark:hover:bg-black-700 dark:hover:border-black-600 dark:focus:ring-black-700" type="button">

                        <span className="sr-only">Quantity button</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                  </td>

                  <td><small>EGP</small>{(cartProduct.price * cartProduct.quantity).toFixed(0)}</td>
                  <td><Link onClick={()=>deleteCartProduct(cartProduct.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete Item</Link></td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>

      <div className='m-auto text-center'>
        <button className='btn btn-danger px-4 py-3 mb-10'>
          <Link to='/'>Return to shop</Link>
        </button>
      </div>

      <section className='total-cart'>
          <div className="row">
            <div className="col-md-6 mb-5 bg-blue flex items-center">
              <input className='col-5 mb-3 text-md pb-2 focus:border-8' type="text" placeholder='Coupon Code' />
              <div className="offset-1"></div>
              <button className='col-5 btn btn-danger text-center py-2'>Apply copon</button>
            </div>
            <div className="col-md-6 mb-5 bg-green md:px-7 bg-gray border-3 border-secondary p-6">
              <h3 className='text-3xl text-black-900 pb-4'>Cart Total:</h3>
              <div className="calc flex justify-between bg-yellow">
                <span className='text-xl text-900'>Subtotal:</span>
                <span className='text-xl text-red-600'><small>EGP</small>{totalPrice}</span>
              </div>
              <hr className='my-3' />
              <div className="calc flex justify-between bg-yellow">
                <span className='text-xl text-900'>Shipping</span>
                <span className='text-xl text-900'>free</span>
              </div>
              <hr className='my-3' />
              <div className="calc flex justify-between bg-yellow">
                <span className='text-xl text-900'>Total:</span>
                <span className='text-xl text-red-600'><small>EGP</small>{totalPrice}</span>
              </div>
              <div className="text-center mt-6">
                <button onClick={getCheckout} className='btn btn-danger px-4 py-3'>Procees to checkout</button>
              </div>
            </div>
          </div>
      </section>
    </>}
  </>
}