import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Shop = () => {
  return (
    <div>
      <Navbar />
      <h1>This is the ShopPage</h1>
      <Link to={`/`}>Go Home</Link>
    </div>
  )
}

export default Shop
