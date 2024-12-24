import { FaLaptopCode, FaReact } from "react-icons/fa";
import { FaArrowRightLong, FaDisplay } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
                            <h2 className="font-bold text-2xl text-center">Font End Development</h2>
                            <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                            <Link className=" flex text-lg text-white justify-center items-center gap-2 " to="/contact">SAY HELLO <FaArrowRightLong></FaArrowRightLong> </Link>

                        </div>
                    </div>
                    <div className="card text-white hover:bg-yellow-500  hover:shadow-white border-2 border-white  shadow-2xl text-center">
                        <div className="card-body ">
                            <h1 className="flex justify-center items-center text-3xl"><FaReact></FaReact></h1>
                            <h2 className="font-bold text-2xl text-center">React Development</h2>
                            <p>I’m a Front End Web developer who is passionate about making error-free websites with 100% client satisfaction.</p>
                            <Link className=" flex text-lg text-white justify-center items-center gap-2 " to="/contact">SAY HELLO <FaArrowRightLong></FaArrowRightLong> </Link>


                        </div>
                    </div>
                    <div className="card text-white hover:bg-yellow-500 hover:shadow-white border-2 border-white  shadow-2xl text-center">
                        <div className="card-body ">
                            <h1 className="flex justify-center items-center text-3xl"><FaDisplay></FaDisplay></h1>
                            <h2 className="font-bold text-2xl text-center">Designer </h2>
                            <p>I’m also a designer who is passionate about making websites designer with 100% client satisfaction.</p>
                            <Link className=" flex text-lg text-white justify-center items-center gap-2 " to="/contact">SAY HELLO <FaArrowRightLong></FaArrowRightLong> </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;