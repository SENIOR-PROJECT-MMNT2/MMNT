
'use client';

import { Carousel } from 'flowbite-react';

function Accueil() {
  return (
    <div className='flex justify-center items-centerw-full'>
        <div className="mt-7  w-3/5 h-[500px]">
      <Carousel className=''>
        <img  src="https://shorturl.at/ahBOW" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div>
    </div>
    
  );
}
export default Accueil