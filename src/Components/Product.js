import React from 'react';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';


function Product(Element) {
    const {category,id,image,name,price}=Element;
    return (
        <NavLink to={`SingleProduct/${id}`} style={{textDecoration:"none"}}>
        <div class="card card-1 border-0" >
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <p className='mb-0 fs-4 fw-bolder'>{category}</p>
                <div className="d-flex justify-content-between mt-0">
                    <p class="card-title">{name}</p>
                    <p><FormatPrice price={price}/></p>
                </div>
            </div>
        </div>
        </NavLink>
    )
}

export default Product