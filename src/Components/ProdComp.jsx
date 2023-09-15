import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const ProdComp = () => {
    return (
        <div>
<nav>
            <h1>product entire components</h1>
            <Link to='hot product'>Hot products</Link>
            <Link to='similar products'>Similar products</Link>
            </nav>
        
            <div>
                <Outlet />
                </div>
            </div>
    );
};

export default ProdComp;