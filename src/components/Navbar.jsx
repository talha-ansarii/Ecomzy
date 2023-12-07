
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector( (state) => state );


  return (
  
<div className="w-full bg-slate-900 ">
<div className="flex justify-between max-w-[70%] m-auto p-3 mb-3">
      <NavLink to="/">
      <img width={200} src="logo.png"></img>
      </NavLink>

      <div className="flex justify-center items-center space-x-2 ">

      <NavLink to="/">
      <p className="text-white hover:text-green-400 transition duration-300 font-bold mt-4 mr-3">Home</p>
      </NavLink>

      <NavLink to="/cart">
        <div className="relative">

        {
          cart.length > 0 &&
          <div className=" absolute w-[15px] h-[15px] top-[-4px] text-white text-xs flex justify-center item-cemter animate-bounce right-[-27px] bg-green-700 z-10 rounded-full"><span>{cart.length}</span>  
          </div>
        }
          
          
        
        
          <FaShoppingCart className=" w-[20px] z-0 absolute text-white hover:text-green-400 transition duration-300"/>

        
        </div> 
      </NavLink>
      

      </div>


    </div>
</div>


    );
};

export default Navbar;
