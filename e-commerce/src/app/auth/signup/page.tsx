'use client'  
import Link from "next/link";
import axios from 'axios';
import { useState } from "react";
import Cookies from 'js-cookie';
import login from "../login/page";


interface SignupData {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  age: string;
  role: string;
}

export default function Signup () {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const signup = (): void => {
    const postData: SignupData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      age: age,
      role: role,
    };

    axios.post<{ token: string }>('http://localhost:8080/auth/signup', postData)
      .then((result) => {
        console.log("signed in");
        Cookies.set('token', result.data.token);
        console.log('done', result.data.token);
      })
      .catch((err: Error) => {
        console.log('Error:', err);
      });
 
  }

    return (
      <div>
          <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "2rem",
        }}
      >
      </div>
      <section>
        <div className='container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          <div >
          <img className="" alt="signup" />
          </div>
          <div className= "max-w-md mx-auto mr-28 space-y-12" >
            <h1 className='text-4xl font-semibold text-gray-900 text-black-500 '>Create an account</h1>
            <p className= "text-black-500 text-xl font-semibold text-gray-700 " > Enter your details below </p>
            <div className="grid md:grid-cols-2 md:gap-10">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(e) => { setFirstName(e.target.value); }}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="LastName"
                  value={lastName}
                  onChange={(e) => { setLastName(e.target.value); }}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </div>
                <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="passowrd"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); }}
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Age"
                  onChange={(e) =>  setAge(e.target.value) }
                />
              </div>

              <div className="flex items-start"></div>
              <div className="flex items-start mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isClient"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("Client")}
                    />
                  </div>
                  <label
                    htmlFor="isClient"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Client
                  </label>
                </div>
              </div>

              <div className="flex items-start mt-2">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="isSeller"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      onChange={() => setRole("Seller")}
                    />
                  </div>
                  <label
                    htmlFor="isSeller"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    {" "}
                    Seller
                  </label>
                </div>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={signup}
              ><Link href="/auth/login">
                Confirm
              </Link>
              </button>
              
            </div>
          </div>
        </div>
      </section> 
    </div>
    )
}