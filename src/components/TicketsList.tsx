import tickets from '@/lib/tickets.json';
import { Ticket } from '@/lib/tickets';
import style from './TicketsList.module.sass';
import Image from 'next/image';

export default function TicketsList() {
  return (
    <section className={style.ticketsList}>
      {tickets.tickets.map((ticket: Ticket) => (
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
              Купить за <strong>{ticket.price}</strong> ₽
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
                  src="/line-plane.svg"
                  alt="Plane icon"
                  width="130"
                  height="30"
                  className={style.planeIcon}
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
