'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Link from "next/link";

interface LoginData {
  email: string;
  password: string;
}

interface DecodedToken {
  role: string;
  id: number;
  firstName: string;
  lastName: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [data, setData] = useState<DecodedToken | null>(null);
  const [rolee, setRolee] = useState<string>("");

  const loging = (): void => {
    axios.post(`http://localhost:8080/auth/login`, { email: email, password: password })
      .then((res) => {
        Cookies.set('token', res.data.token);
        Cookies.set("id", res.data.user.userId);
        console.log("cookies",Cookies.get("id"));
        console.log(res.data.user.role);
        setRolee(res.data.user.role);
        setData({
          id: res.data.user.userId,
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          role: res.data.user.role
        });
      })
      .catch((err) => {
        console.log(err);
        alert("worng email or password")
      });
      if(rolee==="Client")
      {window.location.href=`http://localhost:3000/client/dashboard/${Cookies.get("id")}`;}
      else if(rolee==="Seller")
      {window.location.href=`http://localhost:3000/seller`}
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

      <section className="bg-[length:1350px_700px] bg-center bg-no-repeat " style={{backgroundImage:`url('https://www.jeffbullas.com/wp-content/uploads/2022/04/The-10-Best-B2B-eCommerce-Websites-For-Business-Growth.jpg')`}}>
        <div className='container flex flex-row'>
          <div style={{marginRight:10,border:8,padding:44}} className=" w-2/5 mx-auto  space-y-12 "  >
            <div style={{border:8}} className=" p-16 shadow-md bg-slate-200 bg-opacity-25 rounded-3xl">
              <h1 className='text-4xl font-semibold text-gray-900 text-black-500'>Log in to Exclusive</h1>
              <p className="text-black-500 text-xl font-semibold text-gray-700">Enter your details below</p>
              <div className="relative z-0 w-full mb-5 group">
                <div className='mt-10'>
                  <input
                    type="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className=" relative z-0 w-full mb-5 group mt-4">
                    <input
                      type="password"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <p className="text-black ml-40 mt-2" onClick={() => { }}>Forget Password ?</p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button 
                    type="button"
                    className="focus:outline-none text-white mt-10 bg-black hover:bg-slate-300 hover:text-black focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-40 mr-20"
                    onClick={()=>{loging()}}
                  >
                    Log in
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
