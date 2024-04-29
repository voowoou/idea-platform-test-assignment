'use client';

import TicketsList from '@/components/TicketsList';
import TicketFilter from '@/components/TicketsFilter';
import { useState } from 'react';

interface Filter {
  currency: string;
  stops: number[];
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>({ currency: 'RUB', stops: [] });
  const handleFilterChange = (newFilter: Filter): void => {
    setFilter(newFilter);
  };

  return (
    <main>
      <TicketFilter onFilterChange={handleFilterChange} />
      <TicketsList filter={filter} />
    </main>
  );
}
