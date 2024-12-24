import { Link } from "react-router-dom";

const Navbar = () => {
    const link = <>
        <li className="font-semibold text-lg "><Link to="/">Home</Link></li>
        <li className="font-semibold text-lg "><Link to="/about">About Me</Link></li>
        <li className="font-semibold text-lg "><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-[#0D0D0D]  bg-opacity-60 text-white z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul>
                </div>
                <Link to="/">
                    <p className="btn btn-ghost text-xl opacity-100">EKRAMUL<span className="text-yellow-500 hidden md:block">.COM</span></p>

                </Link>
            </div>

            <div className="navbar-end">
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>

                <Link to='https://drive.google.com/u/0/uc?id=1SaQvt_s7cUj2JwEnBTpkHRgJjSYZ_m11&export=download' className="btn opacity-100 ">Download Resume</Link>
            </div>
        </div>
    );
};

export default Navbar;