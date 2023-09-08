import './currency.css';
import { useSelector } from 'react-redux';
import { DefaultStateInterface } from '../elements/elements';
import { IcurrencyProps } from '../interfaces/interfaces';

export const Currency = ({ title, currentCurrencyHandler }: IcurrencyProps) => {
    const currentCurrency = useSelector((state: DefaultStateInterface) => {
        return state.currentCurrency;
    });

    return (
        <button
            onClick={() => currentCurrencyHandler(title)}
            className={`valute valute-${title}  ${
                title === currentCurrency ? 'valute-current' : ''
            }`}
        >
            {title.toUpperCase()}
        </button>
    );
};
