/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import HomeStyle from './Home.module.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import ProductsDataList from '../ProductsDataList/ProductsDataList';
import HomeTitle from '../HomeTitle/HomeTitle';
import { CartContext } from '../../Context/CartContext';
import { UserContext } from '../../Context/UserContext';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import { WishListContext } from '../../Context/WishListContextProvider';
import Loading from '../Loading/Loading';
import Countdown from 'react-countdown';

export const fetchProducts = async (limit, skip) => {
  const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,description,thumbnail,category,rating,discountPercentage,stock`);
  return response;
};

export default function Home() {
  const {userToken}= useContext(UserContext);
  let cart= useContext(CartContext);
  let wishList= useContext(WishListContext);
  

  const {data: productsList1 = [], isLoading: isLoading1, isError: isError1}= useQuery('todayList', ()=>fetchProducts(10, 39));

  const {data: productsList2 = [], isLoading: isLoading2, isError: isError2}= useQuery('monthList', ()=>fetchProducts(6, 90));

  const {data: productsList3 = [], isLoading: isLoading3, isError: isError3}= useQuery('allProducts', ()=>fetchProducts(10, 104));

  // slider for today's products show
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    arrows:false,
    dots:true,
    responsive: [
      {
        breakpoint: 1700, // Laptops and computers
        settings: {
          slidesToShow: 5, // Show 5 slides
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200, // Desktop and large tablets
        settings: {
          slidesToShow: 4, // Show 4 slides
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992, // Tablets and small desktops
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // Extra small devices
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      }
    ]
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return '00:00:00';
    } else {
      // Render a countdown
      return <>
        <div className='flex items-center mt-5'>
          <HomeTitle date={'Today’s'} title={'Flash Sales'} />

          <div className={HomeStyle.counter}>
            <div  className={`${HomeStyle.counter} flex pt-4 ps-5`}>
              <div className='d-flex flex-column lg:text-2xl '>
                <div>Days</div>
                <div className='self-center pt-2 text-xl'>{days}</div>
              </div>

              <div className='px-3'>:</div>
              
              <div className='d-flex flex-column lg:text-2xl '>
                <div>Hours</div>
                <div className='self-center pt-2 text-xl'>{hours}</div>
              </div>

              <div className='px-3'>:</div>

              <div className='d-flex flex-column lg:text-2xl '>
                <div>Minutes</div>
                <div className='self-center pt-2 text-xl'>{minutes}</div>
              </div>

              <div className='px-3'>:</div>

              <div className='d-flex flex-column lg:text-2xl '>
                <div>Seconds</div>
                <div className='self-center pt-2 text-xl'>{seconds}</div>
              </div>
            </div>
          </div>
        </div>
      </>
    }
  };
  

  return <> 
  {/* side-bar for categories with home slider */}
  {userToken !== null ? <CategoriesBar/> : '' }

    {/* today's list */}
    <Countdown date={Date.now() + 99999999000} renderer={renderer} />

    {isLoading1 ? <Loading/>
      :
      <>
        <div className="slider-container">
          <Slider {...settings}>
            {productsList1.data?.products.map((product)=> {
              return <div key={product.id} className="w-1/2">
                  <div className="product">
                    <div className={`${HomeStyle.productContainer}`}>
                      <div className={`${HomeStyle.productImg} bg-light text-center m-auto`}>
                        <img className='w-full m-auto' src={product.thumbnail} alt="" />

                        <span onClick={()=>cart.addToCart(product)} className={`${HomeStyle.addToCart} cursor-pointer`}>Add to cart</span>

                        <span onClick={()=>wishList.addToWishList(product)} className={` cursor-pointer`}>
                          <i className={`${HomeStyle.heartIcon} fa-solid fa-heart text-black`}></i>
                        </span>
                        
                        <Link className={`cursor-pointer`} to={`/productDetails/${product.id}/${product.category}`}>
                          <i className={`${HomeStyle.eyeIcon} fa-solid fa-eye`}></i>  
                        </Link>
                        
                        {(product.discountPercentage > 1) ? <div className={`${HomeStyle.discount}`}>
                          {Math.floor((product.discountPercentage)) } %
                        </div> : ''}
                        
                      </div>

                      <div className={`${HomeStyle.productText} pt-3`}>
                        <h6>{product.title}</h6>
                        <p><small>EGP</small>{((product.price)/(product.discountPercentage)).toFixed(2)} 
                          <span className='ps-2 text-decoration-line-through'><small>EGP</small>{(product.price).toFixed(0)}</span>
                        </p>
                        <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-yellow-400 pe-1 fs-6'></i>
                        {(product.rating > 4) ? <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i> : '' }
                        <span className='lead fs-6'>({product.stock})</span>
                      </div> 
                    </div> 

                    <div className={`${HomeStyle.sliderBtn}`}>
                      <button className='slick-prev'><i className="fa-solid fa-arrow-right"></i></button>
                      <button className='slick-next'><i className="fa-solid fa-arrow-left"></i></button>
                    </div>
                  </div>
                </div>
              }
            )}
          </Slider>
        </div> 

        <Link to='/viewAllProducts/40/39' className='m-auto text-center d-block'>
          <button className='btn bg-danger text-white px-5 mt-2'>View all products</button>
        </Link>
        <hr className='mt-5' />
      </>
    }

    {/* categories data */}
    <HomeTitle date={'Categories'} title={'Browse By Category'} />
    <div className={`${HomeStyle.categoryContainer} row g-4`}>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/mobile-accessories'>
          <div className={`${HomeStyle.categoryElement}`}>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <p>Mobile Accesories</p>
          </div>
        </Link>
      </div>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/motorcycle'>
          <div className={`${HomeStyle.categoryElement}`}>
            <i className="fa-solid fa-motorcycle"></i>
            <p>MotorCycles</p>
          </div>
        </Link>
      </div>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/sunglasses'>
          <div className={`${HomeStyle.categoryElement}`}>
            <i className="fa-solid fa-glasses"></i>
            <p>Sun glasses</p>
          </div>
        </Link>
      </div>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/vehicle'>
          <div className={`${HomeStyle.categoryElement}`}>
            <i className="fa-solid fa-car"></i>
            <p>Vehicles</p>
          </div>
        </Link>
      </div>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/fragrances'>
            <div className={`${HomeStyle.categoryElement}`}>
              <i className="fa-solid fa-spray-can-sparkles"></i>
              <p>Fragrances</p>
            </div>
        </Link>
      </div>
      <div className="col-6 col-md-4 col-xl-2">
        <Link to='/categories/kitchen-accessories'>
          <div className={`${HomeStyle.categoryElement}`}>
            <i className="fa-solid fa-bowl-rice"></i>
            <p>Kitchen Accessories</p>
          </div>
        </Link>
      </div>
    </div>
    <hr className='mt-5' />

    {/* month's  list */}
    <HomeTitle date={'This Month'} title={'Best Selling Products'} />
    {isLoading2 ? <Loading />
      : <>
        {<ProductsDataList products={productsList2?.data.products} viewAll={'/viewAllProducts/40/90'} showAllBtn={true} />}
      </>
    }

    {/* our products list */}
    <HomeTitle date={'Our Products'} title={'Explore Our Products'} />
    {isLoading3 ? <Loading/>
    : <>
      {<ProductsDataList products={productsList3?.data.products} viewAll={'/viewAllProducts/40/115'} showAllBtn={true} />}
      
    </>

    }
     
  </>
}
