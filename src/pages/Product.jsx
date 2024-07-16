import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import ProductContent from "../components/ProductContent"

const Product = () => {
  const { title } = useParams();

  return (
    <div>
      <Navbar />
      <ProductContent title={title} />
    </div>
  )
}

export default Product
