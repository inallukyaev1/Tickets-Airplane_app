import { BackToTopButton } from '../BackToTopButton/BackToTopButton.js';
import { Filters } from '../filters/Filters.js';
import { ListTickets } from '../List-Tickets/ListTickets.js';
import './content.css';

export function Content() {
    return (
        <div className="content-wrapper container">
            <BackToTopButton></BackToTopButton>
            <Filters></Filters>

            <ListTickets></ListTickets>
        </div>
    );
}
