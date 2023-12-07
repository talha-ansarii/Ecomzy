import { useEffect, useState } from "react";
import Product from "../components/Product"

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading , setLoading] = useState(false);
  const [posts , setPosts] = useState([]);

  

  async function fetchProductData(){
    setLoading(true);
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        setPosts(data);
        console.log(data);

    }
    catch(error){
      console.log("Error during API call")
      setPosts([]);
    }
  

  }

  useEffect( () => {
    const data = fetchProductData();
  }, [] );

  return (

    <div className="w-full">

      <div className="w-[70%] m-auto grid grid-cols-4 gap-4 mb-5">
        {
          posts.map( (card) => <Product key={card.id} data={card} /> )
        }
      </div>

    </div>
  
    );
};

export default Home;
