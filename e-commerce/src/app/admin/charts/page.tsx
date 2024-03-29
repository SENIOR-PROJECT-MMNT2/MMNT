"use client";
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

import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import React,{useEffect,useState} from 'react'
import axios from "axios"
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
      '#DD5953 '
    ],
    borderColor: [
      '#9C9042'
    ],
    borderWidth: 1
  }]
})
useEffect(()=>{
  axios.get('http://localhost:8080/client/getSome/seller')
  .then((res)=>{
    setSellers(res.data)
  })
  .catch((err)=>{
  console.log(err)
  })
  axios.get('http://localhost:8080/client/getSome/buyer')
  .then((res)=>{
   setBuyers(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  axios.get('http://localhost:8080/apii/product')
  .then((res)=>{
    setProducts(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  axios.get('http://localhost:8080/client/getAlle')
.then((res)=>{
console.log(res.data);
setAllusers(res.data)
})
.catch((err)=>{console.log(err);
})
},[])




return (
<div>
<div>
<Sidebar/>
</div>
<div>
<Navbar/>
</div>

<div style={{marginLeft:"1100px",marginTop:"-52px"}} >
<Doughnut
        data={{
          labels: [
            "Sellers",
            "Buyers",
          ],
          datasets: [
            {
              data: [sellers.length, buyers.length],
              backgroundColor: ["#3985E1","#DB3B16"],
            },
          ],
        }}
      />
</div>

<div style={{marginLeft:"350px",marginTop:"-330px",width:"600px"}} >
<Bar data={data} />
</div>

<div style={{marginLeft:"390px",marginTop:"-600px",flexDirection:"row",display:"flex",gap:"120px"}}>

<a
  href="#"
  className="block w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>       
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   Products
  </h5>
  <p className=" ml-9 font-normal text-gray-700 dark:text-gray-400">
  {products.length}
  </p>
</a>
<a
  href="#"
  className="block w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>       
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   Users
  </h5>
  <p className=" ml-9 font-normal text-gray-700 dark:text-gray-400">
  {allusers.length}
  </p>
</a>

<a
  href="#"
  className="block w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>       
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   Reviews
  </h5>
  <p className=" ml-9 font-normal text-gray-700 dark:text-gray-400">
  {products.length}
  </p>
</a>

<a
  href="#"
  className="block w-40 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>       
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
   Reports
  </h5>
  <p className=" ml-9 font-normal text-gray-700 dark:text-gray-400">
  {products.length}
  </p>
</a>
  
</div>
</div>
  )
}
