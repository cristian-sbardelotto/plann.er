import { Separator } from './separator';
import { Button } from './button';

import { MapPinIcon, Settings2Icon } from 'lucide-react';

export function DestinationAndDateHeader() {
  return (
    <header className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <MapPinIcon
          size={20}
          className='text-zinc-400'
        />
        <span className='text-zinc-100'>Flor, Brasil</span>
      </div>

      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-2'>
          <MapPinIcon
            size={20}
            className='text-zinc-400'
          />
          <span className='text-zinc-100'>17 a 23 de Agosto</span>
        </div>

        <Separator />

        <Button className='text-zinc-200 bg-zinc-800 hover:bg-zinc-800 hover:brightness-125 transition'>
          Alterar local/data <Settings2Icon size={20} />
        </Button>
      </div>
    </header>
  );
}
