import Contact from "../Contact/Contact";

const ContactR = () => {
    return (
        <div >
            <div className=" md:flex ">
                <div className="md:w-1/2">
                    <img src="https://i.ibb.co/SBTtj11/5124556-removebg-preview.png" alt="" />
                </div>
                <div className="md:w-1/2 mx-3 md:py-5">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered bg-slate-700 rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" className="input input-bordered bg-slate-700 rounded-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Subject</span>
                            </label>
                            <input type="email" name="Subject" className="input input-bordered bg-slate-700 rounded-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Your Message (optional)</span>
                            </label>
                            <textarea className="input input-bordered bg-slate-700 rounded-2xl h-24" name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <input className="btn mt-3" type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>

            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactR;