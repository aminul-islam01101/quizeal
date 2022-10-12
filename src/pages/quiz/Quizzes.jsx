import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from '../../components/Button';
import QuizCard from './QuizCard';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const {
        data: { name, questions },
    } = quizzes;
    const successRate = ((correctCount / (correctCount + wrongCount)) * 100).toFixed(0)

    return (
        <div>
            <div className="">
                <h2 className="text-center text-5xl mt-20  p-3">
                    Let&#39;s Explore <span className="text-white">{name}</span>
                </h2>
            </div>

            <h4 className="text-xl my-20">
                {questions.map((question, index) => (
                    <QuizCard
                        key={question.id}
                        options={question}
                        setCorrectCount={setCorrectCount}
                        setWrongCount={setWrongCount}
                        indexNo={index}
                    />
                ))}
            </h4>
            <div className="mb-20">
                <Button link="/quiz"> Explore More</Button>
            </div>

            <div className="sticky bottom-0 ">
                <div className="w-full p-3 rounded bg-sky-300/90 flex justify-between items-center">
                    <div>
                        <p>
                            Correct answer:
                            <span className="font-bold ml-3 text-green-700">
                                {correctCount} Nos
                            </span>
                        </p>
                        <p>
                            Wrong answer:
                            <span className="font-bold ml-3 text-rose-500">{wrongCount} Nos</span>
                        </p>
                        <p>
                            success rate:
                            <span className="text-green-700 font-bold ml-3">
                                {wrongCount || correctCount ? successRate : 0
                                    }
                                %
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="mb-3">progress</p>
                        <div
                            className="radial-progress font-bold text-primary  bg-teal-200 w-14 h-14 "
                            style={{
                                '--value': `${(
                                    ((correctCount + wrongCount) * 100) /
                                    questions.length
                                ).toFixed(0)}`,
                            }}
                        >
                            {`${(((correctCount + wrongCount) * 100) / questions.length).toFixed(
                                0
                            )}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;
