import React from 'react';
import { useState } from 'react';
import {BsFillGridFill } from 'react-icons/bs';
import { HiOutlineMenu } from 'react-icons/hi';
function Sort() {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className='d-flex justify-content-start'>
                    <button className='btn btn-dark  px-2 border-0 mt-1 rounded h-75 ' style={{ opacity: "1" }}><BsFillGridFill className='mb-2 fs-5' /></button>
                    <button className='btn btn-dark  px-2 border-0 mt-1 rounded h-75 ms-2' style={{ opacity: "0.4" }}><HiOutlineMenu className='mb-2 fs-5' /></button>
                </div>
                <p className='text-muted my-auto'>12 Total Products</p>
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