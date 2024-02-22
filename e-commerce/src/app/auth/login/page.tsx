'use client'  
import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

interface loginData {
  email: string;
  password: string
}
export default function Login () {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  

  const loging = (): void => {
    axios.post(`http://localhost:3000/auth/login`, { email: email, password: password })
      .then((result) => {
        Cookies.set('token', result.data.token);
        Cookies.set("id", result.data.user.userId);
        console.log(result.data.user.userId, "userId");
        console.log("done");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}></div>
      <section>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          <div>
            <img className="w-90 h-50 ml-20 mb-10" src="" alt="Login" />
          </div>
          <div className="max-w-md mx-auto mr-28 space-y-12">
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
            <div style={{ display: "flex", justifyContent: "flex-end" }} className='md:text-left mr-56'>
              <button
                type="submit"
                className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={loging}
              ><Link href="/">
                   Log in
            </Link>
              </button>
              <p className="text-red-500" onClick={() => { }}>Forget Password ?</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

