import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import { productData } from '../data/product'
const Navbar = ({ handleUser }) => {
    const { status, setModal, cartProduct,setFilterItem ,setCartProduct} = useContext(AuthContext);
    const handleLogout = () => {
        handleUser([])
        setModal(true);
        setCartProduct([]);
        localStorage.setItem('data', '')
    }
    const handleFilter = (e) => {
        setFilterItem(productData.filter(item =>{ return( item.name.toLowerCase().includes( e.target.value.toLowerCase()))}))
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid mx-4">
                <Link className="navbar-brand fw-bold fs-3" to={'/'}>  <i className="fas fa-gem me-2"></i>Sigma</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-lg-flex justify-content-end  text-center" id="navbarSupportedContent">
                    <form className="d-flex me-4 ">
                        <input onChange={(e) => handleFilter(e)}  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary btn_custome" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav mb-2 mb-lg-0" >
                        <li className="nav-item me-2 " >
                            <Link className="nav-link active" to={'/shop'}><i className="fa-solid fa-shop"></i><br />Shoping</Link>
                        </li>
                        {status ? <li className="nav-item me-2">
                            <Link className="nav-link active" to={'profile'}><i className="fa-solid fa-xl fa-user"></i> <br />Profile</Link>
                        </li> : ''}
                        {status ? <li className="nav-item me-2">
                            <Link className="nav-link " aria-current="page" to="/wishlist"><i className="fa-regular fa-xl fa-heart"></i><br />Wishlist</Link>
                        </li> : ''}

                        <li className="nav-item me-2">
                            <Link className="nav-link" to={'cart'}><i className="fa-solid fa-xl fa-bag-shopping"></i><br />Cart({cartProduct.length})</Link>
                        </li>
                    </ul>
                    <div>
                        {status ? "" : <Link className='btn btn_custome btn-primary' data-bs-toggle='modal' data-bs-target='#login'><i className="fa-solid me-1 fa-user"></i> Login/Signup</Link>}
                        {status ? <Link className='btn btn_custome btn-primary' onClick={handleLogout} to={'/'}><i className="fa-solid me-2 fa-right-to-bracket"></i>Logout</Link> : ""}
                    </div>
                </div>
            </div>
        </nav>


    )
}

export default Navbar