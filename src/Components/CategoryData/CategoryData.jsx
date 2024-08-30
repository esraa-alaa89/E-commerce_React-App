/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import ProductsDataList from '../ProductsDataList/ProductsDataList';
import { useParams } from 'react-router-dom';
import { RevolvingDot } from 'react-loader-spinner';

export default function CategoryData() {
  let {categoryName}=useParams();
  console.log(categoryName);
  

  const fetchProductsCategory = async () => {
    return await axios.get(`https://dummyjson.com/products/category/${categoryName}?limit=10&skip=0&select=title,price,description,thumbnail,category,rating,discountPercentage,stock`);
  };
  const {data, isLoadin, isError}= useQuery('fetchProductsCategory', fetchProductsCategory);

  return <>
    {isLoadin ? <div className="d-flex justify-content-center align-items-center">
        <RevolvingDot
        visible={true}
        height="100"
        width="100"
        color="green"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /></div>
      : 
      <ProductsDataList products={data?.data.products} viewAll={`/viewAllProducts/${data?.data.total}/${data?.data.products[0].id-1}`} showAllBtn={true} />
    }
  </>
}
