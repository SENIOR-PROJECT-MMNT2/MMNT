import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="">
        <div className=" flex  w-full gap-10  font-medium py-4 text-black">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            {`MEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            {`WOMEN'S`}
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
