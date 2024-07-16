import Card from "./Card"
import classes from '../styles/Shop.module.css'

const ShopContent = () => {
  return (
    <section className={classes.container}>
        <div className={classes.shopContent}>
            <h1 className={classes.title}>Our Collection</h1>
            <div className={classes.items}>
                <Card title={`ITEM1`} />
                <Card title={`ITEM2`} />
                <Card title={`ITEM3`} />
                <Card title={`ITEM4`} />
                <Card title={`ITEM5`} />
                <Card title={`ITEM6`} />
            </div>
        </div>
    </section>
  )
}

export default ShopContent
