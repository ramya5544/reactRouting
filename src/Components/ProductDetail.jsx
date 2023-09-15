import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>product detail page</h1>
            <button onClick={()=>{navigate('/cart page')}}>Go to cart</button>
        </div>
    );
};

export default ProductDetail;