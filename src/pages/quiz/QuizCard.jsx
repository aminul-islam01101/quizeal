/* eslint-disable consistent-return */

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { toast } from 'react-toastify';

const QuizCard = ({
    options: { options, correctAnswer, question },
    setCorrectCount,
    setWrongCount,
    indexNo,
}) => {
    const [quiz, setQuiz] = useState('');
    const [visibility, setVisibility] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [radioColor, setRadioColor] = useState('bg-gray-500 text-white ');

    const changeHandler = (event) => {
        setDisabled(true);
        event.preventDefault();
        setQuiz(event.target.value);

        if (event.target.value === correctAnswer) {
            toast.success('correct!');
            setCorrectCount((prev) => prev + 1);
            setRadioColor('bg-green-400');
        } else {
            toast.error('wrong!');
            setWrongCount((prev) => prev + 1);
            setRadioColor('bg-rose-500 text-white');
        }
    };
    const clickHandler = () => {
        setVisibility(!visibility);
    };

    return (
        <div>
            <div>
                <div className="rounded-t-lg flex justify-between bg-slate-200 mt-10 p-5">
                    <div className="flex flex-col">
                        <p className="text-xl p-5">Quiz No - {indexNo + 1}</p>
                        <p>{question.replaceAll('</p>', '*').replace('<p>', '*')}</p>
                    </div>
                    <FontAwesomeIcon icon={faEye} onClick={clickHandler} />
                </div>
                <div className={`${radioColor} text-base grid sm:grid-cols-2 gap-5 border `}>
                    {options.map((option, index) => (
                        <div key={Math.random()}>
                            <div className="hover:bg-slate-400 flex p-4 items-center">
                                <input
                                    className={` radio radio-accent text-white mr-4 disabled:text-gray-400 disabled:bg-white`}
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
                {visibility && (
                    <div className="bg-green-600 text-white text-center p-2 rounded-b-lg">
                        Correct Answer: {correctAnswer}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizCard;
