import { IoCartOutline } from "react-icons/io5";
import classes from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Cart = ({ items }) => {
  return (
    <Link to={`/checkout`} className={classes.cart}>
      <IoCartOutline size={`1.75em`} color="white" />
      <span className={classes.numberItems}>{items}</span>
    </Link>
  );
};

export default Cart;
