import React from 'react';
import './Headphones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const Headphones = ({ headphone, addToCart }) => {
    const { image, name, price, brand, category } = headphone;

    return (
        <div className='headphones-container'>
            <img src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>Price: €{price}</p>
                <p>Brand: {brand}</p>
                <p>Category: {category}</p>
            </div>
            <button onClick={() => addToCart(headphone)} className='button-add-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faHeadphonesSimple} />
            </button>
        </div>
    );
};

export default Headphones;