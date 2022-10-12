import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, link }) => (
    <div className="grid place-items-center">
        <Link to={link}>
            <button type="button" className="button bg-sky-400 hover:bg-[#0097C3]  border-0">
                {children}
            </button>
        </Link>
    </div>
);

export default Button;
