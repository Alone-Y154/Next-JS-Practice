'use client'

import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button className='bg-sky-500 p-2 rounded text-white border cursor-pointer' onClick={()=> console.log('clicked')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart