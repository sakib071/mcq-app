import { Link } from "react-router-dom";

const ScorePage = ({ totalScore, onResetQuiz }) => {

    const handleResetQuiz = () => {
        onResetQuiz();
    };


    return (
        <div className="h-screen bg-yellow-100 flex flex-col gap-5 justify-center items-center">
            <p className="text-lg w-60 lg:w-full text-center lg:text-3xl font-bold uppercase">All questions have been answered!</p>
            <p className="text-2xl font-semibold">Total Score: {totalScore}</p>

            <Link to='/questionPage'>
                <button onClick={handleResetQuiz} className="btn btn-sm bg-yellow-300 hover:bg-gray-800 hover:text-white border-0"> Back to Home</button>
            </Link>
        </div>
    );
};

export default ScorePage;
