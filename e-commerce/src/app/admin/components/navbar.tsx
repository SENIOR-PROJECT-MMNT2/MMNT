import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div style={{marginTop:"-330px",zIndex:"1" }}>

  <div className="flex flex-wrap place-items-center h-screen">
    <section className="relative mx-auto">
 
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="#">
       
            Exclusive
          </a>
    
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
           <Link href={"/admin/charts"} > <li>
              <a className="hover:text-gray-200" href="#">
                Charts
              </a>
            </li>
            </Link>
            <li>
              <a className="hover:text-gray-200" href="#">
                Catagories
              </a>
            </li>
            <li>
              <a className="hover:text-gray-200" href="#">
                Products
              </a>
            </li>
            <li>
            </li>
          </ul>
       
          <div className="hidden xl:flex items-center space-x-5 items-center">
       
            <a className="flex items-center hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      
        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 hover:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </a>
      </nav>
    </section>
  </div>
  <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
   
   
  </div>


    </div>
  )
}
