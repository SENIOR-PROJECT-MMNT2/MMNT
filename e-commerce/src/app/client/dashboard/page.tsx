"use client"
import React from 'react'
import Header from  '../header/page';
import Nav from '../nav/page';
import Accueil  from '../accueil/page';
import BestSelling from '../bestselleing/page';
import Sales from '../sales/page';
import Exploreproducts from '../exploreproduct/page';
import New from '../new product/page';
import Footer from '../footer/page';
function page() {
  
  return (
    <div style={{background:'#F3F3F3'}}>
      <Header/>
      <Nav/>
      <Accueil/>
      <Sales/>
      <div className='flex justify-center items-center w-full'>
      <div className=' w-full'>
      <video style={{height:"70vh"}} className='w-full rounded-2xl'  preload='auto' loop  autoPlay muted>
  <source className='w-full h-full rounded-2xl' src="https://www.apple.com/105/media/us/mac/family/2023/1b2bbf5c-ddc5-44a1-9dfb-7a51c49143fa/anim/welcome/xlarge.mp4" type="video/mp4" />
</video>

</div>
      </div>
      

      <BestSelling/>
      <Exploreproducts/>
      <New/>
      <Footer/>

    </div>
  )
}

export default page
