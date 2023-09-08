import { DefaultStateInterface, defaultState } from '../elements/elements';
import { createStore } from 'redux';
import { Itickets } from '../interfaces/interfaces';

export const reducer = (
    state = defaultState,
    action: {
        type: string;
        payload: string;
    }
) => {
    switch (action.type) {
        case 'resetFilters': {
            return {
                ...state,
                filteredTickets: [],
                currentCurrency: defaultState.currentCurrency,
            };
        }

        case 'addFilteredTickets':
            return {
                ...state,
                filteredTickets: [...action.payload],
            };
        case 'addTranfersId':
            return {
                ...state,
                transfersListId: [...state.transfersListId, action.payload],
            };
        case 'filterTranfersId':
            return {
                ...state,
                transfersListId: action.payload,
            };
        case 'addCurrentCurrency':
            return {
                ...state,
                currentCurrency: action.payload,
            };

        default:
            return state;
    }
};

export const store = createStore(reducer);
