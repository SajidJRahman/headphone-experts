import React from 'react';
import './Headphones.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Headphones = () => {
    

    return (
        <div className='headphones-container'>
            <img src="" alt="" />
            <div>
                <h2>Name:</h2>
                <p>Price</p>
                <button className='button-add-cart'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faMusic} />
                </button>
            </div>
        </div>
    );
};

export default Headphones;