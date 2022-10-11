import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quizzes = () => {
    const quizzes = useLoaderData();
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

    const {
        data: { name, questions },
    } = quizzes;
    console.log(questions.length);

    return (
        <div>
            <div className="">
                <h2 className="text-center text-5xl  p-3">quiz for {name}</h2>
            </div>
            <progress
                className="progress progress-success w-full my-10  bg-red-500"
                value={`${((correctCount + wrongCount) * 100) / questions.length}`}
                max="100"
            />
            <div className="flex justify-between">
                <p>{correctCount}</p>
                <p>{wrongCount}</p>
            </div>
            <h4 className="text-xl my-40">
                {questions.map((question) => (
                    <QuizCard
                        key={question.id}
                        options={question}
                        setCorrectCount={setCorrectCount}
                        setWrongCount={setWrongCount}
                    />
                ))}
            </h4>

            <div
                className="radial-progress text-primary fixed left-0 bottom-0 bg-red-300"
                style={{
                    '--value': `${(((correctCount + wrongCount) * 100) / questions.length).toFixed(
                        0
                    )}`,
                }}
            >
                {`${(((correctCount + wrongCount) * 100) / questions.length).toFixed(0)}`}
            </div>
        </div>
    );
};

export default Quizzes;
