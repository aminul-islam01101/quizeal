/* eslint-disable jsx-a11y/anchor-is-valid */
import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../assets/hero.json';
import { QuizContext } from '../../Contexts/QuizContext';
import TopicsCard from './TopicsCard';

const Home = () => {
    const quizTopics = useContext(QuizContext);

    return (
        <div>
            <section className="shadow-lg grid grid-cols-1  sm:grid-cols-2 gap-5 items-center bg-gray-100 mt-20 rounded">
                <div className="p-10 flex flex-col justify-between gap-6">
                    <h1 className="mb-5 text-5xl font-bold text-[#0097C3]">Its quiz time</h1>
                    <p className="mb-5">
                        Test your tech knowledge! yes you are in a place to judge yourself with a
                        tons of in depth and tricky quiz question base and you will face lots of
                        difficulties in 3 different levels.
                    </p>
                    <Link to="/quiz">
                        <button
                            type="button"
                            className="btn color-primary hover:bg-[#0097C3]  border-0"
                        >
                            Explore
                        </button>
                    </Link>
                </div>
                <div>
                    <Lottie animationData={Hero} loop />
                </div>
            </section>
            <div id="#" className="grid grid-cols-1 sm:grid-cols-2 mt-20 gap-10">
                {quizTopics.data.map((item) => (
                    <TopicsCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default Home;
