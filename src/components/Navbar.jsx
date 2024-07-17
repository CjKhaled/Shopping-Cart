import { NavLink } from "react-router-dom"
import Cart from "./Cart"
import classes from '../styles/Navbar.module.css'


const Navbar = ({ numItems }) => {
  return (
    <nav className={classes.nav}>
        <div className={classes.navContent}>
            <div className={classes.logo}>ShopDrop</div>
            <ul className={classes.navLinks}>
                <NavLink className={({isActive}) => isActive ? classes.activeNav : ""} to={`/`}>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? classes.activeNav : ""} to={`/shop`}>Shop</NavLink>
            </ul>
            <Cart numItems={numItems} />
        </div>
    </nav>
  )
}

export default Navbar
