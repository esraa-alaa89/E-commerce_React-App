/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsStyle from './ProductDetailsStyle.module.css';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import { fetchProducts } from '../Home/Home';
import ProductsDataList from '../ProductsDataList/ProductsDataList';
import { CartContext } from '../../Context/CartContext';
import { WishListContext } from '../../Context/WishListContextProvider';
import HomeTitle from '../HomeTitle/HomeTitle';
import Loading from '../Loading/Loading';

export default function ProductDetails() {
    let {id}= useParams();
    let {addToCart}= useContext(CartContext);
    let {addToWishList}= useContext(WishListContext);

    // return a single clicked product
    function getProductDetails() {
        return axios.get(`https://dummyjson.com/products/${id}`);    
    }
    let {data, isLoading}= useQuery('getProductDetails', getProductDetails, 
        {
        select: (data) => {
          const product = data;
          // إضافة خاصية quantity إذا لم تكن موجودة
          if (product.quantity === undefined) {
            product.quantity = 1; // تعيين قيمة افتراضية لـ quantity
          }
          return product;
        }}
    )
    const [quantity, setQuantity] = useState(1);
    const productQuantity = data?.data.quantity || quantity;
    

    // return all products with all categories and filter only category that match with category I just sent
    let {data:relatedData= [], isLoading:isLoadingRelated}= useQuery('getRelatedProducts', ()=>fetchProducts(194,0));
    let relatedProductsList= relatedData?.data?.products.filter((product)=> data?.data?.category == product.category);

    // img-slider
    let settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:false
    };
    
    return <>
        {isLoading ? <Loading/> : <>
            <div className="col-12 py-5">
                <div className={`${ProductDetailsStyle.productContainer}`}>
                    <div className="row gx-md-4 gx-xxl-5">
                        <div className="col-md-6 cursor-pointer">
                            <div className="row justify-center items-center">
                                <div className="col-md-4">
                                    <Slider {...settings} className='slider-here'>
                                        <div>
                                            {data?.data.images.map(((imageSrc, index) => {
                                                return <div className='block bg-light w-3/4 bg-light m-auto mb-3' key={index}>
                                                    <img src={imageSrc} />
                                                </div>
                                            }))}
                                        </div>
                                    </Slider>
                                </div>

                                <div className="col-md-8 bg-light flex justify-center items-center">
                                    <img className='img-fluid' src={data.data.thumbnail} />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className={`${ProductDetailsStyle.productText} pt-3`}>
                                <h4 className='text-4xl text-black-900 pb-3'>{data.data.title}</h4>
                                <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                                <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                                <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                                <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>

                                {(data.data.rating < 4) ? <i className='fas fa-solid fa-star pe-1 fs-6'></i> : '' }
                                <span className='text-gray-500 px-2'>|</span>
                                {data.data.stock?<span className='text-lg text-green-500 fs-6'>(In stock)</span>:''}
                                
                                <span className='block pt-3 text-xl text-black-400'><small>EGP</small>{((data.data.price)/(data.data.discountPercentage)).toFixed(2)} 
                                    <span className='ps-2 text-decoration-line-through text-red-400'><small>EGP</small>{(data.data.price).toFixed(0)}</span>
                                </span>
                                <p className='text-lg space-x-1 py-3'>{data.data.description}</p>
                                <hr />
                                <div className="flex justify-between items-center my-4">

                                    <div className='flex justify-center items-center w-16 px-5 py-2 border-3 rounded'>
                                        <button onClick={()=> setQuantity(quantity - 1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-black-500 bg-white border border-black-300 rounded-full focus:outline-none hover:bg-black-100 focus:ring-4 focus:ring-black-200 dark:bg-black-800 dark:text-black-400 dark:border-black-600 dark:hover:bg-black-700 dark:hover:border-black-600 dark:focus:ring-black-700" type="button">

                                        <span className="sr-only">Quantity button</span>

                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M1 1h16" />
                                        </svg>
                                        </button>
                                        <span>{productQuantity}</span>
                                        <button onClick={()=>setQuantity(quantity + 1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-black-500 bg-white border border-black-300 rounded-full focus:outline-none hover:bg-black-100 focus:ring-4 focus:ring-black-200 dark:bg-black-800 dark:text-black-400 dark:border-black-600 dark:hover:bg-black-700 dark:hover:border-black-600 dark:focus:ring-black-700" type="button">

                                    <span className="sr-only">Quantity button</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M9 1v16M1 9h16" />
                                    </svg>
                                        </button>
                                    </div>

                                    <div className='bg-black text-center text-white px-5 py-2 cursor-pointer'>
                                        <button onClick={()=>addToCart(data.data)} className='cursor-pointer hover:brightness-50 hover:bg-blend-darken'>Add to cart</button>
                                    </div>
                                
                                    <div className='border-2 px-3 py-2'>
                                        <button className='hover:text-red-600' onClick={()=>addToWishList(data.data)}>
                                            <i className="fa-solid fa-heart"></i> 
                                        </button>
                                    </div>
                                </div>
                                <div className='productDetailFeatures border-1 p-3 lg:w-75'>
                                    <div className='flex items-center'>
                                        <div className=''><i className="fa-solid fa-truck-moving text-center text-4xl pe-4"></i></div>
                                        <div className=''>
                                            <h6 className='pb-1'>Free Delivery</h6>
                                            <span>Enter your postal code for Delivery Availability</span>
                                        </div>
                                    </div>
                                    <hr className='my-3' />
                                    <div className='flex items-center'>
                                        <div><i className="fa-solid fa-arrows-rotate text-center text-4xl pe-4"></i></div>
                                        <div>
                                            <h6 className='pb-1'>Return Delivery</h6>
                                            <span>Free 30 Days Delivery Returns. Details</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>

            {/* display related products */}
            <HomeTitle date={'Explore more'} title={'Related Products'} />
            {
                isLoadingRelated ? <Loading/> : <ProductsDataList products={relatedProductsList} showAllBtn={false}/>

            }
        </>}
    </>
}
