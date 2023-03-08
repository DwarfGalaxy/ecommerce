import React from 'react';
import { AiFillCodepenCircle } from 'react-icons/ai'
import { GiPentagramRose, GiClover } from 'react-icons/gi'
import { FaLeaf } from 'react-icons/fa'
import { HiInformationCircle } from 'react-icons/hi'
function Trusted() {
    return (
        <>
            <div className="container-fluid text-center mt-5 container-2 py-5">
                <div className="container ">
                    <p className='fw-bold text-secondary'>Trusted By 1000+ Companies</p>
                    <div class="d-flex justify-content-between justify-content-lg-evenly  w-100 mx-auto mt-4">
                        <p className='fs-5 fw-bolder text-secondary'><FaLeaf className='fs-1 text-success me-1' />ZEINA</p>
                        <AiFillCodepenCircle className='fs-1 fw-bolder text-danger' />
                        <p className='fs-5 fw-bolder text-secondary'><GiPentagramRose className='fs-1 text-success' />LOGIC+</p>
                        <GiClover className='fs-1 fw-bolder text-primary' />
                        <p className='fs-5 fw-bolder text-secondary'><HiInformationCircle className='fs-2 text-success' />CHARTZ</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Trusted