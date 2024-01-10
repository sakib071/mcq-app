import { useEffect, useState } from "react";

const Question = ({ question, onNextQuestion, onAnswer }) => {
    const [ques, setQues] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = () => {
        const isCorrect = selectedOption === question.correctAnswer;
        onAnswer(isCorrect);
        onNextQuestion();
    };

    useEffect(() => {
        fetch('./questions.json')
            .then(res => res.json())
            .then(data => setQues(data))
    }, [])

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div key={question.id} className="card w-96 bg-base-100 rounded-md shadow-xl">
                <div className="card-body">
                    <div className="flex w-full justify-end">
                        <h3 className="text-sm font-semibold">{question.id}/{ques.length}</h3>
                    </div>
                    <h2 className="card-title mb-5 h-20">{question.question}</h2>
                    <ul className="flex flex-col gap-3">
                        {question.options.map((option, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id={`option-${index}`}
                                    name={`question-${question.id}`}
                                    value={option}
                                    className="radio radio-sm"
                                    onChange={handleOptionChange}
                                    checked={selectedOption === option}
                                />
                                <label htmlFor={`option-${index}`}>{option}</label>
                            </li>
                        ))}
                    </ul>
                    <div className="card-actions justify-end">
                        <button
                            className="btn btn-sm bg-yellow-300 hover:bg-gray-800 hover:text-white"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Question;
