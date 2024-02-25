'use client'
import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
 <div style={{zIndex:"-1"}} >
 <div
      className="sidebar fixed top-7 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">
            Exclusive</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
          
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white"
      >
        <i className="bi bi-search text-sm"></i>
        <input
          type="text"
          placeholder="Search"
          className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
        />
      </div>
      <Link href={`/admin/users`}><div className="my-4 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
     
      >
       
       <div className="flex justify-between w-full items-center">
          <span className="text-[15px] ml-4 text-gray-200 font-bold"> 
            Users
         </span>
        </div>
      </div></Link>
       <div
        className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold"
        id="submenu"
      >
        <Link href={"/admin/clients"} ><h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Clients
        </h1>
        </Link>
        <Link href={"/admin/sellers"} ><h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
          Sellers
        </h1>
        </Link>
        
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>

    </div>
    </div>
  )
}
