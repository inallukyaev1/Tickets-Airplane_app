export interface Itickets {
    origin: string;
    origin_name: string;
    destination: string;
    destination_name: string;
    departure_date: string;
    departure_time: string;
    arrival_date: string;
    arrival_time: string;
    carrier: string;
    stops: number;
    price: number;
}
export interface ItranfersProps {
    item: Itransfers;
}
export interface ItickedCardProps {
    item: Itickets;
    key: string;
}
export interface IcurrencyProps {
    currentCurrencyHandler: (title: string) => void;
    title: string;
}

export interface Itransfers {
    id: number;
    name: string;
    stops: number | string;
}
