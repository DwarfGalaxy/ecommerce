import React from 'react'

function HeroSection(props) {
    return (
        <>
            <div className="container-fluid">
                <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6   my-auto">
                        <p className='text-secondary mb-0  '>Welcome to</p>
                        <p className='fs-2 fw-bolder  mb-0'>E-Commerce {props.title}</p>
                       <p className='text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, tempora.</p> 
                       <button type="button" className="btn btn-success">SHOW NOW</button>
                    </div>
                    <div className="col mt-2">
                        <img src="https://i2.wp.com/eatatefood.com/wp-content/uploads/2018/04/shutterstock_481902994.jpg?resize=2048%2C1367&ssl=1" alt="" id='main-img' className='img-fluid rounded ' />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection