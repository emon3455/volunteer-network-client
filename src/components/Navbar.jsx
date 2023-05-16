import ActiveLink from "./ActiveLink";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <header className="bg-opacity-80 bg-white bg-blend-multiply fixed top-0 z-30 w-full">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li className="text-lg font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-lg font-semibold"><ActiveLink to="/Login">Login</ActiveLink></li>
                                <div className="">
                                    <button className='btn-warning ml-2 lg:hidden p-2 rounded-lg font-semibold'>Log Out</button>
                                </div>
                            </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-lg md:text-2xl font-bold" >
                            <img className="w-full h-full p-1" src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="navbar-end space-x-2">

                        <div className="hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li className="text-sm font-semibold"><ActiveLink to="/">Home</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/myEvents">My Events</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/addEvents">Add Events</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/allVolentiers">Voulentiers</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/volReg">Voulentier Register</ActiveLink></li>
                                <li className="text-sm font-semibold"><ActiveLink to="/Login">Login</ActiveLink></li>
                            </ul>
                        </div>

                        {/* <label>
                            <div className="">
                                <button className='btn-warning hidden lg:block lg:p-2 rounded-lg font-semibold'>Log Out</button>
                            </div>
                        </label> */}


                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;