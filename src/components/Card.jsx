import { Link } from 'react-router-dom';
import classes from '../styles/Card.module.css';

const Card = ({ isHeader = false, title }) => {
  return (
    <Link to={isHeader ? `/shop` : `/shop/${title}`} style={{textDecoration: 'none'}}>
      <div className={isHeader ? classes.headerCard : classes.card}>
        <div className={classes.image}>An Image</div>
        <div className={classes.item}>
          <h2 className={classes.name}>{title}</h2>
          <h3 className={classes.price}>$100</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
