import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add_to_cart,remove_from_cart } from '../redux/Slices/cartSlice';
import toast from 'react-hot-toast'
function Product({product}) {

  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart_items)

  function remove(){
      dispatch(remove_from_cart(product.id))
      toast.warning("Removed from cart");
    }
    function add()
    {
      dispatch(add_to_cart(product))
      toast.success("Added to cart");
    }

  return (
    <div>
      <div>
        <p>{product.title}</p>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <img src={product.image} alt="unavailable img"/>
      </div>
      <div>
        <p>{product.price}</p>
      </div>
        {
          cart.some((p) => p.id == product.id) ? 
            <button onClick={remove}>Remove Item</button> 
            : <button onClick={add}>Add to Cart</button>
        }
    </div>
  )
}

export default Product