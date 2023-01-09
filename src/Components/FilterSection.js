import React from 'react';
import { BsCheck} from 'react-icons/bs';

function FilterSection() {
  return (
    <>
    <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2 border mb-3">
            <input type="text" className="form-control mb-4 " placeholder='SEARCH' />

            {/* Category */}
            <p className='fs-5 mb-0'>Category</p>
            <div className="d-flex  flex-xs-row flex-sm-column flex-md-column flex-lg-column flex-xxl-column justify-content-between">
              <button className="btn btn-success w-auto text-center  btn-Category  mt-2 ">All</button>
              <button className="btn btn-success w-auto text-center  btn-Category   mt-2">Mobile</button>
              <button className="btn btn-success w-auto text-center  btn-Category  mt-2">Laptop</button>
              <button className="btn btn-success w-auto text-center  btn-Category   mt-2">Computer</button>
            </div>
            <div className="d-flex mb-3 flex-xs-row flex-sm-column flex-md-column flex-lg-column flex-xxl-column justify-content-start ">
              <button className="btn btn-success w-auto text-center  btn-Category text-start  mt-2 margin-accessories w-50 ">Accessories</button>
              <button className="btn btn-success w-auto text-center  btn-Category text-start  mt-2">Watch</button>
            </div>

            {/*  Company */}
            <p className='fs-5 mb-1 mt-4'>Company</p>
            <select className="form-select w-75 " aria-label="Default select example">
              <option defaultValue>All</option>
              <option value="1">Accessories</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            {/* colors */}
            
            <p className='fs-5 mt-4 mb-0'>Colors</p>
            <button className="btn  btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" style={{ backgroundColor: "black" }} >
              <BsCheck className='fs-4 text-white fw-bolder' />
            </button>
            <button className="btn btn-primary btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" >
              <BsCheck className='fs-4 text-white fw-bolder' />
            </button>
            <button className="btn btn-warning btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" >
              <BsCheck className='fs-4 text-white fw-bolder' />
            </button>

            {/* Price */}
            <p className='fs-5 mt-4 mb-0'>Price</p>
            <p className='text-muted fs-6 mb-0'>Rs. 60,000</p>

            <div>
            <input type="range" min="1" max="100"  className='slider'/>
            </div>

            <button className='btn btn-danger mt-2'>CLEAR FILTERS</button>
           
          </div>
    </>
  )
}

export default FilterSection