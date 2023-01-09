import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid ">
                    <NavLink className="navbar-brand border-0 mx-auto" to="/">
                       <img src="images/logo.png" alt="logo" className=' img-fluid rounded' id='logo' />
                    </NavLink>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto text-center">
                            <li className="nav-item mt-1">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item mt-1">
                                <NavLink className="nav-link " aria-current="page" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item mt-1">
                                <NavLink className="nav-link " aria-current="page" to="/products">Products</NavLink>
                            </li>

                            <li className="nav-item mt-1">
                                <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                            </li>

                            <li className="nav-item ">
                                <NavLink className="nav-link " aria-current="page" to="/cart">  <button type="button" className="btn btn-sm position-relative">
                                    <FiShoppingCart className='fs-4' />
                                    <span className="position-absolute start-75 translate-middle bg-danger text-white rounded-circle">
                                        <span className="px-2">1</span>
                                    </span>
                                </button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header