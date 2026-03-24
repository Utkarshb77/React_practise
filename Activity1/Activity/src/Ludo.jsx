import { useState } from "react";

export default function Ludo() {
    let [moves , setMoves] = useState({blue: 0, red: 0, green: 0, yellow: 0 }); // same way we can also pass Array.
    const [count, setCount] = useState(0);
    let updatesBlue = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , blue: prevMoves.blue + 1 }}); // Spread operator to create a new object and trigger re-render
    }
    let updatesRed = () => {
        setMoves((prevMoves) => {
            return {...prevMoves , red: prevMoves.red + 1 }});
    }
    let updatesGreen = () => {
        setMoves((prevMoves) => ({ ...prevMoves , green: prevMoves.green + 1 }));
    }
    let updatesYellow = () => {
        setMoves((prevMoves) => ({ ...prevMoves , yellow: prevMoves.yellow + 1 }));
    }
    return (
        <div>
            <p>Blue: {moves.blue}</p>
            <button style={{backgroundColor:'blue'}} onClick={updatesBlue}>+1</button>
            <p>Red: {moves.red}</p>
            <button style={{ backgroundColor: 'red', color: 'white' }} onClick={updatesRed}>+1</button>
            <p>Green: {moves.green}</p>
            <button style={{ backgroundColor: 'green', color: 'white' }} onClick={updatesGreen}>+1</button>
            <p>Yellow: {moves.yellow}</p>
            <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={updatesYellow}>+1</button>
        </div>
    );
}