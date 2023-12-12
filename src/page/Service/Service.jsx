import { FaLaptopCode } from "react-icons/fa";
const Service = () => {
    return (
        <div >
            <h1 className="text-center font-bold text-4xl text-white my-3">WHAT I DO</h1>
            <h1 className="text-center font-bold text-xl text-yellow-500 my-3">MY SERVICES</h1>
            <div >
                <div className="md:flex grid justify-center gap-4 my-10 mx-4 ">
                    <div className="card text-white border-2 hover:bg-yellow-500 hover:shadow-white border-white hover:border-black  shadow-2xl text-center">
                        <div className="card-body ">
                            <h1 className="flex justify-center items-center text-3xl"><FaLaptopCode></FaLaptopCode></h1>
                            <h2 className="font-bold text-2xl text-center">Web Development</h2>
                            <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                            <button className="btn">hello</button>

                        </div>
                    </div>
                    <div className="card text-white hover:bg-yellow-500  hover:shadow-white border-2 border-white  shadow-2xl text-center">
                        <div className="card-body ">
                            <h1 className="flex justify-center items-center text-3xl"><FaLaptopCode></FaLaptopCode></h1>
                            <h2 className="font-bold text-2xl text-center">Web Development</h2>
                            <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                            <button className="btn">hello</button>

                        </div>
                    </div>
                    <div className="card text-white hover:bg-yellow-500 hover:shadow-white border-2 border-white  shadow-2xl text-center">
                        <div className="card-body ">
                            <h1 className="flex justify-center items-center text-3xl"><FaLaptopCode></FaLaptopCode></h1>
                            <h2 className="font-bold text-2xl text-center">Web Development</h2>
                            <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                            <button className="btn">hello</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;