import { FiPlus, FiMinus } from "react-icons/fi"
import { ImArrowUpRight2 } from "react-icons/im";
import { useState } from "react";
import classes from "../styles/Product.module.css"


const ProductContent = ({ title, image, price, addToCart }) => {
    const [productColor, setProductColor] = useState(0);
    const [productSize, setProductSize] = useState(0);
    const [itemCount, setItemCount] = useState(1);
    const colors = ['red', 'grey', 'green', '#7CB9E8'];
    const sizes = ['S', 'M', 'L'];
    
    const handleClick = (index) => {
        setProductColor(index)
    }
    
    const handleClick2 = (index) => {
        setProductSize(index)
    }

    const decrementCount = () => {
        itemCount !== 1 && setItemCount(itemCount - 1)
    }

    const incrementCount = () => {
        itemCount !== 9 && setItemCount(itemCount + 1)
    }

  return (
    <section className={classes.container}>
        <div className={classes.productContent}>
            <div className={classes.leftSide}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.rightSide}>
                <div className={classes.header}>
                  <h1 className={classes.title}>{title}</h1>
                   <h2 className={classes.price}>${price}</h2> 
                </div>
                <p className={classes.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis cum explicabo veniam maxime earum sunt praesentium debitis optio eaque deleniti! Quia aspernatur minima illo laboriosam.</p>
                <div className={classes.userChoose}>
                    <h3 className={classes.secondTitle}>CHOOSE COLOR</h3>
                    <div className={classes.colors}>
                        {colors.map((color, index) => (
                            <div key={index} className={index == productColor ? classes.activeColor : classes.color} onClick={() => handleClick(index)} style={{backgroundColor: color}}></div>
                        ))}
                    </div>
                </div>
                <div className={classes.userChoose}>
                    <h3 className={classes.secondTitle}>CHOOSE SIZE</h3>
                    <div className={classes.sizes}>
                        {sizes.map((size, index) => (
                            <div key={index} className={index == productSize ? classes.activeSize : classes.size} onClick={() => handleClick2(index)}>{size}</div>
                        ))}
                    </div>
                </div>
                <div className={classes.userInput}>
                    <div className={classes.numItems}>
                        <FiMinus size={`26px`} color="#f8604f" onClick={decrementCount} />
                        <h3 className={classes.amount}>{itemCount}</h3>
                        <FiPlus size={`26px`} color="#f8604f" onClick={incrementCount} />
                    </div>
                    <button className={classes.button} onClick={() => addToCart(title, price, itemCount)}>ADD TO CART <ImArrowUpRight2 color="white" size={`20px`} /></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductContent
