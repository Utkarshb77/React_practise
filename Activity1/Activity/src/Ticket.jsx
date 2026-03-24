import Ticketnum from './Ticketnum'

export default function Ticket({ ticket }) {
    return (
        <div>
            <h2>Lottery 2</h2>
            {ticket.map((num, idx) => (
                <Ticketnum key={idx} num={num} /> // key is imp for list rendering in React if not using index as key, use unique id from data
            ))}
        </div>
    )
}