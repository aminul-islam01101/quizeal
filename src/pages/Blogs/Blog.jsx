/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Blog = ({ title, Topics, description }) => (
    <div>
        <div className="card w-full bg-base-100 shadow-xl image-full">
            {/* <figure>
                <img src={src} alt="Shoes" />
            </figure> */}
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{Topics}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default Blog;
