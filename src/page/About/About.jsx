import Skills from "../Skills/Skills";

const About = () => {
    return (
        <div>
            <div>

                <img className="w-full" src="https://i.ibb.co/G5DxK27/Untitled-design-4.png" alt="" />
            </div>
            <div>
                <h1 className="text-white font-bold text-3xl my-2">ABOUT ME</h1>
                <p className="text-white my-2">I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. I love to solve real-world problems. I am strategic and goal-oriented, and I always work with an end goal in mind. Over the past years, I created 100s of websites for my clients. I pride myself on doing quality work and maintaining excellent communication. Most of the time I work with WordPress but some technologies I enjoy working with include ReactJS, JavaScript, and PHP.</p>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;