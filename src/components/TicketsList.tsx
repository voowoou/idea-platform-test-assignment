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
                  <svg
                    width="6809"
                    height="634"
                    viewBox="0 0 6809 634"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6576.77 366.667L6408.33 633.333L6341.67 633.333L6425.87 366.667L6247.2 366.667L6191.67 466.667L6141.67 466.667L6175 316.667L6141.67 166.667L6191.67 166.667L6247.23 266.667L6425.9 266.667L6341.67 1.01189e-05L6408.33 1.3033e-05L6576.77 266.667L6758.33 266.667C6771.59 266.667 6784.31 271.935 6793.69 281.311C6803.07 290.688 6808.33 303.406 6808.33 316.667C6808.33 329.928 6803.07 342.645 6793.69 352.022C6784.31 361.399 6771.59 366.667 6758.33 366.667L6576.77 366.667Z"
                      fill="#909090"
                    />
                    <rect y="272" width="6000" height="90" fill="#909090" />
                  </svg>
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
