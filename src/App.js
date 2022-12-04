import React, { Suspense, useEffect, lazy, useState } from 'react'
import './App.css'
import AuthContext from './context/AuthContext'
import Profile from './container/Profile'
import { Routes, Route } from 'react-router-dom'
import Cart from './container/Cart'
import Shoping from './container/Shoping'
import Wishlist from './container/Wish'
import ProductDetailes from './container/ProductDetailes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { productData } from './data/product'

const Home = lazy(() => import('./container/Home'));
const App = () => {
  const data = localStorage.getItem('data')
  const [modal, setModal] = useState(true);
  const [filterItem, setFilterItem] = useState(productData);

  const [cartProduct, setCartProduct] = useState([]);
  const [wishProduct, setWishProduct] = useState([]);
  const [status, setStatus] = useState(false);
  const [userData, setUserData] = useState(data ? [data] : []);

  const handleUser = (data) => {
    setUserData(data);
  }

  useEffect(() => {
    if (userData.length) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ filterItem: filterItem, setFilterItem: setFilterItem, modal: modal, setModal: setModal, user: userData, status: status, cartProduct: cartProduct, wishProduct: wishProduct, setCartProduct: setCartProduct, setWishProduct: setWishProduct }}>
      <Navbar handleUser={handleUser}></Navbar>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='cart' element={<Cart></Cart>}></Route>
          <Route path='shop' element={<Shoping></Shoping>}></Route>
          <Route path='wishlist' element={<Wishlist></Wishlist>}></Route>
          <Route path='product/:id' element={<ProductDetailes></ProductDetailes>}></Route>
        </Routes>
      </Suspense>
      <LoginModal handleUser={handleUser} ></LoginModal>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </AuthContext.Provider>
  )
}

export default App