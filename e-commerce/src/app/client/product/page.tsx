import axios from "axios";
import React, { useState, useEffect } from "react";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

interface Product {
  categoryCatId: number;
  description: string;
  name: string;
  price: number;
  prodId: number;
  quantity: number;
  userUserId: number;
}

interface ProductsProps {
  prod: Product;
}

function Productsales({ prod }: ProductsProps) {
  const [image, setImage] = useState<string>("");
  const [fav, setFav] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/img/getAll/${prod.prodId}`)
      .then((res) => {
        setImage(res.data[0].img);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8080/fav/getone/1/${prod.prodId}`)
      .then((res) => {
        if (res.data.length > 0) {
          setFav(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:8080/rate/getone/${prod.prodId}`)
      .then((res) => {
        setAverageRating(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToWishlist = () => {
    axios
      .post("http://localhost:8080/fav/add", {
        userId: 1,
        productId: prod.prodId,
      })
      .then((res) => {
        console.log("Product added to wishlist:", res.data);
        setFav(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeFromWishlist = () => {
    axios
      .delete(`http://localhost:8080/fav/deletehome/1/${prod.prodId}`)
      .then((res) => {
        console.log("Product removed from wishlist:", res.data);
        setFav(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rate = (value: number) => {
    axios
      .post("http://localhost:8080/rate/add", {
        userId: 1,
        prodId: prod.prodId,
        rating: value,
      })
      .then((res) => {
        setRating(value);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full h-2/6">
      <div className="relative">
        <img
          className="p-4 rounded-t-lg w-full h-64"
          src={image}
          alt="Product"
        />
        <div className="absolute top-5 right-4 p-2">
          {fav ? (
            <MdFavorite
              style={{ color: "#17998a" }}
              className="w-8 h-8"
              onClick={removeFromWishlist}
            />
          ) : (
            <GrFavorite className="w-8 h-8" onClick={addToWishlist} />
          )}
        </div>
      </div>

      <div className="px-5 pb-5">
        <Link href={`/client/productpage/${prod.prodId}`}>
          <h5 className="h-5 font-semibold tracking-tight text-gray-900 mb-10">
            {prod.name}
          </h5>
        </Link>
        <div>
          <div className=" font-semibold flex">
            Rated
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <CiStar
                  key={i}
                  className={
                    i < (averageRating || 0)
                      ? "text-green-400 cursor-pointer "
                      : "text-gray-400 cursor-pointer"
                  }
                  size={25}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Star ratings */}
          {Array.from({ length: 5 }, (_, i) => (
            <CiStar
              key={i}
              className={
                i < (rating || 0)
                  ? "text-green-400 cursor-pointer "
                  : "text-gray-400 cursor-pointer"
              }
              size={25}
              onClick={() => rate(i + 1)}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold ">${prod.price}</span>
          <a
            href="#"
            style={{ background: "#17998a" }}
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default Productsales;
