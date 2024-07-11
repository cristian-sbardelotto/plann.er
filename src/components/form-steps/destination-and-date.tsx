import { Button } from '../button';
import { Separator } from '../separator';

import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
} from 'lucide-react';

type DestinationAndDate = {
  isGuestsInputOpen: boolean;
  showGuestsInput: () => void;
  hideGuestsInput: () => void;
};

export function DestinationAndDate({
  isGuestsInputOpen,
  hideGuestsInput,
  showGuestsInput,
}: DestinationAndDate) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape'>
      <div className='flex items-center gap-2 flex-1'>
        <MapPinIcon
          size={20}
          className='text-zinc-400'
        />
        <input
          type='text'
          placeholder='Para onde você vai?'
          className={`bg-transparent text-lg placeholder-zinc-400 outline-none ${
            isGuestsInputOpen && 'cursor-not-allowed'
          }`}
          disabled={isGuestsInputOpen}
        />
      </div>

      <div className='flex items-center gap-2'>
        <CalendarIcon
          size={20}
          className='text-zinc-400'
        />
        <input
          type='text'
          placeholder='Quando?'
          className={`bg-transparent text-lg placeholder-zinc-400 outline-none w-40 ${
            isGuestsInputOpen && 'cursor-not-allowed'
          }`}
          disabled={isGuestsInputOpen}
        />
      </div>

      <Separator />

      {isGuestsInputOpen ? (
        <Button
          onClick={hideGuestsInput}
          variant='secondary'
        >
          Alterar local/data <Settings2Icon size={20} />
        </Button>
      ) : (
        <Button
          onClick={showGuestsInput}
          className='group'
          variant='primary'
        >
          Continuar{' '}
          <ArrowRightIcon
            size={20}
            className='group-hover:translate-x-1 transition-transform'
          />
        </Button>
      )}
    </div>
  );
}
