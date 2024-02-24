'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../header/page';

interface Product {
  prodId: number;
  name: string;
  description: string;
  price: number;
  images: { imgId: number; img: string }[];
}

interface CartItem {
  idCart: number;
  product: Product;
}

export default function Cart() {
  const [products, setProducts] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);
const [refresh,setRefresh]=useState<boolean>(false)
  useEffect(() => {
    axios.get<CartItem[]>('http://localhost:8080/cartt/getpro/3')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data);
        calculateTotal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const calculateTotal = (items: CartItem[]) => {
    let sum = 0;
    items.forEach(item => {
      sum += item.product.price;
    });
    setTotal(sum);
  };

  const pay=()=>{
   axios.post('http://localhost:8080/payment/pay',{amount:total})
   .then((res)=>{
   const {result}=res.data
   window.location.href=result.link
   })
   .catch((err)=>{
console.log(err)
   })
  }

  const del=(id:number)=>{
    axios.delete(`http://localhost:8080/cartt/delete/${id}`)
    .then(()=>{
      setRefresh(!refresh)
    })
    .catch((err)=>{console.log(err)})
  }

  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center bg-gray-100'>
        <div className='flex justify-between items-center px-20 py-5'>
          <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Cart</h1>
          <div className="text-xl uppercase font-bold mt-10 text-center mb-10">Total: ${total}</div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-10'>
          {products.map((el) => (
            <div key={el.idCart} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <img
                src={el.product.images.map((i) => i.img).join(',')}
                alt={el.product.name}
                className='rounded-md h-48'
              />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{el.product.name}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{el.product.description}</p>
                <p className='mt-2 text-gray-600'>${el.product.price}</p>
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700' onClick={()=>{del(el.idCart)}} >Delete from cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-blue-500 text-white text-xs font-bold uppercase rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700" onClick={()=>{pay()}} >Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}



