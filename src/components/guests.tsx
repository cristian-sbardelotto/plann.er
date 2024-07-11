import { Button } from './button';

import { CircleDashedIcon, UserCogIcon } from 'lucide-react';

export function Guests() {
  return (
    <div className='space-y-6'>
      <h2 className='font-semibold text-xl'>Convidados</h2>

      <div className='space-y-5'>
        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>
              Jessica White
            </span>
            <span className='block text-sm text-zinc-400 truncate'>
              jessicawhite@gmail.com
            </span>
          </div>

          <CircleDashedIcon
            size={20}
            className='text-zinc-400 shrink-0'
          />
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div className='space-y-1.5'>
            <span className='block font-medium text-zinc-100'>
              Jessica White
            </span>
            <span className='block text-sm text-zinc-400 truncate'>
              jessicawhite@gmail.com
            </span>
          </div>

          <CircleDashedIcon
            size={20}
            className='text-zinc-400 shrink-0'
          />
        </div>
      </div>

      <Button className='text-zinc-200 bg-zinc-800 hover:bg-zinc-800 hover:brightness-125 transition w-full justify-center py-0 h-11'>
        <UserCogIcon size={20} /> Gerenciar convidados
      </Button>
    </div>
  );
}
