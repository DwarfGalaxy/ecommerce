import React from 'react';
import { NavLink } from 'react-router-dom';


function PageNavigation() {
  return (
    <>
       <div className="container-fluid bg-light  ">
            <NavLink to="/ecommerce" className="text-decoration-none fw-bold">Home</NavLink>
       </div>
    </>
  )
}

export default PageNavigation
