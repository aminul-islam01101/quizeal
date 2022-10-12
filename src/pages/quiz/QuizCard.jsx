/* eslint-disable consistent-return */

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { toast } from 'react-toastify';

const QuizCard = ({
    options: { options, correctAnswer, question },
    setCorrectCount,
    setWrongCount,
}) => {
    const [quiz, setQuiz] = useState('');
    const [visibility, setVisibility] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [radioColor, setRadioColor] = useState('bg-gray-500 ');

    const changeHandler = (event) => {
        setDisabled(true);
        event.preventDefault();
        setQuiz(event.target.value);

        if (event.target.value === correctAnswer) {
            toast.success('correct!');
            setCorrectCount((prev) => prev + 1);
            setRadioColor('bg-green-500');
        } else {
            toast.error('wrong!');
            setWrongCount((prev) => prev + 1);
            setRadioColor('bg-rose-500');
        }
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
            <div className={`${radioColor} grid grid-cols-2 gap-5 border`}>
                {options.map((option, index) => (
                    <div key={Math.random()}>
                        <div className="hover:bg-slate-400 flex items-center">
                            <input
                                className={`${radioColor} radio`}
                                id={options[index]}
                                type="radio"
                                name={question}
                                value={option}
                                checked={quiz === options[index]}
                                disabled={disabled}
                                onChange={changeHandler}
                            />
                            <label htmlFor={options[index]}>{option}</label>
                        </div>
                    </div>
                ))}
            </div>
            {visibility && <div>{correctAnswer}</div>}
        </div>
    );
};

export default QuizCard;
