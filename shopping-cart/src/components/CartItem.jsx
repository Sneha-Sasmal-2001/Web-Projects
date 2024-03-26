import { useDispatch } from "react-redux";
import { remove_from_cart } from "../redux/Slices/cartSlice";
import {FcDeleteDatabase} from 'react-icons/fc'
import toast from "react-hot-toast";
const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const remove = () => {
    dispatch(remove_from_cart(item.id));
    toast.success("Item removed");
  }
  return (
    <div>
    <div>
      <img src={item.image} alt="unavailable img"/>
    </div>
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <div>
        <p>{item.price}</p>
      <button onClick={() => remove}><FcDeleteDatabase/></button>
      </div>
    </div>
  </div>)
};

export default CartItem;
