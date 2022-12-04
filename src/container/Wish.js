import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import AuthContext from '../context/AuthContext'
const Wishlist = () => {
    const { wishProduct ,setWishProduct} = useContext(AuthContext)
    return (
        <div className='container '>
            <div className='row  justify-content-center' >
                {wishProduct.length > 0 ? wishProduct.map((data) => {

                    return (<Card data={data}></Card>)
                }) : ""}
                {wishProduct.length > 0 ? "" : <div className='d-flex flex-column-reverse col-6 align-items-center justify-content-center mt-4'>
                    <Link className='fs-5 btn btn-secondary my-4 text-decoration-none text-dark btn_custome' to={'/shop'}>Add items</Link>
                    <h1 className='text-center mt-4'>Your have no items in Wishlist!</h1>
                </div>}
            </div>
            {wishProduct.length > 0 ? <div className='d-flex justify-content-center my-4'><button onClick={()=>setWishProduct([])} className='btn my-4 w-25 btn-danger text-center btn_custome'>Clear Wishlist</button></div> : ""}
        </div>
    )
}

export default Wishlist