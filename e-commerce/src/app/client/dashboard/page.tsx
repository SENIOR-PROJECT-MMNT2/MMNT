import React from 'react'
import Header from  '../header/page';
import Nav from '../nav/page';
import Accueil  from '../accueil/page';
import BestSelling from '../bestselleing/page';
import Sales from '../sales/page';
function page() {
  
  return (
    <div>
      <Header/>
      <Nav/>
      <Accueil/>
      <Sales/>
      <div className='flex justify-center items-center my-10'>
        <img className='h-[400px] w-3/5 border rounded-lg' src="https://i.pinimg.com/originals/30/2f/8d/302f8dfbdae1fe192c677c86b0cb3e07.jpg" alt="" />
      </div>
      <BestSelling/>
    </div>
  )
}

export default page
