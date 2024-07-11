import { Button } from './button';

import { Link2Icon, PlusIcon } from 'lucide-react';

// type ImportantLinksProps = {
//   title: string;
//   href: string;
// };

export function ImportantLinks() {
  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Links importantes</h2>

      <div className='space-y-5'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>
              Reserva do AirBnB
            </span>
            <a
              href='https://www.airbnb.com.br/rooms/1230921389123810923890123803912'
              target='_blank'
              className='block text-sm text-zinc-400 truncate underline-offset-4 hover:underline'
            >
              https://www.airbnb.com.br/rooms/1230921389123810923890123803912
            </a>
          </div>

          <Link2Icon
            size={20}
            className='text-zinc-400 shrink-0'
          />
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>
              Reserva do AirBnB
            </span>
            <a
              href='https://www.airbnb.com.br/rooms/1230921389123810923890123803912'
              target='_blank'
              className='block text-sm text-zinc-400 truncate underline-offset-4 hover:underline'
            >
              https://www.airbnb.com.br/rooms/1230921389123810923890123803912
            </a>
          </div>

          <Link2Icon
            size={20}
            className='text-zinc-400 shrink-0'
          />
        </div>
      </div>

      <Button
        variant='secondary'
        size='full'
      >
        <PlusIcon size={20} /> Cadastrar novo link
      </Button>
    </div>
  );
}
