import React, { useEffect, useState } from 'react';
import Headphones from '../Headphones/Headphones';
import './Products.css';

const Products = () => {
    const [headphones, setHeadphones] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setHeadphones(data))
    }, []);

    const addToCart = (name) => {
        if (cart.length < 4) {
            const newCart = [...cart, name + ' '];
            setCart(newCart);
        }
        else {
            alert('You cannot add more than 4 items')
        }
    }

    const chooseRandom = () => {
        const showRandom = Math.floor(Math.random() * cart.length);
        const randomItem = cart[showRandom];
        setRandom(randomItem);
        document.getElementById('items').innerHTML = '';
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
                <h2>Your Musical Cart</h2>
                <div id='items'>
                    <h3>{cart}</h3>
                </div>
                <h3>{random}</h3>
                <div className='button-group'>
                    <button onClick={chooseRandom} className='button-random'>Choose Random</button>
                    <button onClick={removeAll} className='button-remove'>Remove All</button>
                </div>
            </div>
        </div>
    );
};

export default Products;