import { Button } from './button';

import { CalendarIcon, TagIcon, XIcon } from 'lucide-react';

type CreateActivityModalProps = {
  closeCreateActivityModal: () => void;
};

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] bg-zinc-900 rounded-xl py-5 px-6 space-y-5 shadow-shape'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>

            <button
              className='cursor-pointer text-zinc-400'
              onClick={closeCreateActivityModal}
              type='button'
            >
              <XIcon size={20} />
            </button>
          </div>

          <p className='text-sm text-zinc-400'>
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className='space-y-3'>
          <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <TagIcon
              className='text-zinc-400'
              size={20}
            />

            <input
              name='title'
              placeholder='Qual a atividade?'
              className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
            />
          </div>

          <div className='flex items-center gap-2'>
            <div className='h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <CalendarIcon
                className='text-zinc-400'
                size={20}
              />
              <input
                type='datetime-local'
                name='occurs_at'
                placeholder='Data e horário'
                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              />
            </div>
          </div>

          <Button
            className='w-full justify-center py-0 h-11'
            type='submit'
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
