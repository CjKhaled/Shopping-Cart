import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Product from "./pages/Product";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/shop",
        element: <Shop />,
    },
    {
        path: "/shop/:title",
        element: <Product />
    }
]

export default routes