import React from 'react';
import './Headphones.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const Headphones = ({ headphone, addToCart }) => {
    const { image, name, price, brand, category } = headphone;

    return (
        <div className='headphones-container'>
            <img src={image} alt="" />
            <div className='headphone-info'>
                <h2>{name}</h2>
                <p className='headphone-price'>Price: €{price}</p>
                <p className='headphone-brand'>Brand: {brand}</p>
                <p className='headphone-category'>Type: {category}</p>
            </div>
            <button onClick={() => addToCart(headphone.name)} className='button-add-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faHeadphonesSimple} />
            </button>
        </div>
    );
};

export default Headphones;