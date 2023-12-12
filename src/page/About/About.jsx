import Education from "../Education/Education";
import Skills from "../Skills/Skills";

const About = () => {
    return (
        <div>
            <div>

                <img className="w-full" src="https://i.ibb.co/G5DxK27/Untitled-design-4.png" alt="" />
            </div>
            <div className="mx-2 my-6">
                <h1 className="text-white font-bold text-3xl my-2">ABOUT ME</h1>
                <p className="text-white my-2">I’m a Front End Web developer who is passionate about making error-free websites . I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic and goal-oriented, and I always work with an end goal in mind.  I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with react and I am a good person. I would like to become a full stack web developer within the next to years.</p>
            </div>
            <Education></Education>
            <Skills></Skills>
        </div>
    );
};

export default About;