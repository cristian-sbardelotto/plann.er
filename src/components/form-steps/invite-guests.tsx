import { Separator } from '../separator';
import { Button } from '../button';

import { ArrowRightIcon, UserRoundPlusIcon } from 'lucide-react';

type InviteGuestsProps = {
  emails: string[];
  openGuestsModal: () => void;
  openConfirmModal: () => void;
};

export function InviteGuests({
  emails,
  openGuestsModal,
  openConfirmModal,
}: InviteGuestsProps) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape'>
      <div className='flex items-center justify-between w-full'>
        <button
          type='button'
          onClick={openGuestsModal}
          className='flex items-center gap-2 flex-1 text-left'
        >
          <UserRoundPlusIcon
            size={20}
            className='text-zinc-400'
          />

          <span className='text-zinc-400 text-lg flex-1'>
            {emails.length > 0 ? (
              <span className='text-zinc-100 text-lg flex-1'>
                {emails.length} pessoa(s) convidadas
              </span>
            ) : (
              <span className='text-zinc-400 text-lg flex-1'>
                Quem estará na viagem?
              </span>
            )}
          </span>
        </button>

        <div className='flex items-center gap-2'>
          <Separator />

          <Button
            className='group'
            onClick={openConfirmModal}
          >
            Confirmar viagem{' '}
            <ArrowRightIcon
              size={20}
              className='group-hover:translate-x-1 transition-transform'
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
