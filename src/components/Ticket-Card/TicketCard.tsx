import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IconAirlines } from '../../assets/logo';
import { AirplaneIcon } from '../../assets/airplane';
import { DefaultStateInterface } from '../elements/elements';
import './TicketCard.css';
import { ItickedCardProps } from '../interfaces/interfaces';

export function TicketCard({ item }: ItickedCardProps) {
    const currentCurrency = useSelector(
        (state: DefaultStateInterface) => state.currentCurrency
    );
    function CurrencyHandler() {
        if (currentCurrency === 'rub') {
            return Number(item.price).toLocaleString('ru-RU') + '₽';
        } else if (currentCurrency === 'usd') {
            return (
                (Number(item.price) * 0.0101837).toLocaleString('ru-RU') + '$'
            );
        } else if (currentCurrency === 'eur') {
            return (
                (Number(item.price) * 0.0094987).toLocaleString('ru-RU') + '€'
            );
        }
    }
    return (
        <div className="ticket-card">
            <div className="ticket-card_wrapper">
                <div className="ticket-card-left">
                    <div className="ticket-card_poster">
                        <div className="ticket-card_icon">
                            <IconAirlines></IconAirlines>
                        </div>
                        <div className="ticket-card_rate">
                            <button className="ticket-card_details">
                                Купить <br />
                                за {CurrencyHandler()}
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ticket-card-right">
                    <div className="ticket-card_info">
                        <div className="departure">
                            <div className="departure_time">
                                {item.departure_time}
                            </div>
                            <div className="departure-code">
                                {item.origin},
                                <span className="origin_name">
                                    {item.origin_name}
                                </span>
                            </div>{' '}
                            <div className="departure_date">
                                {format(
                                    new Date(item.departure_date),
                                    'd  LLL y, EEEEEE',
                                    {
                                        locale: ru,
                                    }
                                )}
                            </div>
                        </div>
                        <div className="ticket-card-border">
                            <span className="transfers">
                                {item.stops === 0
                                    ? `${item.stops} ПЕРЕСАДОК`
                                    : `${item.stops} ПЕРЕСАДКИ`}{' '}
                            </span>
                            <div className="card-border">
                                <div className="airplane-icon">
                                    <AirplaneIcon></AirplaneIcon>
                                </div>
                            </div>
                        </div>
                        <div className="arrival">
                            <div className="arrival_time">
                                {item.arrival_time}
                            </div>
                            <div className="arrival-code">
                                {item.destination}{' '}
                                <span className="origin_name">
                                    {item.destination_name}
                                </span>
                            </div>

                            <div className="arrival_date">
                                {format(
                                    new Date(item.arrival_date),
                                    'd  LLL y, EEEEEE',
                                    {
                                        locale: ru,
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
