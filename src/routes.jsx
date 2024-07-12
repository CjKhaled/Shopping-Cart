import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./pages/Error";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/shop",
        element: <Shop />,
    }
]

export default routes