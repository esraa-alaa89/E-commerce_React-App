/* eslint-disable no-unused-vars */
import React from 'react'

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const WishListContext = createContext();

export default function WishListContextProvider(props) {
    const wishListProductsSorage = 'wishListProducts';
    const wishListCounterStorage = 'wishListCounter';

    const [wishListCounter, setWishListCounter] = useState(() => {
        const storedCounter = localStorage.getItem(wishListCounterStorage);
        return storedCounter ? parseInt(storedCounter, 10) : 0;
    });
    const [wishListProducts, setWishListProducts] = useState(() => {
        const storedCart = localStorage.getItem(wishListProductsSorage);
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        // update localStorage if wishListProducts is changed
        localStorage.setItem(wishListProductsSorage, JSON.stringify(wishListProducts));
    }, [wishListProducts]);

    useEffect(() => {
        // update localStorage if wishListCounter is changed
        localStorage.setItem(wishListCounterStorage, wishListCounter.toString());
    }, [wishListCounter]);

    function addToWishList(product) {
        // check existance of this product in the cart or not
        const existingProductIndex = wishListProducts.find(item => item.id === product.id);

        if (existingProductIndex) {
            // if product is found --> update quantity of this product
            const updatedwishListProductsQuantity = wishListProducts.map((item) => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setWishListProducts(updatedwishListProductsQuantity);
        } 
        else {
            // add new product to cart
            const newProduct = { ...product, quantity: 1 };
            setWishListProducts([...wishListProducts, newProduct]);
            setWishListCounter(wishListCounter => wishListCounter + 1);
        }
        Swal.fire({
            icon: 'success',
            title: 'Done.',
            text: 'Added successfully',
        });
    }

    return (
        <WishListContext.Provider value={{ wishListCounter, setWishListCounter, wishListProducts, setWishListProducts, addToWishList }}>
            {props.children}
        </WishListContext.Provider>
    );
}

