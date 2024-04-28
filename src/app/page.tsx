import TicketsList from '@/components/TicketsList';
import TicketFilter from '@/components/TicketsFilter';

export default function Home() {
  return (
    <main>
      <TicketFilter />
      <TicketsList />
    </main>
  );
}
