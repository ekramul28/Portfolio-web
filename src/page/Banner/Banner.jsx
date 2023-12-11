
const Banner = () => {
    return (
        <div className="h-[550px] flex  ">
            <div className="w-1/2 text-white mt-36 mx-5">
                <h1 className="text-xl font-semibold mt-5 ">Hello,My Name is </h1>
                <p className="text-4xl font-bold mt-5 ">Md Ekramul Hassan</p>
                <p className="mt-5 text-yellow-500">I AM Web Developer</p>
                <p className="mt-5">From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at React. I love to talk with you about your unique. </p>
                <button className="btn mt-5">Contact</button>
            </div>
            <div className="w-1/2">
                <img className="w-full " src="https://i.ibb.co/tc9SMh3/Untitled-design-2.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;