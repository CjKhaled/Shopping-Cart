import Card from "./Card"
import classes from "../styles/Header.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import animation from '../styles/Load.module.css'


const Header = () => {
  const APILink = 'https://fakestoreapi.com/products?limit=6'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APILink);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

  if (loading) {
    return (
      <div className={animation.container}>
        <div className={animation.loader}></div>
      </div>
    ) 
  } 

  return (
    <section className={classes.container}>
        <div className={classes.headerContent}>
            <div className={classes.leftSide}>
                <h1 className={classes.title}>We sell random things at a <span className={classes.decorate}>great</span> price. It doesn&apos;t get more <span className={classes.decorate}>simple</span> than that.</h1>
                <p className={classes.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora expedita consectetur tenetur veritatis eligendi. Veritatis laboriosam quos cum optio?</p>
                <Link to={`/shop`} className={classes.button}>Explore Now</Link>
            </div>
            <div className={classes.rightSide}>
                <Card isHeader={true} title={data[0].title} price={data[0].price} image={data[0].image} />
            </div>
        </div>
    </section>
  )
}

export default Header
