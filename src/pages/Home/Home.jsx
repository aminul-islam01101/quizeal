import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import Hero from '../../assets/hero.json';
import { QuizContext } from '../../Contexts/QuizContext';
import TopicsCard from './TopicsCard';

const Home = () => {
    const quizTopics = useContext(QuizContext);

    return (
        <div>
            <section className="grid grid-cols-2 gap-5">
                <div>hello</div>
                <div>
                    <Lottie animationData={Hero} loop />
                </div>
            </section>
            <div className="grid grid-cols-2 mt-48 gap-5">
                {quizTopics.data.map((item) => (
                    <TopicsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
