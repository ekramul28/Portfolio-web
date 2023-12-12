
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Project from "../Project/Project";
import Service from "../Service/Service";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div >

            <div >
                <Banner></Banner>
                <Service></Service>
                <Project></Project>
                <Education></Education>
                <Skills></Skills>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;