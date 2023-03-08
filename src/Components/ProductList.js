import React, { useEffect } from 'react'
import { useContext } from 'react';
import { ProductContext } from '../Context/FilterContext';
import ListView from './ListView';
import GridView from './GridView';

function ProductList() {
    const { filter_products, filter_loading, grid_view } = useContext(ProductContext);


    useEffect(() => {

        console.log(filter_products);
    }, [filter_products])
    return (
        <>
            {filter_loading ? "Loading..." : <div className="container text-center ">
                {grid_view ? <GridView
                    key={filter_products}

                    filterProducts={filter_products} /> : <ListView
                    key={filter_products}
                    filterProducts={filter_products} />}


            </div>}

        </>
    )
}

export default ProductList
