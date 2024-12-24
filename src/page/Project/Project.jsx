import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "../../components/projectCard/card";

const Project = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center text-yellow-500 my-7">
          MY PROJECT
        </h1>
      <Card></Card>
      <div className="my-10">
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card card-compact  bg-zinc-800 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/Tkf7F4P/Screenshot-2023-12-12-214005.png"
                alt="Project"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">React</h2>
              <p>This is a React Firebase Node.js Express.js MongoBD Project</p>
              <div className="card-actions justify-end">
                <Link
                  className=" flex text-lg text-yellow-500 justify-center items-center gap-2 "
                  to="https://i.ibb.co/THbvgtQ/Screenshot-2023-12-12-221737.png"
                >
                  See more <FaArrowRightLong></FaArrowRightLong>{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-zinc-800 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/2vh7Xfc/Screenshot-2023-12-12-222737.png"
                alt="Project"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">React</h2>
              <p>This is a React Firebase Node.js Express.js MongoBD Project</p>
              <div className="card-actions justify-end">
                <Link
                  className=" flex text-lg text-yellow-500 justify-center items-center gap-2 "
                  to="https://i.ibb.co/2MzTx8x/Screenshot-2023-12-12-222404.png"
                >
                  See more <FaArrowRightLong></FaArrowRightLong>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-zinc-800  shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/9ZgFPT5/Screenshot-2023-12-12-221418.png"
                alt="Project"
              />
            </figure>
            <div className="card-body text-white">
              <h2 className="card-title">React</h2>
              <p>This is a React Firebase Node.js Express.js MongoBD Project</p>
              <div className="card-actions justify-end">
                <Link
                  className=" flex text-lg text-yellow-500 justify-center items-center gap-2 "
                  to="https://i.ibb.co/THbvgtQ/Screenshot-2023-12-12-221737.png"
                >
                  See more <FaArrowRightLong></FaArrowRightLong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
