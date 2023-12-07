import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({item}) => {

  const desc = `${item.description.substring(0,81)}...`;
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(item.id));  
    toast.error("Item Removed")

  }
  return (
    
    <div className="w-full">

    <div className="flex w-[100%]">
      
      <div className="w-[30%] px-10 py-5 ">
        <img className="" src={item.image}/>
      </div>

      <div className="flex flex-col justify-between p-10">
        <h1 className="font-bold text-xl">{item.title}</h1>

        <p className="text-sm text-gray-500"> {desc} </p>

        <div className="flex justify-between w-full">
          <p className="font-bold text-green-700">${item.price}</p>
          <button onClick={removeItem} className="relative group">
            <div className="absolute  top-[5px] right-[-23px] w-[30px] h-[30px] rounded-full group-hover:bg-red-400 bg-red-300"></div>
            <MdDelete className="absolute text-red-500 group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>

    <div className="w-full h-[2px] bg-black" ></div>
    </div>

  
    );
};

export default CartItem;
