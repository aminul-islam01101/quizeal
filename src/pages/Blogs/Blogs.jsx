import React from 'react';
import BlogData from '../../assets/blogs';
import Blog from './Blog';

const Blogs = () => (
    <div>
        <div>
            <div
                className="hero min-h-screen mt-10"
                style={{ backgroundImage: `url('/blog.webp')` }}
            >
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Blogs</h1>
                        <p className="mb-5" />
                    </div>
                </div>
            </div>

            <div className="grid  mt-10 gap-5 mx-5">
                {BlogData.map((data) => (
                    <Blog
                        key={data.id}
                        src={data.src}
                        title={data.title}
                        Topics={data.Topics}
                        description={data.description}
                    />
                ))}
            </div>

            <div>
                <div className="my-10">
                    <section
                        className="p-6 md:p-12 text-center md:text-left shadow-lg rounded-md"

                        // }}
                    >
                        <div className="flex justify-center">
                            <div className="max-w-3xl">
                                <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
                                    <div className="md:flex md:flex-row items-center ">
                                        <div className="md:w-96 w-36 flex justify-center items-center mb-6 lg:mb-0 mx-auto md:mx-0">
                                            <img
                                                src="/author.jpg"
                                                className="rounded-full shadow-md"
                                                alt="avatar"
                                            />
                                        </div>
                                        <div className="md:ml-6">
                                            <p className="text-gray-500 font-light mb-6">
                                                Hei, I am Aminul Islam. Currently Working in TC-39,
                                                writing about javascript core concept for several
                                                years.
                                            </p>
                                            <p className="font-semibold text-xl mb-2 text-gray-800">
                                                Author: Aminul Islam
                                            </p>
                                            <p className="font-semibold text-gray-500 mb-0">
                                                Senior Programmer, TC-39
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
);

export default Blogs;
