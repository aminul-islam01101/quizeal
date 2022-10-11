/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    <div>
        <div className="navbar bg-gray-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost sm:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>

                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost normal-case hidden sm:flex text-xl">
                    QuiZeal
                </NavLink>
            </div>
            <div className="navbar-center lg:flex">
                <ul className="menu sm:menu-horizontal p-0 hidden">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/statistics">Statistics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                </ul>
                <a className="btn btn-ghost normal-case text-xl sm:hidden">QuiZeal</a>
            </div>
            <div className="navbar-end">
                <div className=" mr-2 hidden sm:flex">
                    <NavLink to="/login">Login</NavLink>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="something" alt="img" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/login" className="justify-between hidden">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className="justify-between">
                                Signup
                            </Link>
                        </li>

                        <li>
                            <a>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default Navbar;
