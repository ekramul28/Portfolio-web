import { FaBook } from "react-icons/fa";
const Education = () => {

    return (
        <div className="border border-white mx-2">
            <h1 className="text-3xl font-bold text-yellow-500  text-center ">EDUCATION</h1>
            <div className=" md:flex grid gap-8 py-20 justify-center items-center  shadow-xl text-white">
                <div className="text-center">
                    <p className="text-2xl font-bold flex justify-center items-center"> <FaBook></FaBook></p>
                    <p className="text-2xl font-bold ">2018-2019 SSC</p>
                    <h1 className="text-2xl font-bold ">Patibila H.S.A High School</h1>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold flex justify-center items-center"> <FaBook></FaBook></p>
                    <p className="text-2xl font-bold ">2019-2021 HSC</p>
                    <h1 className="text-2xl font-bold ">A.B.C.D Collage ,Chaugacha ,Jessore</h1>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold flex justify-center items-center"> <FaBook></FaBook></p>
                    <p className="text-2xl font-bold ">2022 </p>
                    <h1 className="text-2xl font-bold ">BSS(Honours) National University</h1>
                </div>
            </div>
        </div>
    );
};

export default Education;