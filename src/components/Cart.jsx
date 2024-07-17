import { IoCartOutline } from "react-icons/io5"
import classes from '../styles/Navbar.module.css'


const Cart = ({ numItems = 0 }) => {
  return (
    <div className={classes.cart}>
      <IoCartOutline size={`1.75em`} color="white"/>
      <span className={classes.numberItems}>{numItems}</span>
    </div>
  )
}

export default Cart
