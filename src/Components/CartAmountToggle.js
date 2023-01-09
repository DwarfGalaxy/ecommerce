import React from 'react';
import { useState } from 'react';
import { AiFillMinusCircle,AiFillPlusCircle } from 'react-icons/ai';
function CartAmountToggle({SingleItem}) {
    const {stock}=SingleItem;
    const [quantity, setQuantity] = useState(1);
    const setDecrease=()=>{
        quantity>1?setQuantity(quantity-1):setQuantity(1);
    }
    const setIncrease=()=>{
        quantity<stock?setQuantity(quantity+1):setQuantity(stock);
    }


    return (
        <>
            <div className="d-flex justify-content-start mb-3 ms-2">
                <button className='btn p-0 border-0 '><AiFillMinusCircle className='fs-3 ' onClick={()=>setDecrease()} /></button>
                <p className='fs-5 mx-1 my-auto'>{quantity}</p>
                <button className='btn   p-0'><AiFillPlusCircle className=' fs-3' onClick={()=>setIncrease()} /></button>
            </div>
        </>
    )
}

export default CartAmountToggle