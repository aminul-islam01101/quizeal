import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Root = () => (
    <div className="min-h-screen">
        <Navbar />
        <Outlet />
    </div>
);

export default Root;
