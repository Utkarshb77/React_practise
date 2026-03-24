import { useState } from "react";
import { gentic , sum } from "./Lotteryfunc";

export default function Lottery() {
    const [Ticket, setTicket] = useState(gentic(3));
    let isWinning = sum(Ticket) === 15;

    let buyticket = () =>{
        setTicket(gentic(3));
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{Ticket[0]}</span>
                <span>{Ticket[1]}</span>
                <span>{Ticket[2]}</span>
            </div>
            <button onClick={buyticket}>Buy New Ticket</button>
            <br /> <br />
            <p>{isWinning ? 'Congratulations! You win!' : 'Sorry, try again!'}</p>
        </div>
    );
}