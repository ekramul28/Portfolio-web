import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../page/Home/Home";
import ContactR from "../page/contactRout/ContactR";
import About from "../page/About/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <ContactR></ContactR>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
]);


export default router;