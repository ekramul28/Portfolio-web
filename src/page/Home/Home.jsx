import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Header/Navbar";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div >

            <div className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>
                <Banner></Banner>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;