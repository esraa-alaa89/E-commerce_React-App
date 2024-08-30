/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import HomeStyle from '../Home/Home.module.css';
import { CartContext } from '../../Context/CartContext';
import { WishListContext } from '../../Context/WishListContextProvider';


export default function ProductsDataList({products, viewAll, showAllBtn}) {
    const cart= useContext(CartContext);
    const wishList= useContext(WishListContext);

    return <> {products?.map((product)=> <div key={product.id} className="col col-md-4 col-lg-2">
                <div className={`${HomeStyle.productContainer}`}>
                    <div className={`${HomeStyle.productImg} bg-light text-center`}>
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
                        <p className='flex items-center'><small>EGP</small>{((product.price)/(product.discountPercentage)).toFixed(2)} 
                            <span className='ps-2 text-decoration-line-through'><small>EGP</small>{(product.price).toFixed(0)}</span>
                        </p>
                        
                        <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i>
                        <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i>
                        {(product.rating > 4) ? <i className='fas fa-solid fa-star text-warning pe-1 fs-6'></i> : '' }
                        
                        <span className='lead fs-6'>({product.stock})</span>
                    </div> 
                </div> 
            </div>
        )}
        {showAllBtn && <>
            <Link to={viewAll} className='m-auto text-center d-block'>
                <button className='btn bg-danger text-white px-5 mt-2'>View all products</button>
            </Link>
        </>}
        <hr className='mt-5' />
    </>
}
