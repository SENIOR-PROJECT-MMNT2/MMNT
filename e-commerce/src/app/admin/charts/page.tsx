"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import Sidebar from "../components/sidebar"
import Navbar from "../components/navbar"
import React,{useEffect,useState} from 'react'
import axios from "axios"


export default function Charts() {
const[sellers,setSellers]=useState([])
const[buyers,setBuyers]=useState([])
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
              backgroundColor: ["red","blue"],
            },
          ],
        }}
      />
</div>

<div>

</div>



</div>
  )
}
