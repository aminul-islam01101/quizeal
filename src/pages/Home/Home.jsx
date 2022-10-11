import React, { useContext } from 'react';
import { QuizContext } from '../../Contexts/QuizContext';
import TopicsCard from './TopicsCard';

const Home = () => {
    const [quizTopics] = useContext(QuizContext);

    return (
        <div className="grid grid-cols-2 mt-48 gap-5">
            {quizTopics.map((item) => (
                <TopicsCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Home;
