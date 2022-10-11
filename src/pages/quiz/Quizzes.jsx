import { useLoaderData } from 'react-router-dom';
import QuizCard from './QuizCard';

const Quizzes = () => {
    const quizzes = useLoaderData();

    const {
        data: { name, questions },
    } = quizzes;
    console.log(questions);

    return (
        <div>
            <div className="">
                <h2 className="text-center text-5xl  p-3">quiz for {name}</h2>
            </div>
            <h4 className="text-xl">
                {questions.map((question) => (
                    <QuizCard key={question.id} options={question} />
                ))}
            </h4>
        </div>
    );
};

export default Quizzes;