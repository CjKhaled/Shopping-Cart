import { IoCartOutline } from "react-icons/io5"
import classes from '../styles/Navbar.module.css'


const Cart = () => {
  return (
    <div className={classes.cart}>
      <IoCartOutline size={`1.75em`} color="white"/>
      <span className={classes.numberItems}>0</span>
    </div>
  )
}

export default Cart
