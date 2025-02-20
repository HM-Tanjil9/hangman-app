import { Link } from "react-router-dom";

function PlayGame() {
    return(
        <>
            <h1 className="text-4xl font-bold mb-2">Play games</h1>
            <Link className="text-blue-500 underline" to="/start">Start game page</Link>
        </>
    )
}

export default PlayGame;