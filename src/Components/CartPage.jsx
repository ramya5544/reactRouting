import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/home')
    }
    return (
        <div>
            <h1>this is cart page</h1>
            <button onClick={handleClick}>Go to home page</button>
        </div>
    );
};

export default CartPage;
