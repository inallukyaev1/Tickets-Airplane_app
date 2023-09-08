import './Filters.css';
import { useDispatch } from 'react-redux';
import { Transfers } from '../transfers/transfers';
import { Currency } from '../currency-selector/currency';
import { currencyList } from '../elements/elements';
import { transfers } from '../elements/elements';

export function Filters() {
    const dispatch = useDispatch();

    const currentCurrencyHandler = (title: string): void => {
        dispatch({ type: 'addCurrentCurrency', payload: title });
    };

    return (
        <div className="filter">
            <form
                action=""
                className="filter-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="tabs-block">
                    <div className="tabs-wrapper">
                        {currencyList.map((currency) => {
                            return (
                                <Currency
                                    currentCurrencyHandler={
                                        currentCurrencyHandler
                                    }
                                    title={currency}
                                ></Currency>
                            );
                        })}
                    </div>
                </div>

                <fieldset>
                    <legend>Количество посадок</legend>
                    {transfers.map((item) => (
                        <Transfers key={item.id} item={item}></Transfers>
                    ))}
                </fieldset>
            </form>
        </div>
    );
}
