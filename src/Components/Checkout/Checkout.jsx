/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import cash1 from '../../Assets/Images/cash-img1.png';
import cash2 from '../../Assets/Images/cash-img2.png';
import cash3 from '../../Assets/Images/cash-img3.png';
import cash4 from '../../Assets/Images/cash-img4.png';
import Swal from 'sweetalert2';

export default function Checkout() {
    const {cartProducts}= useContext(CartContext);
    let totalPrice= cartProducts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(0); 
    function addOrder() {
        Swal.fire({
            icon: 'success',
            title: 'Your order is done',
        });   
    }
    
    return <>
        {cartProducts.length ? <>
        <section className='checkout py-10'>
            <div className="row gx-xl-3 gx-xxl-5">
                <h3 className='text-3xl text-black-900 pb-3'>Billing Details</h3>
                <div className="col-lg-6 mb-4">
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">First Name <span className='text-danger'>*</span></label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Company Name</label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle' type="text" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Street Address <span className='text-danger'>*</span></label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Apartment, floor, etc. (optional)</label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Town/City<span className='text-danger'>*</span></label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="text" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Phone Number<span className='text-danger'>*</span></label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="tel" />
                    </div>
                    <div className="input-content my-3">
                        <label className='text-lg text-gray-400' htmlFor="">Email Address<span className='text-danger'>*</span></label>
                        <input className='form-control py-1 my-2 border border-1 bg-light-subtle ' type="email" />
                    </div>

                    <div className='cursor-pointer'>
                        <input className='cursor-pointer' type="checkbox" />
                        <label className='ps-2 cursor-pointer' htmlFor="">Save this information for faster check-out next time</label>
                    </div>
                </div>
                
                <div className="col-lg-6 lg:px-8">
                    {cartProducts.map((cartProduct)=> {
                        return <div key={cartProduct.id} className="col mb-3">
                            <div className="flex justify-between items-center">
                                <div className='flex items-center'>
                                    <img className='w-1/4 text-start' src={cartProduct.thumbnail} alt="" />
                                    <h4 className='w-3/4 text-xl'>{cartProduct.title}</h4>
                                </div>
                                <h4 className='text-xl text-red-600'><small>EGP</small>{(cartProduct.price).toFixed(0)}</h4>
                            </div>
                        </div>
                        })
                    }

                    <div className='calc-total-price py-3'>
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
                    </div>

                    <div className="checkout-ways position-relative">
                        <div className='checkout-input my-3'>
                            <input className='cursor-pointer' id='bank' type="radio" value={'checkout-ways'} />
                            <label className='ps-3' htmlFor="bank">Bank</label>
                        </div>
                        <div className='checkout-input my-3'>
                            <input className='cursor-pointer' id='cash' type="radio" value={'checkout-ways'} />
                            <label className='ps-3' htmlFor="cash">Cash on delivery</label>
                        </div>
                        <div className='flex items-center position-absolute end-0 top-50 transformY-50'>
                            <img className='w-26 h-10 pe-0' src={cash1} alt="" />
                            <img className='w-10 h-6 pe-2' src={cash2} alt="" />
                            <img className='w-10 h-6 pe-0' src={cash3} alt="" />
                            <img className='w-30 h-10 p-0 m-0' src={cash4} alt="" />
                        </div>
                    </div>

                    <div className='my-4'>
                        <input className='col-5 mb-3 text-md me-10 pb-2 focus:border-8' type="text" placeholder='Coupon Code' />
                        <button className='col-5 btn btn-danger text-center py-2'>Apply copon</button>
                    </div> 
                    <button onClick={addOrder} className='btn btn-danger flex items-center py-0'>
                        <span className='text-lg'>Place order now</span>
                        <i className="fa-regular fa-face-smile-beam text-lg p-3"></i>
                    </button>
                    
                </div>
            </div>
        </section>

        </> : <div className="flex justify-center items-center">
            <h3 className='text-3xl text-black-900 py-5'>
                You haven't orders yet! <i className="fa-regular fa-face-sad-cry text-3xl text-black-500"></i>
            </h3> 
        </div>
    }
        
    </>
}
