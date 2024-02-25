"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import "flowbite";
import Nav from "../../header/page";
interface Products {
  categoryCatId: number;
  description: string;
  name: string;
  price: number;
  prodId: number;
  quantity: number;
  userUserId: number;
}
interface imgages {
  img: string;
  productProdId: number;
}

const ProductPage = () => {
  const params = useParams<{ Id: string }>();
  const [image, setImage] = useState<imgages[]>([]);
  const [activeImg, setActiveImage] = useState<string>();
  const [amount, setAmount] = useState<number>(1);
  const [product, setProduct] = useState<Products[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/apii/product/${params.Id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`http://localhost:8080/img/getAll/${params.Id}`)
      .then((res) => {
        setImage(res.data);
        setActiveImage(res.data[0].img);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (product.length === 0) {
    return (
      <div
        style={{ background: "#f3f3f3" }}
        className="flex justify-center items-center w-full h-full font-bold text-4xl"
      >
        <div className="" role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green-500"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="ml-5">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#f3f3f3" }} className="h-full">
      <Nav />
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex gap-x-2 flex-row justify-between h-24">
              {image.map((e, i) => {
                return (
                  <div className=" shadow-lg border rounded-lg">
                    <img
                      key={i}
                      src={e.img}
                      alt=""
                      className="w-28 h-28 rounded-md cursor-pointer"
                      onClick={() => setActiveImage(e.img)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* ABOUT */}
          <div className="flex flex-col gap-4 lg:w-2/4">
            <div>
              <span className=" text-green-700 font-semibold">
                Special Sneaker
              </span>
              <h1 className="text-3xl font-bold">{product[0].name}</h1>
            </div>
            <p className="text-gray-700">{product[0].description}</p>
            <h6 className="text-2xl font-semibold">$ {product[0].price}.00</h6>
            <div className="flex flex-row items-center gap-12">
              <div className="flex flex-row items-center">
                <button
                  style={{ color: "#17998a" }}
                  className="bg-gray-200 py-2 px-5 rounded-lg text-3xl"
                  onClick={() => setAmount((prev) => prev - 1)}
                >
                  -
                </button>
                <span className="py-4 px-6 rounded-lg">{amount}</span>
                <button
                  style={{ color: "#17998a" }}
                  className="bg-gray-200 py-2 px-4 rounded-lg  text-3xl"
                  onClick={() => setAmount((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <button
                style={{ background: "#17998a" }}
                className=" text-white font-semibold py-3 px-16 rounded-xl h-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
