import React from 'react';
import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

function AddToCart({items}) {
  const {colors=[{url:""}]}=items;
  const [color, setColors] = useState(null);
  return (
    <>
    {colors.map((currElem,index)=>{
      return <button onClick={()=>setColors(currElem)} className={`btn btn-sm rounded-circle  me-1 border-0 ${currElem===color?"btnStyle activeBtn":"btnStyle"}`} style={{backgroundColor:currElem}} key={index}>
        {currElem===color?<BsCheck className='fs-4 text-white fw-bolder'/>:null}
      </button>
    })}
     
    </>
  )
}

export default AddToCart
