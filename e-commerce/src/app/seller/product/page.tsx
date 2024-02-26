
"use client"
import Link from "next/link";
import axios from "axios"
import React,{useState,useEffect} from 'react'
import { SlTrash } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
import Update from "../[editproduct]/page"

interface products {
  name:string,
  description:string
  price:string,
  image:string,
  quantity:number,
  userUserId:number,
  prodId:number,
  imgId:number,
}
interface image{
  imgId:number,
img:string,
}
interface Category {
  content: string;
}

export default function(imgId:number){

 const [products,setProducts]=useState<products[]>([])
 const [image,setImg]=useState<image[]>([])
 const [category, setCategory] = useState<Category[]>([])
   
 useEffect(()=>{
  axios.get
  ('http://localhost:8080/apii/product')
  .then((res)=>{
  console.log(res.data);
  setProducts(res.data)
  })
  .catch((err)=>{console.log(err);
  })
  },[])

  const deleted=(prodId:number)=>{
    axios
      .delete(`http://localhost:8080/apii/product/${prodId}`)
      .then(() => {
        console.log("deleted product");
      })
      .catch((err) => console.log(err));
  }

  useEffect(()=>{
    axios.get
    (`http://localhost:8080/img/getOne/${imgId}`)
    .then((res)=>{
    console.log(res.data);
    setImg(res.data)
    })
    .catch((err)=>{console.log(err);
    })
    },[])
    // useEffect(() => {
    //   axios.get(`http://localhost:8080/category/getAll`)
    //     .then((res) => {
    //       setCategory(res.data);
    //       console.log("this is category", res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, [])
  

  

    return(
        <div >
    
           <div style={{display:'flex',width:'100%'}}>

           <div >
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboord</h5>
          </div>
         
          
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
          <Link href={"/seller/dashbord"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" clip-rule="evenodd"></path>
                </svg>
              </div>Dashbord
            </div>
            </Link>
            <Link href={"/seller/product"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
          <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
                </svg>
              </div>
              Product
            </div></Link>
            <Link href={"/seller/addproduct"} ><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
                </svg>
              </div>
              addproduct
            </div></Link>

           <Link href={"/seller/customer"} > <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                </svg>
              </div>Customer
            </div></Link>
            <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clip-rule="evenodd"></path>
                </svg>
              </div>Log Out
            </div>
          </nav>
          </div>
        </div>
    
        <div>
  
              
<div className="container max-w-5xl px-50 mx-auto sm:px-33 " style={{marginLeft:70}}>

    <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8  ">
            <div>
                <table className="min-w-full leading-normal w-4/5">
                    <thead>
                        <tr>
                            <th scope="col" className=" px-5 py-3 text-sm  font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200 ">
                                Product
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                description
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Category
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Stock
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Price
                            </th>
                            <th scope="col" className="px-5 py-3 text-sm font-sans font-semibold text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                Action
                        
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((e)=>{return(
                      
                        <tr>

                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-80">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                 
                                        <a href="#" className="relative block">
                                        
                                            <img alt="profil" src={e.imag} className="mx-auto object-cover rounded-full h-20 w-20 "/>
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        {e.name}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                               {e.description}
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    electronic
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {e.quantity}
                                </p>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {e.price}
                                </p>
                            </td>
                            <td>
                            </td>
                            <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 w-80">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                    <button className="delete">
                                    <Link href={`/seller/${e.prodId}`}  >
                                     <SlPencil/>
                                       </Link>
                                         </button>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                        <button className="delete"onClick={()=> {
                                          deleted(e.prodId)}}><SlTrash/></button>
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>)})}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
        </div>
           </div>
        </div>
        
        
        
            
        
    )
}