import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h1>Error, Page not found</h1>
      <Link to={`/`}>Go Back Home</Link>
    </div>
  )
}

export default Error
