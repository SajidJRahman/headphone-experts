import React, { useEffect, useState } from 'react';
import Headphones from '../Headphones/Headphones';
import './Products.css'

const Products = () => {
    const [headphones, setHeadphones] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setHeadphones(data))
    }, []);

    const addToCart = (headphone) => {
        const newCart = [...cart, headphone];
        setCart(newCart);
    }

    const removeAll = () => {
        document.getElementById('items').innerHTML = '';
    }

    return (
        <div className='products-container'>
            <div className='headphone-container'>
                {
                    headphones.map(headphone =>
                        <Headphones
                            key={headphone.id}
                            headphone={headphone}
                            addToCart={addToCart}
                        ></Headphones>)
                }
            </div>
            <div className='order-cart'>
                <div className='order-info'>
                    <h2>Order Summery</h2>
                    <p id='items'>Items: {cart.length}</p>
                    <div className='button-group'>
                        <button className='button-random'>Choose Random</button>
                        <button onClick={removeAll} className='button-remove'>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;