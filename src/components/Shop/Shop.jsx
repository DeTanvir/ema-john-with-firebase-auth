import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
            // console.log(products)
    }, [])

    // useEffect( () => {
    //     const storedCart = getShoppingCart();
    //        const savedCart = [];
    //     // step 1: get id
    //     for(const id in storedCart){
    //         // step 2: get the product using id
    //         const addedProduct = products.find(product => product.id === id);
    //             // console.log(addedProduct);
    //         // step 3: get/set quantity of the addedProduct
    //         const quantity = storedCart[id];
    //         // console.log(quantity);
    //         addedProduct.quantity = quantity;
    //         console.log(addedProduct)
    //         // step 4: save the addedProduct to the savedCart
    //         savedCart.push(addedProduct);
    //     }
    //         // step 5: set the cart
    //         setCart(savedProduct);
    // }, [products])


    useEffect( () => {
               // step 1:
        const storedCart = getShoppingCart();
        const savedCart = [];
               // step 2: 
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // step 3:
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4:
                savedCart.push(addedProduct);
            }
        }
            //    step 5:
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product) => {
        // console.log(product)
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity =  1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;