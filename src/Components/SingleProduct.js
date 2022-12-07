import React from 'react'
import { useState } from 'react';
// import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdDeliveryDining } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { AiFillStar,AiFillMinusCircle,AiFillPlusCircle } from 'react-icons/ai';

function SingleProduct() {
  const [singleData, setSingleData] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const id = window.location.pathname.split('/').pop();
    // setproductId(id);
    fetch(`https://api.pujakaitem.com/api/products?id=${id}`).then((apidata) => {
      return apidata.json();
    }).then((actualData) => {
      console.log(actualData);
      console.log(actualData.image);
      setSingleData([actualData]);
      setImages(actualData.image);
    });
  }, []);


  // const location=useLocation();
  // console.log(location.pathname);

  return (
    <>
      <div className="container  mt-4">
        <div className="row  ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  my-auto">
            <div className="d-flex justify-content-start">
              <div className="d-flex flex-column ">
                {images.map((img) => {
                  return <figure className=' w-50 ms-auto me-5' key={img.id}>
                    <img src={img.url} alt="" className='img-fluid ' />
                  </figure>
                })}

              </div>
              <figure className='my-auto me-2'>
                {images.map((mainImg) => {
                  if (mainImg.id == "randomid4") {
                    return <img src={mainImg.url} alt="" className='img-fluid ' />
                  }
                })}

              </figure>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
            {singleData.map((newElem) => {
              return <div>
                <p className='fs-1 fw-bold'>{newElem.company.toUpperCase()}</p>
                <AiFillStar className='text-warning' />
                <span className='text-muted ms-2'>(28 customers reviews)</span>
                <p >MRP: <span className='text-decoration-line-through'>4509.99</span> </p>
                <p className='text-primary'>Deal of the Day: Rs. {newElem.price}</p>

                <p className='text-muted'>{newElem.description}</p>
                <div class="d-flex justify-content-between ">
                  <div className='text-center'>
                    <TbTruckDelivery class="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>Free Delivery</p>
                  </div>
                  <div className='text-center'>
                    <TbReplace class="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>30 Days Replacement</p>
                  </div>
                  <div className='text-center'>
                    <MdDeliveryDining class="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>Koirala Delivered</p>
                  </div>
                  <div className='text-center'>
                    <FaHandshake class="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>2 Year Warranty</p>
                  </div>
                </div>
                <hr className='mt-0 ' />
                <p><span className='text-muted'>Available:</span>  In Stock</p>
                <p><span className='text-muted'>ID:</span> {newElem.id}</p>
                <p><span className='text-muted'>Brand:</span> {newElem.company}</p>
                <hr className='singleProductHR' />

                <div class="d-flex justify-content-start">
                  <p className='text-muted me-2'>Color:  </p>
                  <div class="form-check">
                    <input class="form-check-input bg-secondary border-0" type="radio" value="" id="flexCheckDefault" name='productColor'/>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input " type="radio" value="" id="flexCheckDefault" name='productColor' />
                  </div>
                </div>


                <div class="d-flex justify-content-start mb-3 ms-2">
                  <button className='btn   p-0 '><AiFillMinusCircle className='fs-3 '/></button>
                  <p className='fs-5 mx-1 my-auto'>1</p>
                 <button className='btn   p-0'><AiFillPlusCircle className=' fs-3'/></button> 

                </div>
              </div>
            })}

            <button className='btn btn-success'>Add to Cart</button>

          </div>

        </div>
      </div>
    </>
  )
}

export default SingleProduct