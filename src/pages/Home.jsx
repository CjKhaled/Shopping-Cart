import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <h1>This is the HomePage</h1>
      <Link to={`shop`}>Shop</Link>
    </div>
  )
}

export default Home
