import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { productData } from '../data/product'
import { toast } from 'react-toastify';

const Card = ({ data }) => {
    const { cartProduct, wishProduct, setCartProduct, setWishProduct, status } = useContext(AuthContext)
    const handleWish = (id) => {
        const wishList = productData.filter(item => item.id === id);
        setWishProduct([...wishProduct, ...wishList]);
        notifySuc('Item Added to Wishlist');

    }
    const handleCart = (id) => {
        const cartList = productData.filter(item => { return item.id === id });
        setCartProduct([...cartProduct, ...cartList]);
        notifySuc('Item Added to Cart')

    }
    
    const notifySuc = (v) => toast.success(v, {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notify = () => toast.warn('please login first', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    return (
        <div value={data.gender} id={data.id} className='col-lg-4 col-xl-3 my-4 col-sm-6 col-md-6 '>
            <div className="card card_wrapper" style={{ width: "100%" }}>
                <Link to={`/product/${data.id}`}>
                    <div className='image_container'>
                        <img src={data.image} className="card-img-top" alt="..." />
                    </div>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">Rs.{data.price}</p>
                    <hr />
                    <div className='d-flex justify-content-around'>
                        <button className='btn  btn-primary btn_custome' onClick={() => status ? handleWish(data.id) : notify()}><i class="fa-regular fa-heart"></i></button>
                        <button className='btn btn-primary btn_custome' onClick={() => status ? handleCart(data.id) : notify()}><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                </div>
            </div>

        </div>)
}

export default Card