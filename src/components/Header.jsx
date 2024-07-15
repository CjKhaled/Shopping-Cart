import Card from "./Card"
import classes from "../styles/Header.module.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <section className={classes.container}>
        <div className={classes.headerContent}>
            <div className={classes.leftSide}>
                <h1 className={classes.title}>We sell random things at a <span className={classes.decorate}>great</span> price. It doesn&apos;t get more <span className={classes.decorate}>simple</span> than that.</h1>
                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum optio?</p>
                <Link to={`/shop`} className={classes.button}>Explore Now</Link>
            </div>
            <div className={classes.rightSide}>
                <Card isHeader={true}/>
            </div>
        </div>
    </section>
  )
}

export default Header
