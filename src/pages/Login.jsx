/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div className="mt-20">
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Ready to play? Just login and get tested..</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="button" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <Link to="/signup">
                            <p className="underline text-right text-green-600">
                                New Member ? try signup
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Login;
