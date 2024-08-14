import React from 'react'

function Title( {subTitle, title}) {
  return (
    <div className=' text-center text-[15px] font-bold uppercase my-[70px] mt-[70px] mb-[50px] '>
        <p>{subTitle}</p>
        <h1 className='text-[32px]  mt-[5px] normal-case'>{title}</h1>
    </div>
  )
}

export default Title