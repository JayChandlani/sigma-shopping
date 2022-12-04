import React, { useContext } from 'react'
import Card from './Card'
import { productData } from '../data/product'
import AuthContext from '../context/AuthContext'
const HomeShop = () => {
    const { setFilterItem, filterItem } = useContext(AuthContext);
    const handleFilter = (e) => {

        setFilterItem(productData.filter(item => { return (e.target.value === item.gender) }))
    }

    return (
        <section id='shop' className='container'>
            <div className=' my-4 '>
                <h1 className='text-center'>Featured Products</h1>
                <p className='text-center'>Winter Collection Lorem ipsum dolorus fugiat autem ad.</p>
            </div>
            <div className='container'>
                <div className='row my-4'>
                    <div className="btn-group my-4" role="group" aria-label="Basic example">
                        <button type="button " value='men' className="btn btn-outline-secondary  " onClick={(e) => handleFilter(e)}>Men</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => handleFilter(e)} value='women'>Women</button>
                        <button type="button" className="btn btn-outline-secondary" onClick={(e) => handleFilter(e)} value={'kids'}>Kids</button>
                    </div>
                </div>
                <div className='row ' >
                    {filterItem.map(item => {
                        return (<Card data={item}></Card>)
                    })}

                </div>
                <div className='row'>
                    <div className='col-12 my-4 d-flex justify-content-center'>
                        <button className='btn my-4 btn-secondary '>Viewmore</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeShop