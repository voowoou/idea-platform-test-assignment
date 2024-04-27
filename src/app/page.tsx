import Image from 'next/image';
import styles from './page.module.css';
import TicketsList from '@/components/TicketsList';

export default function Home() {
  return (
    <main>
      <aside></aside>
      <TicketsList />
    </main>
  );
}
