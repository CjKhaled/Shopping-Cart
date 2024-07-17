import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import ProductContent from "../components/ProductContent"
import animation from '../styles/Load.module.css'
import { useEffect, useState } from "react";


const Product = () => {
  const APILink = 'https://fakestoreapi.com/products?limit=6';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const indexes = [0, 1, 2, 3, 4, 5]
  const { title } = useParams();

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

  const findProduct = () => {
    const product = indexes.filter(index => data[index].title == title);
    return data[product]
  }

  const product = findProduct();

  return (
    <div>
      <Navbar />
      <ProductContent title={title} image={product.image} price={product.price} />
    </div>
  )
}

export default Product
