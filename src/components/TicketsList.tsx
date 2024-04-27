import tickets from '@/lib/tickets.json';
import { Ticket } from '@/lib/tickets';

export default function TicketsList() {
  return (
    <section>
      {tickets.tickets.map((ticket: Ticket) => (
        <div key={ticket.origin + ticket.destination}>
          <span>{ticket.price}</span>
        </div>
      ))}
    </section>
  );
}
