import { Outlet } from "react-router-dom";
import Navbar from "../shared/Header/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;