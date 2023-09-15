import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import NavBar from './Components/NavBar';
import ProductDetail from './Components/ProductDetail';
import CartPage from './Components/CartPage';
import NoMatch from './Components/NoMatch';
import ProdComp from './Components/ProdComp';
import HotProducts from './Components/HotProducts';
import SimilarProducts from './Components/SimilarProducts';
import UserDetail from './Components/UserDetail';
import User from './Components/User';

const App = () => {
  return (
    <div>
      {/* <p>parent page</p> */}
      <div>
        <NavBar/>
      </div>

      <Routes>
<Route path='/home' element={<HomePage/>} />
<Route path='/about' element={<AboutPage/>} />
<Route path='/product' element={<ProductDetail/>} />
<Route path='/cart page' element={<CartPage />} />

<Route path='/ProdComp' element={<ProdComp />}/>
 <Route path='hot' element={<HotProducts />}/>
<Route path='similar' element={<SimilarProducts/>}/>
<Route/>
<Route path='user' element={<User />} />
<Route path='/user/:userId' element={<UserDetail />}/>
<Route path='*' element={<NoMatch />} />
</Routes>
    </div>
  );
};

export default App;