import React from 'react';
import { NavLink } from 'react-router-dom';


function ErrorPage() {
  return (
    <>
    <div className="container mx-auto  text-center mt-4">
      <p className='fw-bolder fs-1'>404</p>
      <p className='fs-1'>UH OH! You're lost.</p>
      <p>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
      <NavLink className="btn btn-primary" to="/">HOME</NavLink>
    </div>
    </>
  )
}

export default ErrorPage