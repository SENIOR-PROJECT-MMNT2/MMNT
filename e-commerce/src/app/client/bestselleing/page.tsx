"use client"
import React, { useState,useEffect } from 'react'
import Productsales from '../product/page';
import axios from 'axios';
interface products {
  categoryCatId: number;
  description: string;
  name: string;
  price: number; // Assuming price is a number, change to string if necessary
  prodId: number;
  quantity: number;
  userUserId: number;
}

function BestSelling() {
  const [product,setProduct]=useState<products[]>([])

  useEffect(()=>{
   axios.get<products[]>('http://localhost:8080/apii/product')
   .then((res)=>{
 
    const randomizedProducts = rand(res.data);
    setProduct(randomizedProducts)
   })
   .catch((err)=>{console.log(err);
   })
   },[])
   const rand = (array: products[]): products[] => {
    const arr = [...array];
    for (let i = 0; i < arr.length-1; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
   
  return (
    <div className='flex flex-col gap-y-3'>
    <div className=' flex justify-center items-center w-full'>
      <div className=' flex justify-start w-3/5 mt-20 mr-44'>
      <div style={{background:"#17998a"}} className=' w-6 h-14 rounded mb-4'></div>
      <div className='flex w-36 justify-center items-center h-14'>
      <h1 style={{color:"#17998a"}} className='text-lg font-bold'> This month</h1>
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
        <div className='mx-20 w-3/5 flex flex-row gap-x-8'>
          {product.map((product, index) => (
              <Productsales key={index} prod={product} />
            ))}

          
          </div>
          
        </div>
      </div>
      <div className='flex justify-center w-full'>
      <div className=" w-4/5 rotate-180  opacity-10 border border-black mb-20"></div>
      </div>
      
      
    </div>
  )
}

export default BestSelling
