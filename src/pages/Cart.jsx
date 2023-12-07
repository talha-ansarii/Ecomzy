import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


  const Cart = () => {
    const {cart} = useSelector( (state) => state);
    const [totalAmount , setTotalAmount] = useState(0);

    useEffect( () => {
      setTotalAmount( cart.reduce((acc, curr) => acc + curr.price, 0  ));
    }, [cart] );


    

  return (

    <div>

      {
        cart.length > 0 ? 
        (<div className="flex w-[70%] m-auto gap-4">
            <div className="w-[70%] mb-10">
              {
                cart.map( (item) => <CartItem key={item.id} item={item} /> )
              }
            </div>
            <div className="w-[30%] flex flex-col justify-between my-20">

              <div className="flex flex-col">

              <h1 className="text-2xl font-bold text-green-700">YOUR CART</h1>
              <h1 className=" mb-5 text-5xl font-bold text-green-700 ">SUMMARY</h1>
              <p className="font-bold">Total Items: <span>{cart.length}</span></p>

              </div>

              <div className="flex flex-col">
                <p className="font-bold ">Total Amount: <span>${totalAmount}</span> </p>
                <button className="w-full px-4 py-2 text-white bg-green-700 rounded-md ">Checkout Now</button>
              </div>



            </div>
        </div>)
        :
        (<div className= " w-full h-[85vh] flex justify-center items-center  " >

              <div>

              <p className="text-lg font-bold mb-3">Your Cart Is Empty!!</p>
          <NavLink to={"/"}>
            <button className=" hover:bg-white hover:text-green-700 border font-bold transition duration-500 border-green-700 w-full text-white px-4 py-2 rounded-md bg-green-700">SHOP NOW</button>
          </NavLink>


              </div>
          



        </div>)
      }

    </div>
  );
};

export default Cart;
