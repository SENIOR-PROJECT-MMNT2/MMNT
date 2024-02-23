import React from 'react'
import Productsales from '../productsales/page';

function BestSelling() {
  return (
    <div className='flex flex-col'>
    <div className=' flex justify-center items-center w-full'>
      <div className=' flex justify-start w-3/5 mt-20 mr-44'>
      <div style={{background:"#FF5057"}} className=' w-6 h-14 rounded mb-4'></div>
      <div className='flex w-36 justify-center items-center h-14'>
      <h1 style={{color:"#FF5057"}} className='text-lg font-bold'> This month</h1>
      </div>
      </div>
      </div>
      <div className=' flex justify-center items-center w-full my-4'>
      <div className=' flex justify-start w-3/5  mr-44'>
        <h1 className=' text-4xl text-black'>Best Selling Products</h1>
      </div>
      </div>
      <div className='flex justify-center items-center w-full my-4'>
        <div className='flex justify-start w-4/5'>
          <div className='mx-20 flex flex-row gap-x-8'>
          <Productsales />
          <Productsales />
          </div>
        
        </div>
      </div>
      
    </div>
  )
}

export default BestSelling
