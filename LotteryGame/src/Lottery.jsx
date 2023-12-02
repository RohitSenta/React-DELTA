import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./halper";
import Ticket from "./ticket";
import Button from "./Button";

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            {/* <button onClick={buyTicket}>Buy New Ticket</button> */}
            <Button action={buyTicket} />
            <h3>{isWinning && "Congratulation, You won the lottery!!! "}</h3>
        </div>
    )
}