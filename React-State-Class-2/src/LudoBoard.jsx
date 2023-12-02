import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});
    let [arr, setArr] = useState(["No moves "]);

    let updateBlue = () => {
        console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue + 1};
        });

        setArr((prevArr) => {
            return [...prevArr, "Blue moves "];
        });
        console.log(arr);
    }

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow + 1};
        });

        setArr((prevArr) => {
            return [...prevArr, "Yellow moves "];
        });
        console.log(arr);
    }

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green + 1};
        });

        setArr((prevArr) => {
            return [...prevArr, "Green moves "];
        });
        console.log(arr);
    }

    let updateRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        });

        setArr((prevArr) => {
            return [...prevArr, "Red moves "];
        });
        console.log(arr);
    }

    return (
        <div>
            <h2>Game Begins!</h2>
            <p>{arr}</p>
            <div className="borad">
                <span>Blue Moves = {moves.blue}</span>  &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>   
                <br /><br />     

                <span>Yellow Moves = {moves.yellow}</span>  &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor: "yellow", color: "black"}}  onClick={updateYellow}>+1</button>    
                <br /><br />

                <span>Green Moves = {moves.green}</span>  &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor: "green"}}  onClick={updateGreen}>+1</button>    
                <br /><br />

                <span>Red Moves = {moves.red}</span>  &nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>       
                <br /><br />

            </div>
            <br /><hr /><hr /><br />
        </div>
    )
}