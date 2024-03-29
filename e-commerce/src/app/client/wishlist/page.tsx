'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../header/page"
import Cookies from 'js-cookie';
import Link from "next/link";
interface Wish {
  
  idWishlist: number;
   name: string;
  price: number;
  prodId:number;
  description:string;
quantity:number
}
interface refre{

}
interface Image{
  image:string;
  imgId:number
}

const ReviewIcon: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <StarIcon key={index} color={index < rating ? "warning" : "disabled"} />
  ));

  return <div>{stars}</div>;
};

const WhishList = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const[refresh,setRefresh]=useState(false)
  const[id,setId]=useState(Cookies.get("id"))
  useEffect(() => {
    axios.get<Wish[]>(`http://localhost:8080/fav/getall/${id}`)
      .then(result => {
        console.log('wish', result.data);
        setWishes(result.data);
      }).catch(err => console.log(err));
      
  }, [refresh]);



 

  const deleted = (idWishlist: number ) => {
    axios.delete(`http://localhost:8080/fav/delete/${idWishlist}`)
      .then(() => {
        console.log("deleted fav");
        setRefresh(!refresh)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{   background:"#F3F3F3 ", width: "100%", height: "100vh", borderTop: "1px solid black"}}>

      <Header/>
      <div style={{ width: "100%", display: "flex" }}>
        <h1 style={{ marginTop: 60, marginLeft: 40, borderBottom: 1 }}>wishlist({wishes.length})</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4" >
        {wishes.map((e) => (
          <Card  className="w-full">
            <CardMedia component="img" height="160px" image= {e.product.images.map((el)=>{
              return el.img
            })} alt="Product" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {e.product.name} - ${e.product.price}
                <ReviewIcon rating={4} />
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              </IconButton>
            </CardActions>
            <IconButton  sx={{ color: "#17998a"}} className="absolute top-0 right-0 left-64" onClick={() => deleted(e.idWishlist)}>
              <DeleteIcon />
            </IconButton>
            <Button 
              onClick={() => {}}
              className= "mt-2 rigth-20"  sx={{ backgroundColor: "#17998a", width: "auto" }}
              variant="contained"
              disableElevation >
              ADD TO THE CART
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WhishList;
