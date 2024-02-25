import React from 'react'
import Header from "../client/header/page"

const AboutUS = () => {
      return (
    <>
        <div style={{   background:"#F3F3F3 ", width: "100%", height: "100vh", borderTop: "1px solid black"}}>
        <Header/>
    <div className=" flex flex-row justify-center w-full">
      <div className="bg-bg w-[1437px] h-[596px] relative">
        <div className="gap-[40px] absolute top-[150px] left-[87px] inline-flex flex-col items-start">
          <div className="text-4xl md:text-5xl font-semibold text-black">
            Our Story
          </div>
          <div className="gap-[24px] relative flex-[0_0_auto] inline-flex flex-col items-start">
            <p className="relative w-[525px] mt-[-1.00px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in
              Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has
              10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="relative w-[505px] [font-family:'Poppins-Regular',Helvetica] font-normal text-text-2 text-[16px] tracking-[0] leading-[26px]">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse
              assotment in categories ranging&nbsp;&nbsp;from consumer.
</p>
          </div>
        </div>
        <div className="absolute w-[705px] h-[500px] top-[50px] left-[686px] bg-[#eb7ea8] rounded-[4px_0px_0px_4px] overflow-hidden">
          <img
            className="absolute w-[705px] h-[500px] top-0 left-0"
            alt="affrican "
            src="https://www.usbank.com/dam/images/about-us-bank/company-blog/Double-Bonus-16x9.jpg"
            />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default AboutUS
