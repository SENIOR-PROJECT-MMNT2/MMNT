import React from 'react'
import Timer from '../timer/page'
import Productsales from '../productsales/page';
function Sales() {
  const targetDate = new Date("2024-03-01T00:00:00");
  return (
    <div className='flex flex-col'>
    <div className=' flex justify-center items-center w-full'>
      <div className=' flex justify-start w-3/5 mt-20 mr-44'>
      <div style={{background:"#3B0944"}} className=' w-6 h-14 rounded mb-4'></div>
      <div className='flex w-36 justify-center items-center h-14'>
      <h1 style={{color:"#3B0944"}} className='text-lg font-bold'> Today's</h1>
      </div>
      </div>
      </div>
      <div className=' flex justify-center items-center w-full my-4'>
      <div className=' flex justify-start w-3/5  mr-44'>
        <h1 className=' text-4xl text-black'>Flash Sales</h1>
        <div className=' font-semibold -mt-2 ml-5'>
        <Timer targetDate={targetDate}/>
        </div>
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

export default Sales
