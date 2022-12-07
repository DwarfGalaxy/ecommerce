import React from 'react';
import { FcShipped } from 'react-icons/fc';
import { FcContacts } from 'react-icons/fc';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FaCcAmazonPay } from 'react-icons/fa';
function Services() {
    return (
        <>
            <div className="container-fluid ">
                <div className="container text-center  mt-5">
                    <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-xxl-4  my-auto mobile">
                            <div className="card card-1 py-4 border-0">
                                <FcShipped className='fs-1 mx-auto border rounded-circle px-1 bg-light ' />
                                <p>Supar Fast and Free Delivery</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-xxl-4  my-auto mobile">
                            <div class="d-flex flex-column ">
                                <div className="card card-1 py-4 my-auto border-0">
                                    <FcContacts className='fs-2 border rounded-circle bg-light mx-auto ' />
                                    <p>Non-contact Shipping</p>
                                </div>
                                <div className="card card-1 py-4 my-auto mt-2 border-0">
                                    <FcMoneyTransfer className='mx-auto border rounded-circle bg-light fs-2 ' />
                                    <p>Money-back Guaranteed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-xl-4 col-xxl-4  my-auto ">
                            <div className="card card-1 py-4 border-0">
                                <FaCcAmazonPay className='fs-1 mx-auto border rounded-circle px-1 bg-light text-primary' />
                                <p>Supar Secure Payment Sytem</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Services