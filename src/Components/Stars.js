import React from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { ImStarHalf } from 'react-icons/im';

function Stars({stars,reviews}) {
  const ratingStar=Array.from({length:5},(elem,index)=>{
    let number=index+0.5;
    return (
        <span  key={index}>
            {stars>=index+1?(
                <AiFillStar/>
            ):stars>=number?(
                <ImStarHalf/>
            ):(
                <AiOutlineStar/>
            )}
        </span>
    )
  })
  return (
    <>
    <p className='text-warning'>{ratingStar} <span className='text-muted ms-2'>({reviews} customers reviews)</span></p>
    </>
  )
}

export default Stars
