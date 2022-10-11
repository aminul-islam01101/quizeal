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
    console.log(questions);

    return (
        <div>
            <div className="">
                <h2 className="text-center text-5xl  p-3">quiz for {name}</h2>
            </div>
            <div className="flex justify-between">
                <p>{correctCount}</p>
                <p>{wrongCount}</p>
            </div>
            <h4 className="text-xl">
                {questions.map((question) => (
                    <QuizCard
                        key={question.id}
                        options={question}
                        setCorrectCount={setCorrectCount}
                        setWrongCount={setWrongCount}
                    />
                ))}
            </h4>
        </div>
    );
};

export default Quizzes;
