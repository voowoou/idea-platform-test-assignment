import tickets from '@/lib/tickets.json';
import { Ticket } from '@/lib/tickets';
import style from './TicketsList.module.sass';
import Image from 'next/image';

interface TicketsListProps {
  filter: {
    currency: string;
    stops: number[];
  };
}

export default function TicketsList({ filter }: TicketsListProps) {
  const USDPrice = 0.011; // 1 RUB в пересчете на USD
  const EURPrice = 0.01; // 1 RUB в пересчете на EUR

  const convertCurrency = (price: number, currency: string): string => {
    switch (currency) {
      case 'USD':
        return `${(price * USDPrice).toFixed(2)} $`;
      case 'EUR':
        return `${(price * EURPrice).toFixed(2)} €`;
      default:
        return `${price} ₽`;
    }
  };

  return (
    <section className={style.ticketsList}>
      {tickets.tickets
        .filter((ticket: Ticket) => {
          return filter.stops.length === 0 || filter.stops.includes(ticket.stops);
        })
        .map((ticket: Ticket) => (
          <div
            className={style.ticket}
            key={
              ticket.departure_date +
              ticket.departure_time +
              ticket.arrival_date +
              ticket.arrival_time
            }
          >
            <div className={style.priceAndCarrier}>
              <span>{ticket.carrier}</span>
              <button>
                Купить за <strong>{convertCurrency(ticket.price, filter.currency)}</strong>
              </button>
            </div>
            <div className={style.flightInfo}>
              <div className={style.timesInfo}>
                <span className={style.time}>{ticket.departure_time}</span>
                <div className={style.stopsContainer}>
                  <span className={style.stops}>
                    Пересадок: <strong>{ticket.stops}</strong>
                  </span>
                  <Image
                    src="/idea-platform-test-assignment/plane.svg"
                    alt="Plane icon"
                    width="130"
                    height="30"
                    priority
                  />
                </div>
                <span className={style.time}>{ticket.arrival_time}</span>
              </div>
              <div className={style.airportsInfo}>
                <span className={style.airport}>
                  {ticket.origin}, {ticket.origin_name}
                </span>
                <span className={style.airport}>
                  {ticket.destination}, {ticket.destination_name}
                </span>
              </div>
              <div className={style.datesInfo}>
                <span className={style.date}>{ticket.departure_date}</span>
                <span className={style.date}>{ticket.arrival_date}</span>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
