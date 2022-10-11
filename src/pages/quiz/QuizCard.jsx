import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizCard = ({ options: { options, correctAnswer, question } }) => {
    const [quiz, setQuiz] = useState('');
    const [visibility, setVisibility] = useState(false);

    const changeHandler = (event) => {
        setQuiz(event.target.value);
        (() =>
            event.target.value === correctAnswer
                ? toast.success('Wow so easy!')
                : toast.error('Wow so easy!'))();
    };
    const clickHandler = () => {
        setVisibility(!visibility);
    };

    return (
        <div>
            <div className='flex items-center justify-between bg-slate-200 mt-10 p-5"'>
                <p className="text-xl p-5">
                    Quiz{+1} {question}
                </p>
                <FontAwesomeIcon icon={faEye} onClick={clickHandler} />
            </div>
            <div className="grid grid-cols-2 gap-5 border">
                {options.map((option, index) => (
                    <div key={Math.random()}>
                        <div className="hover:bg-slate-400">
                            <input
                                id={index}
                                type="radio"
                                name="quiz"
                                value={option}
                                checked={quiz === options[index]}
                                onChange={changeHandler}
                            />
                            <label htmlFor={index}>{option}</label>
                        </div>
                        <ToastContainer autoClose={1000} type="success" />
                    </div>
                ))}
            </div>
            {visibility && <div>{correctAnswer}</div>}
        </div>
    );
};

export default QuizCard;
