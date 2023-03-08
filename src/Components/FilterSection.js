import React, { useState } from 'react';
import { useContext } from 'react';
import { BsCheck } from 'react-icons/bs';
import { ProductContext } from '../Context/FilterContext';

function FilterSection() {
  const { filters: { text }, updateFilterValue, categorySearch, categorySearchWithCompany, categorySearchByColor, categorySearchByPrice } = useContext(ProductContext);
  const [selectedValue, setSelectedValue] = useState('all');
  const [selectedColor, setselectedColor] = useState('all');
  const [rangeValue, setRangeValue] = useState(6000000);

  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
    categorySearchByPrice(rangeValue);
  };

  const Search = (selectedItem) => {
    categorySearch(selectedItem);
    setSelectedValue(selectedItem);
  }
  const searchByColor = (selectedItem) => {
    categorySearchByColor(selectedItem);
    setselectedColor(selectedItem);
  }

  return (
    <>
      <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-2 col-xxl-2  mb-3">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="form-control mb-4" name="text" value={text} onChange={updateFilterValue} placeholder="Search" />
        </form>


        {/* Category */}
        <p className='fs-5 mb-0'>Category</p>
        <div className="d-flex  flex-xs-row flex-sm-column flex-md-column flex-lg-column flex-xxl-column justify-content-between">

          <button className={`btn btn-success w-auto text-center  btn-Category  mt-2   ${selectedValue === "all" ? "opacity-100" : "opacity-50"} `} onClick={() => Search("all")}>All</button>

          <button className={`btn btn-success w-auto text-center  btn-Category  mt-2   ${selectedValue === "mobile" ? "opacity-100" : "opacity-50"} `} onClick={() => Search("mobile")}>Mobile</button>

          <button className={`btn btn-success w-auto text-center  btn-Category  mt-2 ${selectedValue === "laptop" ? "opacity-100" : "opacity-50"}`} onClick={() => Search("laptop")}>Laptop</button>

          <button className={`btn btn-success w-auto text-center  btn-Category   mt-2 ${selectedValue === "computer" ? "opacity-100" : "opacity-50"}`} onClick={() => Search("computer")}>Computer</button>
        </div>
        <div className="d-flex mb-3 flex-xs-row flex-sm-column flex-md-column flex-lg-column flex-xxl-column justify-content-start ">
          <button className={`btn btn-success w-auto text-center  btn-Category text-start  mt-2 margin-accessories w-50 ${selectedValue === "accessories" ? "opacity-100" : "opacity-50"}`} onClick={() => Search("accessories")}>Accessories</button>

          <button className={`btn btn-success w-auto text-center  btn-Category text-start  mt-2 ${selectedValue === "watch" ? "opacity-100" : "opacity-50"}`} onClick={() => Search("watch")}>Watch</button>
        </div>

        {/*  Company */}
        <p className='fs-5 mb-1 mt-4'>Company</p>
        <select className="form-select w-75 " aria-label="Default select example" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)} onClick={() => categorySearchWithCompany(selectedValue)} >
          <option defaultValue value="all">All</option>
          <option value="apple">Apple</option>
          <option value="samsung">Samsung</option>
          <option value="dell">Dell</option>
          <option value="nokia">Nokia</option>
          <option value="asus">Asus</option>
          <option value="lenova">Lenova</option>
          <option value="rolex">Rolex</option>

        </select>

        {/* colors */}

        <p className='fs-5 mt-4 mb-0'>Colors</p>

        <button className={`btn fs-5 pe-1 border-0 ps-1 allStyle ${selectedColor === "all" ? "text-success" : "text-black"}`} onClick={() => searchByColor("all")}>
          All
        </button>

        <button className="btn  btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" style={{ backgroundColor: "#ff0000" }} onClick={() => searchByColor("#ff0000")}>
          {selectedColor === "#ff0000" ? <BsCheck className='fs-4 text-white fw-bolder' /> : null}
        </button>

        <button className="btn  btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" style={{ backgroundColor: "#000000" }} onClick={() => searchByColor("#000000")} >
          {selectedColor === "#000000" ? <BsCheck className='fs-4 text-white fw-bolder' /> : null}
        </button>

        <button className="btn  btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" style={{ backgroundColor: "#CDD0D0" }} onClick={() => searchByColor("#CDD0D0")}>
          {selectedColor === "#CDD0D0" ? <BsCheck className='fs-4 text-white fw-bolder' /> : null}
        </button>

        <button className="btn  btn-sm rounded-circle  me-1 border-0 btnStyle activeBtn" style={{ backgroundColor: "#22D3EF" }} onClick={() => searchByColor("#22D3EF")}>
          {selectedColor === "#22D3EF" ? <BsCheck className='fs-4 text-white fw-bolder' /> : null}
        </button>

        {/* Price */}
        <p className='fs-5 mt-4 mb-0'>Price</p>
        <p className='text-muted fs-6 mb-0'>Rs. {rangeValue}</p>

        <div>
          <input type="range" min="0" max="6000000" className='slider' value={rangeValue} onChange={handleRangeChange} />
        </div>

        <button className='btn btn-danger mt-2' onClick={() => Search("all")} >CLEAR FILTERS</button>

      </div>
    </>
  )
}

export default FilterSection