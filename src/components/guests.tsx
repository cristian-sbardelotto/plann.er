import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button } from './button';
import { api } from '../lib/axios';

import { CheckCircle2Icon, CircleDashedIcon, UserCogIcon } from 'lucide-react';

type Participant = {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
};

export function Guests() {
  const { id } = useParams();

  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${id}/participants`)
      .then(response => setParticipants(response.data.participants));
  }, [id]);

  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>

      <div className='space-y-5'>
        {participants.length > 0 &&
          participants.map((participant, index) => (
            <div
              key={participant.id}
              className='flex items-center justify-between gap-4'
            >
              <div className='space-y-1.5'>
                <span className='block font-medium text-zinc-100'>
                  {participant.name ?? `Convidado ${index}`}
                </span>

                <span className='block text-sm text-zinc-400 truncate'>
                  {participant.email}
                </span>
              </div>

              {participant.is_confirmed ? (
                <CheckCircle2Icon
                  size={20}
                  className='text-green-400 shrink-0'
                />
              ) : (
                <CircleDashedIcon
                  size={20}
                  className='text-zinc-400 shrink-0'
                />
              )}
            </div>
          ))}
      </div>

      <Button
        variant='secondary'
        size='full'
      >
        <UserCogIcon size={20} /> Gerenciar convidados
      </Button>
    </div>
  );
}
