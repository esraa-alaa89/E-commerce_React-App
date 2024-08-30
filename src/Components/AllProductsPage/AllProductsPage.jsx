/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';
import HomeStyle from '../Home/Home.module.css';
import { useQuery } from 'react-query';
import { RevolvingDot } from 'react-loader-spinner';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../Home/Home';
import ProductsDataList from '../ProductsDataList/ProductsDataList';

export default function AllProductsPage() {
    
  const {limit, skip}= useParams();

  let {data: productsList= [], isLoading, isError}= useQuery('viewAllProducts',()=>fetchProducts(limit,skip));


  return <>
    {isLoading ? <div className="d-flex justify-content-center align-items-center">
        <RevolvingDot
          visible={true}
          height="100"
          width="100"
          color="green"
          ariaLabel="revolving-dot-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div> 
      : <> 
        {/* go to products-data-list */}

        <ProductsDataList products={productsList?.data.products} showAllBtn={false} />
      </>
    }
  </>
}
