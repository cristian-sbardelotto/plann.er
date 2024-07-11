import { useState } from 'react';

import { Button } from '../button';
import { Separator } from '../separator';

import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

import {
  ArrowRightIcon,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
  XIcon,
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
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [eventDates, setEventDates] = useState<DateRange | undefined>();

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  function formatDates(from: Date, to: Date) {
    const formattedDate = format(from, "d' de 'LLL")
      .concat(' até ')
      .concat(format(to, "d' de 'LLL"));

    return formattedDate;
  }

  const displayedDate =
    eventDates && eventDates.from && eventDates.to
      ? formatDates(eventDates.from, eventDates.to)
      : null;

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

      <button
        disabled={isGuestsInputOpen}
        className={`flex items-center gap-2 text-left w-[240px] ${
          isGuestsInputOpen && 'cursor-not-allowed'
        }`}
        onClick={openDatePicker}
      >
        <CalendarIcon
          size={20}
          className='text-zinc-400'
        />
        <span className='text-lg text-zinc-400 w-40 flex-1'>
          {displayedDate || 'Quando?'}
        </span>
      </button>

      {isDatePickerOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <h2 className='text-lg font-semibold'>Selecione a data</h2>

                <button
                  className='cursor-pointer text-zinc-400'
                  onClick={closeDatePicker}
                  type='button'
                >
                  <XIcon size={20} />
                </button>
              </div>
            </div>

            <DayPicker
              selected={eventDates}
              onSelect={setEventDates}
              mode='range'
            />
          </div>
        </div>
      )}

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
