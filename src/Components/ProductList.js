import React from 'react'
import { useContext } from 'react';
import { ProductContext } from '../Context/FilterContext';
import ListView from './ListView';
import GridView from './GridView';

function ProductList() {
    const { filter_products, filter_loading, grid_view } = useContext(ProductContext);
    return (
        <>
            {filter_loading ? "Loading..." : <div className="container text-center ">
                {grid_view?<GridView filterProducts={filter_products} />:<ListView  filterProducts={filter_products}/>}
                
                
            </div>}

        </>
    )
}

export default ProductList
