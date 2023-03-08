import React from 'react';
import Product from './Product';

function GridView({ filterProducts }) {
    return (
        <>
            <div className="row mt-3">
                {filterProducts.map((currElement) => {
                    return <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 my-3" key={currElement.id}>
                        <Product {...currElement} />
                    </div>
                })}
            </div>
        </>
    )
}

export default GridView