/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export default function CartContextProvider(props) {
    const [isFavorite, setIsFavorite] = useState(false); // حالة الأيقونة
    const [isAddedToCart, setIsAddedToCart] = useState(false); 

    
    const cartProductsSorage = 'cartProducts';
    const counterStorage = 'cartCounter';

    const [counter, setCounter] = useState(() => {
        const storedCounter = localStorage.getItem(counterStorage);
        return storedCounter ? parseInt(storedCounter, 10) : 0;
    });
    const [cartProducts, setCartProducts] = useState(() => {
        // استرجاع البيانات من localStorage عند تحميل المكون
        const storedCart = localStorage.getItem(cartProductsSorage);
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        // حفظ البيانات في localStorage عند تغيير cartProducts
        localStorage.setItem(cartProductsSorage, JSON.stringify(cartProducts));
    }, [cartProducts]);

    useEffect(() => {
        // حفظ قيمة الـ counter في localStorage عند تغييره
        localStorage.setItem(counterStorage, counter.toString());
    }, [counter]);

    function addToCart(product) {
        
        // check existance of this product in the cart or not
        const existingProductIndex = cartProducts.find(item => item.id === product.id);

        if (existingProductIndex) {
            // if product is found --> update quantity of this product
            const updatedCartProductsQuantity = cartProducts.map((item) => {
                if (item.id == product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartProducts(updatedCartProductsQuantity);
        } 
        else {
            // add new product to cart
            const newProduct = { ...product, quantity: 1 };
            setCartProducts([...cartProducts, newProduct]);
            setCounter(counter => counter + 1);
        }
        Swal.fire({
            icon: 'success',
            title: 'Done.',
            text: 'Added successfully',
        });
    }

    return (
        <CartContext.Provider value={{ counter, setCounter, cartProducts, setCartProducts, addToCart }}>
            {props.children}
        </CartContext.Provider>
    );
}
