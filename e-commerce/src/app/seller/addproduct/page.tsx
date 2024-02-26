
"use client"
import { CldUploadWidget } from 'next-cloudinary';
import Link from "next/link";
import axios from "axios";
import React, { useState, useEffect } from 'react';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
  
}

interface Category {
  content: string;
}

export default function MyComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/category/getAll`)
      .then((res) => {
        setCategory(res.data);
        console.log("this is category", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "eg7up7vc")

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/du0wpkjrs/upload",
        formData
      );
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      throw error;
    }
  };

  const insertProduct = async () => {
    try {
      if (!image) {
        throw new Error("Please select an image");
      }

      const mainImageUrl = await uploadImage(image);
      const newProduct: Product = {
        name,
        description,
        price,
        image: mainImageUrl,
        quantity: parseInt(quantity),
      };

       axios.post(`http://localhost:8080/apii/addproduct`, newProduct);
      console.log("Product added successfully");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

    return(
  <div className='background-color: rgb(	243, 243, 243 ) '>;   
  <div>
  <div>
   <div style={{display:'flex',width:'100%'}}>

   <div >
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
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
    <Link href={"/seller/addproduct"}><div role="button"  className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
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
<>
{/* component */}
<div style={{marginTop:"-750px"}} >
<div>
</div>
<form  style={{width :"40%",marginLeft:400,height:"30%"}}className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">

<div className="relative pt-4" style={{width:200}}>
<label htmlFor="name" className="text-base leading-7 text-blueGray-500" >
  name
</label>
<input
  type="text"
  id="name"
  name="name"
  placeholder="name"
  className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
  onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div className="flex flex-wrap mt-4 mb-6 -mx-3">
<div className="w-full px-3">
  <label
    className="text-base leading-7 text-blueGray-500"
    htmlFor="description"
   >
    description{" "}
  </label>
  <textarea
    className="w-full h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 apearance-none autoexpand"
    id="description"
    name="description"
    placeholder="Message..."
    defaultValue={""}
    onChange={(e)=>{setDescription(e.target.value)}}/>
</div>
</div>
<div style={{display	:'column',width:"70%",marginRight:4}}>
<div className="relative pt-4">
<label htmlFor="name" className="text-base leading-7 text-blueGray-500">
  stock
</label>
<input
  type="number"
  id="number"
  name="number"
  placeholder="number"
  className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
  onChange={(e)=>{setQuantity(e.target.value)}}/>
</div>
<div className="relative pt-4" style={{marginLeft:4}}>
<label htmlFor="name" className="text-base leading-7 text-blueGray-500">
  price
</label>
<input
  type="number"
  id="number"
  name="number"
  placeholder="number"
  className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
  onChange={(e)=>{setPrice(e.target.value)}}/>
</div>

<div className="relative mt-4" style={{marginLeft:4}}>
<label htmlFor="name" className="text-base leading-7 text-blueGray-500">
  category
</label>
<select className="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
{category.map((el,i)=>(
  <option key={i}>{el.content}</option>
   ))}

</select>
</div>
{/* <div className="w-64 p-2 m-auto bg-white shadow-lg rounded-2xl"style={{marginLeft:400,marginTop:50,Width:"25%"}}
  > */}
  <div className="h-20 w-63 mt-6">
      {/* Display the uploaded image if available */}
      {image && (
        <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-3/4 h-full" />
      )}
      {/* Input element for selecting an image */}
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        id="imageInput"
        className='border rounded-lg'
      />
      {/* Button to trigger the file input */}
      {/* <label htmlFor="imageInput" className="text-center ml-10 mt-10">
         image
      </label> */}
    </div>



</div>

<div className="flex items-center w-full pt-4 mb-4">
<button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 mt-10 "
   onClick={()=>{
        insertProduct()
        }}>
  {" "}
  AddProduct{" "}
</button>
</div>

</form>
</div>
</>
</div>



</div>
    
    
       
    )
}