import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Separator } from './separator';
import { Button } from './button';
import { api } from '../lib/axios';

import { MapPinIcon, Settings2Icon } from 'lucide-react';
import { formatDates } from '../utils/date';

type Trip = {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
};

export function DestinationAndDateHeader() {
  const { id } = useParams();

  const [trip, setTrip] = useState<Trip | undefined>();

  useEffect(() => {
    api.get(`/trips/${id}`).then(response => setTrip(response.data.trip));
  }, [id]);

  const displayedDate = trip ? formatDates(trip.starts_at, trip.ends_at) : null;

  return (
    <header className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <MapPinIcon
          size={20}
          className='text-zinc-400'
        />
        <span className='text-zinc-100'>{trip?.destination}</span>
      </div>

      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2'>
          <MapPinIcon
            size={20}
            className='text-zinc-400'
          />
          <span className='text-zinc-100'>{displayedDate}</span>
        </div>

        <Separator />

        <Button variant='secondary'>
          Alterar local/data <Settings2Icon size={20} />
        </Button>
      </div>
    </header>
  );
}
