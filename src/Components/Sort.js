import React from 'react';
import { useContext } from 'react';
import {BsFillGridFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
import { ProductContext } from '../Context/FilterContext';
function Sort() {
    const { grid_view,setGridView,setListView,all_products} = useContext(ProductContext);
    
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className='d-flex justify-content-start'>
                    <button className={`btn btn-dark  px-2 border-0 mt-1 rounded h-75 ${grid_view?"opacity-100":"opacity-50"}`} ><BsFillGridFill className='mb-2 fs-5' onClick={setGridView}/></button>
                    <button className={`btn btn-dark  px-2 border-0 mt-1 rounded h-75 ms-2 ${grid_view?"opacity-50":"opacity-100"}`}  onClick={setListView}><HiOutlineMenu className='mb-2 fs-5' /></button>
                </div>
                <p className='text-muted my-auto'>{all_products.length} Total Products</p>
                <select className="form-select w-25 h-25 " aria-label="Default select example">
                    <option defaultValue>Price(lowest)</option>
                    <option value="1">Accessories</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </>
    )
}

export default Sort