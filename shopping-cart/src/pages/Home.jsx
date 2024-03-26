import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
// import { products } from "../data";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])

  async function fetchData(){
    setLoading(true);
    try{
      const output = await fetch(API_URL);
      const data = await output.json();
      setProducts(data);
    }
    catch(err){
      console.log(err);
      console.log("API can not be fetched");
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    }, [])
  
  return (
  <div>
  {
    loading?<Spinner/> : 
      products.length>0 ? 
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product}/>
          ))}
        </div>
        : <div>No Products Available</div>

  }
  </div>)
};

export default Home;
