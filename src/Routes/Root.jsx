import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import { QuizContext } from '../Contexts/QuizContext';

const Root = () => {
    const quizTopics = useLoaderData();

    return (
        <QuizContext.Provider value={quizTopics}>
            <div className="flex flex-col justify-between min-h-screen ">
                <div>
                    <Navbar />
                    <div className="container">
                        <Outlet />
                    </div>
                </div>
                <div className="mt-20">
                    <Footer />
                </div>
            </div>
        </QuizContext.Provider>
    );
};

export default Root;
