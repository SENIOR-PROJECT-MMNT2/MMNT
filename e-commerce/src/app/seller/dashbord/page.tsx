'use client'
import Link from "next/link";
import React,{ useState,useEffect,useRef}from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {

    CategoryScale,
    LinearScale,
    BarElement,
    Title,
  
  } from 'chart.js';
  import { Doughnut } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  ChartJS.register(ArcElement, Tooltip, Legend);
  



  import { Bar } from 'react-chartjs-2';
  
  export default function Charts() {
  const[sellers,setSellers]=useState([])
  const[buyers,setBuyers]=useState([])
  const[products,setProducts]=useState([])
  const [allusers,setAllusers]=useState([])
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Sales by Month',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        '#17998a'
      ],
      borderColor: [
        '#9C9042'
      ],
      borderWidth: 1
    }]
  })
    return(
       <div >
          <div>
      
           <div style={{display:'flex',width:'100%'}}>

           <div >
            <div  className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
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
            <Link href={"/seller/addproduct"}> <div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd"></path>
                </svg>
              </div>
              addproduct
            </div>
            </Link>  
            <Link href={"/seller/customer"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
              <div className="grid place-items-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
                </svg>
              </div>Customer
            </div>
            </Link>
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
        </div>
       </div>
       <div >
       <div style={{marginLeft:"1100px",marginTop:"-250px"}} >
<Doughnut
        data={{
          labels: [
            "Sellers",
            "Buyers",
          ],
          datasets: [
            {
              data: [sellers.length, buyers.length],
              backgroundColor: ["#17998a","#3985E1"],
            },
          ],
        }}
      />
</div>

<div style={{marginLeft:"350px",marginTop:"-550px",width:"800px"}} >
<Bar data={data} />
</div>
<div>
       <div className="top- left-0 w-full px-10 py-6 flex justify-center" style={{marginLeft:200 ,marginTop:-700}}>
    <div className="mb-4" style={{ width: "30%", display: "flex" }}>
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">
                    Sales Total
                </p>
                <p className="text-xs text-gray-400">
                    $2500
                </p>
            </div>
        </div>
    </div>
    <div className="mb-5" style={{ width: "30%", display: "flex", marginLeft: "20px" }}>
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">
                    Average Order Value
                </p>
                <p className="text-xs text-gray-400">
                    $500.8
                </p>
            </div>
        </div>
    </div>
    <div className="mb-5" style={{ width: "30%", display: "flex", marginLeft: "20px" }}>
        <div className="relative w-64 p-4 overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="w-4/6">
                <p className="mb-2 text-lg font-medium text-gray-800">
                    Average Order Value
                </p>
                <p className="text-xs text-gray-400">
                    $500.8
                </p>
            </div>
        </div>
    </div>
</div>
</div>
       </div>
       <div>
       </div>
       </div>
       
    )
}