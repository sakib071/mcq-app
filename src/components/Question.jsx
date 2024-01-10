import { useEffect, useState } from "react";

const Question = ({ question, onNextQuestion, onAnswer }) => {
    const [ques, setQues] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (event) => {
        console.log("Selected Option:", event.target.value);
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isCorrect = selectedOption === question.correctAnswer;
        onAnswer(isCorrect);
        onNextQuestion();
    };

    useEffect(() => {
        fetch('./questions.json')
            .then(res => res.json())
            .then(data => setQues(data))
    }, [])

    // useEffect(() => {
    //     // Cleanup function to reset selectedOption when component unmounts
    //     return () => setSelectedOption(null);
    // }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit}>
                <div key={question.id} className="card lg:w-96 w-80 bg-base-100 rounded-md shadow-xl">
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
                                        required
                                    />
                                    <label htmlFor={`option-${index}`}>{option}</label>
                                </li>
                            ))}
                        </ul>
                        <div className="card-actions justify-end">
                            <button
                                type="submit"
                                className="btn btn-sm bg-yellow-300 hover:bg-gray-800 hover:text-white"
                            >Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Question;
