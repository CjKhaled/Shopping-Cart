import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Link to={`shop`}>Shop</Link>
    </div>
  )
}

export default Home
