import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
const Contact = () => {
    return (
        <div className="">
            <h1 className="text-center font-bold text-4xl text-white">CONTACT</h1>
            <p className="text-center  text-yellow-500">Are You Looking For Font End Developer ? I am here. 🙂
            </p>
            <div className="grid grid-col-1 md:grid-cols-3 gap-4 my-4 justify-center items-center">
                <div className="card shadow-xl text-white bg-slate-900 border border-white">
                    <div className="card-body flex justify-center items-center">
                        <div>
                            <p className=" font-bold text-2xl flex justify-center items-center my-2 text-yellow-500"><FaUser></FaUser></p>
                            <h1 className="text-center  text-2xl font-bold">Ekramul Hassan</h1>
                            <p className="text-center">Web Developer(React)</p>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl text-white bg-slate-900 border border-white">
                    <div className="card-body flex justify-center items-center">
                        <div>
                            <p className=" font-bold text-2xl flex justify-center items-center my-2 text-yellow-500"><FaPhoneAlt></FaPhoneAlt></p>
                            <h1 className="text-center  text-2xl font-bold">Phone</h1>
                            <p className="text-center">+8801762477828</p>
                        </div>
                    </div>
                </div>
                <div className="card  shadow-xl text-white bg-slate-900 border border-white">
                    <div className="card-body flex justify-center items-center">
                        <div>
                            <p className=" font-bold text-2xl flex justify-center items-center my-2 text-yellow-500"><MdOutlineMail></MdOutlineMail></p>
                            <h1 className="text-center  text-2xl font-bold">Email</h1>
                            <p className="text-center">mdekramulhassan168@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact