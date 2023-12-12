import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
    return (
        <div>
            <h1 className="text-white font-bold text-4xl text-center my-3">My Skill</h1>
            <div className=" md:flex justify-center items-center ">
                <div className="md:w-1/2 grid justify-center items-center">
                    <h1 className=" font-bold text-4xl text-center text-yellow-500">Font End</h1>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/VjJTYzs/download-1-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={95} maxCompleted={100} customLabel="95%" />
                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/JnVDDNQ/CSS3-logo-svg-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={95} maxCompleted={100} customLabel="95%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-20 my-2" src="https://i.ibb.co/d7JH0tM/images-1-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={97} maxCompleted={100} customLabel="97%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/MBB1Kfy/Java-Script-logo.png" alt="" />
                        <ProgressBar className="  w-56" completed={85} maxCompleted={100} customLabel="85%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/sVVwDt4/1611079-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={87} maxCompleted={100} customLabel="87%" />

                    </div>
                </div>
                <div className="md:w-1/2 grid justify-center items-center ">
                    <h1 className=" font-bold text-4xl text-center text-yellow-500">Back End</h1>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2 " src="https://i.ibb.co/djgYtJy/2560px-Node-js-logo-svg-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={80} maxCompleted={100} customLabel="80%" />
                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/ZcTndh8/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={75} maxCompleted={100} customLabel="75%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/KwMjNYy/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={70} maxCompleted={100} customLabel="70%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/MBB1Kfy/Java-Script-logo.png" alt="" />
                        <ProgressBar className="  w-56" completed={85} maxCompleted={100} customLabel="85%" />

                    </div>
                    <div className="flex gap-2  items-center hover:border hover:border-white hover:rounded-md">
                        <img className="w-24 h-24 my-2" src="https://i.ibb.co/L63Y7GP/png-transparent-firebase-hd-logo-thumbnail-removebg-preview.png" alt="" />
                        <ProgressBar className="  w-56" completed={80} maxCompleted={100} customLabel="80%" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;