import { useEffect, useState } from "react";
import Question from "../components/Question";
import ScorePage from "./ScorePage";

const QuestionPage = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);


    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleResetQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
    };


    useEffect(() => {
        fetch('./questions.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])

    return (
        <div className="h-screen bg-yellow-100">
            {currentQuestionIndex < questions.length ? (
                <Question
                    question={questions[currentQuestionIndex]}
                    onNextQuestion={handleNextQuestion}
                    onAnswer={handleAnswer}
                />
            ) : (
                <ScorePage totalScore={score} onResetQuiz={handleResetQuiz} />
            )}
        </div>
    );
};

export default QuestionPage;
