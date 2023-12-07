import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const Product = (props) => {

  const {cart} = useSelector( (state) => state );
  console.log(cart);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post));
    toast.success("Item Added")
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item Removed")

  }

  

  const post = props.data;
  const desc = `${post.description.substring(0,85)}...`;
  const newTitle = `${post.title.substring(0,15)}...`;

  return (

    <div className="w-[100%] p-3 flex flex-col justify-between items-center border rounded-lg 
    gap-3 shadow-md hover:scale-110 hover:bg-white transition duration-500 m-2 
    hover:shadow-[0px_0px_95px_53px_#00000024] group ">
      <div> 
                <h1 className="font-bold px-8">{newTitle}</h1>
                <p className=" px-8 text-xs text-gray-400">{desc}</p>

      </div>
                
                <div className="h-[180px]">
                <img className="px-8 h-full w-full object-contain" src={post.image}/>
                </div>
        

        <div className="flex justify-between w-full ">
          <p className="text-green-700 font-bold">${post.price}</p>
 
          {
            cart.some( (p) => p.id == post.id ) ? 
            (<button onClick={removeFromCart} className="text-xs px-2 py-1 border border-black rounded-full font-bold group-hover:bg-slate-600 group-hover:text-white  " >REMOVE ITEM</button> ) :
            (<button onClick={addToCart} className="text-xs px-2 py-1 border border-black rounded-full font-bold group-hover:bg-slate-600 group-hover:text-white  " >ADD TO CART</button>)
          }
        </div>
    </div>
  
    );
};

export default Product;
