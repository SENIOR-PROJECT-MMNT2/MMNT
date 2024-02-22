'use client'  
import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode"

interface loginData {
  email: string;
  password: string
}
export default function Login () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  const loging = (): void => {
    axios.post(`http://localhost:8080/auth/login`, { email: email, password: password })
      .then((res) => {
        const decoded = jwtDecode(res.data.token)
        Cookies.set('token', res.data.token);
        Cookies.set("id", res.data.user.userId);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="w-full h-12   border-b border-gray-200 py-6 justify-center items-center inline-flex">
  <div className=" flex justify-start items-start w-4/5 inline-flex">
    <div className="justify-start items-center gap-2 flex">
      <div className="font-bold text-black text-4xl text-center pb-4 sm:pb-0 ">  Exclusive</div>
      
    </div>
    <div className="justify-center items-center gap-[5px] flex">
   
      <div className="w-6 h-6 pl-1.5 pr-[5.27px] pt-2 pb-[8.22px] justify-center items-center flex" />
    </div>
  </div>
  <div className="flex justify-end items-end">
  <div className="text-center text-black text-sm font-semibold font-['Poppins'] underline leading-normal">ShopNow</div>
  </div>
</div>
     
      <section>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
        <div className=" w-3/5">
            <img className="h-full w-full" src="https://shorturl.at/cKNS3" alt="" />
          </div>
          <div className=" w-2/5 mx-auto  space-y-12" >
            <div className=" p-16">
              <h1 className='text-4xl font-semibold text-gray-900 text-black-500'>Log in to Exclusive</h1>
            <p className="text-black-500 text-xl font-semibold text-gray-700">Enter your details below</p>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }} className=''>
              <button 
                type="submit"
                className="focus:outline-none w-full text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={loging}
              ><Link href="/">
                   Log in
            </Link>
              </button>
              <p className="text-red-500" onClick={() => { }}>Forget Password ?</p>
            </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

