import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottary({n, winCondition}) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning =  winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottary Game!</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <button onClick={buyTicket}>Generate New Ticket</button>
      <h3>{isWinning && "Congratulations! You Won"}</h3>
    </div>
  );
};
