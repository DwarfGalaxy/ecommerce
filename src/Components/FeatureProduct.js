import React, { useContext } from 'react'
import { AppContext } from '../Context/ProductContext'
import Product from './Product';

function FeatureProduct() {
    const { isLoading, featureProducts } = useContext(AppContext);
    if (isLoading) {
        return <div>...Loading</div>
    }
    return (
        <>
            <div className="container-fluid border container-1">
                <div className="container border my-5">
                    <p  className='mb-0 text-secondary'>CHECK NOW!</p>
                    <p className='fs-3 fw-bold'>Our Feature Services</p>
                    <div class="row ">
                        
                            {featureProducts.map((currElement)=>{
                                return <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-2" key={currElement.id}>
                                 <Product  {...currElement}/>
                                 </div>
                            })}
                            
                       
                    </div>
                    </div>
            </div>
        </>
    )
}

export default FeatureProduct