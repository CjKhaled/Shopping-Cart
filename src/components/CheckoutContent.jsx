import data from "../data/data";
import { AiFillDelete } from "react-icons/ai";
import classes from "../styles/Checkout.module.css";
import { Link } from "react-router-dom";

const CheckoutContent = ({ removeFromCart }) => {
  return (
    <section className={classes.container}>
      <div className={classes.checkoutContent}>
        <div className={classes.leftSide}>
          <h2 className={classes.orderTitle}>Order Summary</h2>
          {data.map((item) => (
            <div key={item.name} className={classes.item}>
              <div className={classes.itemContent}>
                <Link
                  to={`/shop/${item.name}`}
                  style={{ textDecoration: `none` }}
                  className={classes.itemTitle}
                >
                  {item.name}
                </Link>
                <p className={classes.amount}>Amount: {item.count}</p>
              </div>
              <div className={classes.delete}>
                <AiFillDelete
                  onClick={() => removeFromCart(item.name)}
                  size={`30px`}
                  color="#f8604f"
                />
              </div>
            </div>
          ))}
        </div>
        <div className={classes.rightSide}>
          <div className={classes.table}>
            <h2 className={classes.total}>
              Total Cost: $
              {data.reduce((accum, curr) => accum + curr.count * curr.price, 0)}
            </h2>
            <button className={classes.button}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutContent;
