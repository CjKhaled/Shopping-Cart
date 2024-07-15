import Card from "./Card"
import classes from '../styles/Shop.module.css'

const ShopContent = () => {
  return (
    <section className={classes.container}>
        <div className={classes.shopContent}>
            <h1 className={classes.title}>Our Collection</h1>
            <div className={classes.items}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    </section>
  )
}

export default ShopContent
