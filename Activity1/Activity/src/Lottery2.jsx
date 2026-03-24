import { useState } from "react";
import { gentic , sum } from "./Lotteryfunc";
import Ticket from "./Ticket";

export default function Lottery( {n=5 , winCondition} ) {
    const [ticket, setTicket] = useState(gentic(3));
    let isWinning = winCondition(ticket);

    let buyticket = () =>{
        setTicket(gentic(n));
    }

    return (
        <div>
            <h1>Lottery Game 2</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyticket}>Buy New Ticket</button>
            <h2>{isWinning ? 'Congratulations! You win!' : 'Sorry, try again!'}</h2>
        </div>
    );
} 