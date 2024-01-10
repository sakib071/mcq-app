import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

const ScorePage = ({ totalScore, onResetQuiz }) => {
    const notify = () => toast.success('Submission Successfully');

    const handleResetQuiz = () => {
        onResetQuiz();
    };

    // useEffect(() => {
    //     notify();
    // }, []);

    return (
        <div className="h-screen bg-yellow-100 flex flex-col gap-5 justify-center items-center">
            <p className="text-3xl font-bold uppercase">All questions have been answered!</p>
            <p className="text-2xl font-semibold">Total Score: {totalScore}</p>

            <Link to='/questionPage'>
                <button onClick={handleResetQuiz} className="btn btn-sm bg-yellow-300 hover:bg-gray-800 hover:text-white border-0"> Back to Home</button>
            </Link>
            <Toaster />
        </div>
    );
};

export default ScorePage;
