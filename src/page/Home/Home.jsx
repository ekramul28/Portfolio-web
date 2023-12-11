import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Header/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto">
                <Banner></Banner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;