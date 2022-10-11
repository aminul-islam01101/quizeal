import Lottie from 'lottie-react';
import ErrorData from '../assets/error.json';

const Error = () => (
    <div className="min-h-screen grid place-items-center">
        <div>
            <div>
                <Lottie animationData={ErrorData} loop />
            </div>
        </div>
    </div>
);

export default Error;
