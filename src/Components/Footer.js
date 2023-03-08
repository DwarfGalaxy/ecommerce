import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
const Footer = () => {
    return (
        <>

            <div className="container-fluid container-3 mt-5 text-light py-5">
                <div class="container  w-75 mt-5">
                    <div class="row  mx-auto">
                        <div class="col-xs-6 col-sm-6   col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center  ">
                            <p>Koirala Enterprise</p>
                            <span className='text-center'><BsFillTelephoneFill className='me-2' />+977-9811761743</span>
                        </div>
                        <div class="col-xs-6 col-sm-6   col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center mobile-footer">
                            <p>Subscribe to get important updates</p>
                            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your E-mail' />
                            <button type="button" class="btn btn-primary mt-2 ">SUBSCRIBE</button>
                        </div>
                        <div class="col-xs-6 col-sm-6   col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                            <p className='text-center  mobile-footer'>Follow Us</p>
                            <div class="d-flex justify-content-evenly ">
                                <button className='btn-footer border-0' style={{ color: "#046ae4" }}><FaFacebook className='fs-1' /></button>

                                <button className='btn-footer border-0 text-danger ' style={{ color: "#046ae4" }}><AiFillInstagram className='fs-1' /></button>

                                <button className='btn-footer border-0  text-primary' style={{ color: "#046ae4" }}><FaTwitter className='fs-1' /></button>



                            </div>


                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center">
                            <p className='mobile-footer'>Ready to get started?</p>
                            <button type="button" class="btn btn-primary">GET STARTED</button>
                        </div>
                    </div>
                </div>
                <hr className='mt-4'/>
                <div className="container text-center mt-4">
                <div class="row ">
                    <div class="col  ">
                        <span>&#169;2022 Koirala Enterprise. All Rights Reserved</span>
                    </div>
                    <div class="col ">
                        <p className='mb-0'>PRIVARY POLICY</p>
                        <p >TERMS & CONDITIONS</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
