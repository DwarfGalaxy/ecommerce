import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';


function ListView({ filterProducts }) {
    console.log(filterProducts);
    return (
        <>
            <div className="container  text-start">
                {filterProducts.map((currElem) => {
                    return <div className="row mt-3 rounded p-3 list-view border-0" key={currElem.id}>
                        <div className="col-xs-12 col-sm-12 col-md-5 col-xl-4 col-xxl-4   my-auto">
                            <img src={currElem.image} alt="" className='img-fluid ' />
                        </div>
                        <div className="col  ">
                            <p>{currElem.name.toUpperCase()}</p>
                            <p className='text-muted mb-0'><FormatPrice price={currElem.price} /></p>
                            <p className='text-muted'>{currElem.description.slice(0, 89)}...</p>
                            <NavLink to={`/${currElem.id}`} className='btn btn-primary'>READ MORE</NavLink>
                        </div>
                    </div>
                })}

            </div>
        </>
    )
}

export default ListView