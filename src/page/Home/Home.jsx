import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Header/Navbar";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div >

            <div className="max-w-screen-xl mx-auto">
                <Banner></Banner>
                <Service></Service>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;