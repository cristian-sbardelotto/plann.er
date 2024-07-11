import { FormEvent } from 'react';

import { Button } from './button';
import { Separator } from './separator';

import { AtSignIcon, PlusIcon, XIcon } from 'lucide-react';

type InviteGuestsModalProps = {
  emails: string[];
  closeModal: () => void;
  addEmail: (event: FormEvent<HTMLFormElement>) => void;
  removeEmail: (email: string) => void;
};

export function InviteGuestsModal({
  emails,
  addEmail,
  closeModal,
  removeEmail,
}: InviteGuestsModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Selecionar convidados</h2>

            <button
              className='cursor-pointer text-zinc-400'
              onClick={closeModal}
              type='button'
            >
              <XIcon size={20} />
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className='flex flex-wrap gap-2'>
          {emails.length > 0 ? (
            emails.map(email => (
              <div
                key={email}
                className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'
              >
                <span className='text-zinc-300'>{email}</span>

                <button
                  type='button'
                  onClick={() => removeEmail(email)}
                >
                  <XIcon
                    size={20}
                    className='text-zinc-400'
                  />
                </button>
              </div>
            ))
          ) : (
            <p>Você ainda não convidou ninguém.</p>
          )}
        </div>

        <Separator orientation='horizontal' />

        <form
          onSubmit={addEmail}
          className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center'
        >
          <div className='flex items-center gap-2 px-2 flex-1'>
            <AtSignIcon
              className='text-zinc-400'
              size={20}
            />

            <input
              type='email'
              name='email'
              placeholder='Digite o e-mail do convidado'
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <Button
            variant='primary'
            type='submit'
          >
            Convidar <PlusIcon size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
