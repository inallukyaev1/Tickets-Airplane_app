import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './transfers.css';
import { DefaultStateInterface } from '../elements/elements';
import { Itickets, ItranfersProps } from '../interfaces/interfaces';

export function Transfers({ item }: ItranfersProps) {
    const dispatch = useDispatch();
    const originalListTickets = useSelector(
        (state: DefaultStateInterface) => state.listTickets
    );
    const currentTransferId = useSelector(
        (state: DefaultStateInterface) => state.transfersListId
    );
    function filterforTickets(e: React.ChangeEvent<HTMLInputElement>): void {
        const currentId: string | number = e.target.id;
        if (e.target.checked) {
            dispatch({ type: 'addTranfersId', payload: item.stops });
            return;
        } else {
            const newArray = currentTransferId.filter(
                (count: number | string) => count !== item.stops
            );
            dispatch({ type: 'filterTranfersId', payload: newArray });
        }
    }
    function sortFilmsByTransfers(unsortedFilm: Itickets[], ids: [] | any) {
        if (ids.length === 0) {
            dispatch({ type: 'addFilteredTickets', payload: unsortedFilm });
            return;
        }
        const sortedFilms: Itickets[] = [];
        const AllTickets = ids.find((id: number | string) => id === 'Все');
        if (AllTickets) {
            sortedFilms.push(...originalListTickets);
            return;
        }
        ids.forEach((stops: number | string) => {
            sortedFilms.push(
                ...originalListTickets.filter(
                    (item: Itickets) => item.stops === stops
                )
            );
        });
        dispatch({ type: 'addFilteredTickets', payload: sortedFilms });
        return;
    }

    useEffect(() => {
        sortFilmsByTransfers(originalListTickets, currentTransferId);
    }, [currentTransferId]);

    return (
        <div key={item.id} className="transfer-checkbox">
            <input
                className="custom-checkbox"
                type="checkbox"
                id={`${item.id}`}
                name={`${item.stops}`}
                onChange={(e) => filterforTickets(e)}
            />
            <label htmlFor={`${item.id}`}>{item.name}</label>
        </div>
    );
}
