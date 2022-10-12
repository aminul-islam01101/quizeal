import React, { useContext } from 'react';
import { QuizContext } from '../../Contexts/QuizContext';
import TopicsCard from '../Home/TopicsCard';

const QuizTopics = () => {
    const quizTopics = useContext(QuizContext);
    return (
        <div>
            <h2 className="text-6xl mt-20 text-center">
                Are you sets? <span className="text-white ">Lets Play!!</span>
            </h2>
            <div id="#" className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-10">
                {quizTopics.data.map((item) => (
                    <TopicsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default QuizTopics;
