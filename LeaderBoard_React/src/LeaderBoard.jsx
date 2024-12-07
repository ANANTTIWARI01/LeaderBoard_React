
import { useState } from "react";
import "./leaderBoard.css"
function LeaderBoard() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [score, setScore] = useState("")
    const [country, setCountry] = useState("")

    const [leaderBoard, setLeaderBoard] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        const player = {
            id: Date.now(),
            Name: fname + " " + lname,
            Country: country,
            Score: score
        };

        setLeaderBoard([...leaderBoard, player].sort((a, b) => b.Score - a.Score));
        setFname("")
        setLname("")
        setCountry("")
        setScore("")

    }
    function IncrementFIve(id) {
        setLeaderBoard(leaderBoard.map((obj) => obj.id === id ? { ...obj, Score: Number(obj.Score) + 5 } : obj).sort((a, b) => b.Score - a.Score));

    }
    function DecrementFIve(id) {
        setLeaderBoard(leaderBoard.map((obj) => obj.id === id ? { ...obj, Score: Number(obj.Score) - 5 } : obj).sort((a, b) => b.Score - a.Score));

    }
    function DeleteItem(id) {
        setLeaderBoard(leaderBoard.filter((obj) => obj.id != id));
    }





    return (
        <>

            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)} />
                <select name="country" id="" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="SelectCountry">Select Country</option>
                    <option value="India">India</option>
                    <option value="Ausrtralia">Ausrtralia</option>
                    <option value="America">America</option>
                    <option value="Japan">Japan</option>

                </select>

                <input type="text" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />

                <button>Submit</button>

            </form>

            <div className="result">
                {leaderBoard ? leaderBoard.map((obj) => 
                    <p key={obj.id}>
                        <span className="spanData">{obj.Name}</span>
                        <span className="spanData">{obj.Country}</span>
                        <span className="spanData">{obj.Score}</span>
                        <span className="buttonSpan">
                            <button onClick={() => IncrementFIve(obj.id)}>+5</button>
                            <button onClick={() => DecrementFIve(obj.id)}>-5</button>
                            <button onClick={() => DeleteItem(obj.id)}>Delete</button>


                        </span>
                    </p>
            ) : ""}
            </div>


        </>
    )
}

export default LeaderBoard;