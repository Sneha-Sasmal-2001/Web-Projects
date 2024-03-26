import { NavLink } from "react-router-dom";
import {FaShoppingCart} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
    <nav>
      <NavLink to="/">Logo</NavLink>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">
          <FaShoppingCart/>
        </NavLink>
      </div>
    </nav>
  </div>)
};

export default Navbar;
