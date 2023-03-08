import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../Context/ProductContext';


function PageNavigation() {
  const {SingleItem} = useContext(AppContext);
  return (
    <>
       <div className="container-fluid bg-light  ">
            <NavLink to="/" className="text-decoration-none fw-bold">Home/  
           <span className='text-muted'> {SingleItem.name}</span> </NavLink>
       </div>
    </>
  )
}

export default PageNavigation
