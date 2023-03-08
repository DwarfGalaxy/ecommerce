import React from 'react'
import FilterSection from './FilterSection';
import ProductList from './ProductList';
import Sort from './Sort';


function Products() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <FilterSection />
          <div className="col">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Products