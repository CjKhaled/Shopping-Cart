import classes from '../styles/Card.module.css'

const Card = ({ isHeader = false }) => {
  return (
    <div className={isHeader ? classes.headerCard : classes.card}>
      <div className={classes.image}>An Image</div>
      <div className={classes.item}>
        <h2 className={classes.name}>An Item</h2>
        <h3 className={classes.price}>$100</h3>
      </div>
    </div>
  )
}

export default Card
