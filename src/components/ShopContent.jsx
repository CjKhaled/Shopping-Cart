import Card from "./Card"
import classes from '../styles/Shop.module.css'
import { useEffect, useState } from "react";

const ShopContent = () => {
  const APILink = 'https://fakestoreapi.com/products?limit=6'
  const indexes = [0, 1, 2, 3, 4, 5]
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APILink);
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`)
        }
        const responseData = await response.json();
        setData(responseData);
        setError(null)
      } catch (err) {
        setError(err.message)
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData();
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <section className={classes.container}>
        <div className={classes.shopContent}>
            <h1 className={classes.title}>Our Collection</h1>
            <div className={classes.items}>
                {indexes.map(index => (
                  <Card key={index} title={data[index].title} price={data[index].price} image={data[index].image} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default ShopContent
