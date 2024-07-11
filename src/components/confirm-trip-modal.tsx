import { FormEvent } from 'react';

import { Button } from './button';

import { MailIcon, UserIcon, XIcon } from 'lucide-react';

type ConfirmTripModalProps = {
  closeConfirmModal: () => void;
  handleCreateTrip: (event: FormEvent<HTMLFormElement>) => void;
};

export function ConfirmTripModal({
  closeConfirmModal,
  handleCreateTrip,
}: ConfirmTripModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>
              Confirmar criação de viagem
            </h2>

            <button
              className='cursor-pointer text-zinc-400'
              onClick={closeConfirmModal}
              type='button'
            >
              <XIcon size={20} />
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para{' '}
            <span className='text-zinc-100 font-semibold'>Flor, Brasil</span>{' '}
            nas datas de{' '}
            <span className='text-zinc-100 font-semibold'>
              16 a 27 de Agosto de 2024
            </span>{' '}
            preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={handleCreateTrip}
          className='space-y-3'
        >
          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <UserIcon
              className='text-zinc-400'
              size={20}
            />

            <input
              type='text'
              name='name'
              placeholder='Seu nome completo'
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <MailIcon
              className='text-zinc-400'
              size={20}
            />

            <input
              type='email'
              name='email'
              placeholder='Seu e-mail pessoal'
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <Button
            type='submit'
            variant='primary'
            size='full'
          >
            Confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
