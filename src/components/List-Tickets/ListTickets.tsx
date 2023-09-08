import './ListTickets.css';
import { TicketCard } from '../Ticket-Card/TicketCard.js';
import { DefaultStateInterface } from '../elements/elements';
import { useSelector } from 'react-redux';
export function ListTickets() {
    const allTransfers = useSelector(
        (state: DefaultStateInterface) => state.filteredTickets
    );

    return (
        <ul className="ticket-list">
            {allTransfers.map((item) => (
                <TicketCard
                    item={item}
                    key={item.arrival_time + item.arrival_date}
                ></TicketCard>
            ))}
        </ul>
    );
}
