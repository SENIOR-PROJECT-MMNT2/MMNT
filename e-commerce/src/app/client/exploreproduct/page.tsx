import React from 'react'
import Productsales from '../product/page';

function Exploreproducts() {
  return (
    <div className='flex flex-col gap-y-3'>
    <div className=' flex justify-center items-center w-full'>
      <div className=' flex justify-start w-3/5 mt-20 mr-44'>
      <div style={{background:"#17998a"}} className=' w-6 h-14 rounded mb-4'></div>
      <div className='flex w-36 justify-center items-center h-14'>
      <h1 style={{color:"#17998a"}} className='text-lg font-bold'> Our Products</h1>
      </div>
      </div>
      </div>
      <div className=' flex justify-center items-center w-full my-4'>
      <div className=' flex justify-start w-3/5  mr-44'>
        <h1 className=' text-4xl text-black'>Explore Our Products</h1>
      </div>
      </div>
      <div className='flex justify-center items-center w-full my-4'>
        <div className='flex justify-start w-4/5'>
          <div className='mx-20 flex flex-row gap-x-8'>
          {/* <Productsales />
          <Productsales /> */}
          
          </div>
          
        </div>
      </div>
      <div className='flex justify-center w-full'>
      <div className=" w-4/5 rotate-180  opacity-10 border border-black mb-20"></div>
      </div>
      
      
    </div>
  )
}

export default Exploreproducts
