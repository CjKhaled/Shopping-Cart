import { Link } from "react-router-dom";
import classes from "../styles/Card.module.css";

const Card = ({ isHeader = false, title, price, image }) => {
  return (
    <Link
      to={isHeader ? `/shop` : `/shop/${title}`}
      style={{ textDecoration: "none" }}
    >
      <div className={isHeader ? classes.headerCard : classes.card}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.item}>
          <h2 className={classes.name}>{title}</h2>
          <h3 className={classes.price}>${price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
