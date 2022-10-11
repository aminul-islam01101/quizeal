import { Outlet, useLoaderData } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { QuizContext } from '../Contexts/QuizContext';

const Root = () => {
    const { quizTopics, quizTopic } = useLoaderData();

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        <QuizContext.Provider value={[quizTopics, quizTopic]}>
            <div className="min-h-screen">
                <Navbar />
                <Outlet />
            </div>
        </QuizContext.Provider>
    );
};

export default Root;
