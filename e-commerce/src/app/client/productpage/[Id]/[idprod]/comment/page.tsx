import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from "next/navigation";
interface us{
    lastName:string,
    firstName:string
}
interface Review {
  userId: number;
  prodId: number;
  comment: string;
  user:us
}

function Comment() {
    const params = useParams<{Id:string ; idprod: string}>();
    const [reviewText, setReviewText] = useState<string>("");
    const [reviews, setReviews] = useState<Review[]>([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/com/getall/${params.idprod}`)
        .then((res) => {
          setReviews(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    },[reviews])
    const addrev= () => {
        axios
          .post(`http://localhost:8080/com/add`, {
            prodId: params.idprod,
            userId:params.Id,
            comment: reviewText,
          })
          .then((res) => {
            setReviews([...reviews, res.data]);
            setReviewText("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
  return (
    <div>
          <h1 className="font-bold text-3xl mb-3">Review</h1>
          <div className="flex flex-col gap-4">
            {reviews.map((e,i)=>{
                return(
                    <div key={i} className="bg-white flex flex-col gap-3 p-5 border shadow rounded-md">
                        <h1 style={{ color: "#17998a" }} className="font-semibold text-2xl">{e.user.lastName}  {e.user.firstName}</h1>
                        <h1 className="  text-lg">{e.comment}</h1>
                    </div>
                    
                )
            })}
          </div>
          <div>
        <input
                type="text"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Write a review"
                className="border p-2 rounded-lg w-full my-5 "
              />
              <button
                style={{ background: "#17998a" }}
                className=" text-white font-semibold py-3 px-16 rounded-xl h-full"
                onClick={()=>{
                  addrev()
                }}
              >
                Add Review
              </button>
          </div>

        </div>
  )
}

export default Comment
