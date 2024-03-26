import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";

const Cart = () => {

  const cart = useSelector((state) => state.cart_items);
  const [totalPrice,setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice( cart.reduce((acc,curr) => acc+curr.price, 0) );
  }, [cart]);
  return (
    <div>
    {
      cart.length > 0 ? 
        <div>
          {
            cart.map((item,index) => (
              <CartItem key={item.id} item = {item} itemIndex = {index}/>
            ))
          }
        </div> 
        : (<div>
            <h1>Cart is empty</h1>
            <NavLink to="/"><button>Shop Now</button></NavLink>
          </div>)
    }
    <div>
      <div>
        <p>Your Cart</p>
        <h1>SUMMARY</h1>
        <p>Total items: {cart.length}</p>
      </div>

      <div>
        <p>Total Amount: <span>${totalPrice}</span></p>
        <button>Checkout Now</button>
      </div>
    </div>
  </div>)
};

export default Cart;
