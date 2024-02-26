"use client"
import React,{useState} from "react";
import { useParams } from "next/navigation";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import Cookies from 'js-cookie';
const Nav = () => {
const[id,setId]=useState(Cookies.get("id"))

  return (
    <div>
        <div className="w-full h-12  py-3 bg-black justify-center items-center inline-flex">
  <div className="justify-start items-start gap-[231px] inline-flex">
    <div className="justify-start items-center gap-2 flex">
      <div className="w-[474px] h-[18px] text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
      <div className="text-center text-neutral-50 text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
    </div>
    <div className="justify-center items-center gap-[5px] flex">
      <div className="text-neutral-50 text-sm font-normal font-['Poppins'] leading-[21px]">English</div>
      <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] justify-center items-center flex" />
    </div>
  </div>
</div>
        <div  className=" flex justify-center border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-bold text-black text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <Link href={`/client/dashboard/${id}`}>

          Exclusive
          </Link>
        </div>

        <div className="w-full sm:w-[300px] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Enter any product name..."
          />

          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
            size={20}
          />
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser className="text-gray-500" />
          <Link href={`/client/wishlist`}>
          <div className="relative">
            <FiHeart className="text-gray-500" />
            <div style={{background:"#17998a"}} className=" rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          </Link>
          <Link href={`/client/cart`}>
          <div className="relative">
            <HiOutlineShoppingBag className="text-gray-500" />
            <div style={{background:"#17998a"}} className="rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Nav;
