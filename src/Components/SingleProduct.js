import React from 'react'
import { useEffect } from 'react'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import { MdDeliveryDining } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from '../Context/ProductContext';
import { NavLink, useLocation } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import PageNavigation from './PageNavigation';
import { useState } from 'react';
import Stars from './Stars';
import AddToCart from './AddToCart';
import CartAmountToggle from './CartAmountToggle';

const API="https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const {getSingleProducts,isSingleLoading,SingleItem}= useContext(AppContext);
  const location=useLocation();
  useEffect(() => {
    const id=location.pathname.split('/').pop();
    getSingleProducts(`${API}?id=${id}`);
  }, []);

  const {stars,company,reviews,price,description,id,name,stock,image=[{url:""}]}=SingleItem;
  console.log(image);
  const [imgUrl, setImgUrl] = useState("https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  return (
    <>
    <PageNavigation/>
    {isSingleLoading?<p>loading...</p>:<div className="container  mt-4">
        <div className="row  ">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  my-auto">
            <div className="d-flex justify-content-start">
              <div className="d-flex flex-column ">
                {image.map((currElem)=>{
                  return (
                    <figure className=' w-75 ms-auto me-4'  onClick={()=>setImgUrl(currElem.url)} style={{cursor:"pointer"}} key={currElem.id}>
                    <img src={currElem.url} alt="" className='img-fluid ' />
                  </figure>
                  )
                })}
              </div>
              <figure className='my-auto me-2 w-auto main-img '>
                  <img src={imgUrl} alt="" className='img-fluid rounded' />
               </figure>
                
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
            <div>
                <p className='fs-1 fw-bold'>{company}</p>
                <Stars stars={stars} reviews={reviews}/>
                <p >MRP: <span className='text-decoration-line-through'>10000</span> </p>
                <p className='text-primary'>Deal of the Day: Rs. <FormatPrice price={price}/></p>

                <p className='text-muted'>{description}</p>
                <div className="d-flex justify-content-between ">
                  <div className='text-center'>
                    <TbTruckDelivery className="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>Free Delivery</p>
                  </div>
                  <div className='text-center'>
                    <TbReplace className="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>30 Days Replacement</p>
                  </div>
                  <div className='text-center'>
                    <MdDeliveryDining className="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>Koirala Delivered</p>
                  </div>
                  <div className='text-center'>
                    <FaHandshake className="fs-2 p-1 rounded-circle  bg-success bg-opacity-25 " />
                    <p className='textSize text-secondary'>2 Year Warranty</p>
                  </div>
                </div>
                <hr className='mt-0 ' />
                <p><span className='text-muted'>Available:</span>{stock>0?" In Stock":" Not Available"}  </p>
                <p><span className='text-muted'>ID:</span> {id}</p>
                <p><span className='text-muted'>Brand:</span> {name}</p>
                <hr className='singleProductHR' />

                <div className="d-flex justify-content-start">
                  <p className='text-muted me-2'>Color:  </p>
                  <AddToCart items={SingleItem}/>
                </div>


                <CartAmountToggle SingleItem={SingleItem}/>
              </div>
           

            <NavLink to="/cart"><button className='btn btn-success'>Add to Cart</button></NavLink>

          </div>

        </div>
      </div>}
      
    </>
  )
}

export default SingleProduct