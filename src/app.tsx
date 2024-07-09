import { useState } from 'react';

import { Button } from './components/button';
import { Separator } from './components/separator';

import {
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  UserRoundPlusIcon,
  Settings2Icon,
} from 'lucide-react';
import logo from '/logo.svg';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <header className='flex items-center flex-col gap-3'>
          <img
            src={logo}
            alt='plann.er logo'
          />

          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </header>

        <div className='space-y-4'>
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
                onClick={closeGuestsInput}
                className='text-zinc-200 bg-zinc-800 hover:bg-zinc-800 hover:brightness-125 transition'
              >
                Alterar local/data <Settings2Icon size={20} />
              </Button>
            ) : (
              <Button
                onClick={openGuestsInput}
                className='group'
              >
                Continuar{' '}
                <ArrowRightIcon
                  size={20}
                  className='group-hover:translate-x-1 transition-transform'
                />
              </Button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape'>
              <div className='flex items-center justify-between w-full'>
                <button
                  type='button'
                  onClick={openModal}
                  className='flex items-center gap-2 flex-1 text-left'
                >
                  <UserRoundPlusIcon
                    size={20}
                    className='text-zinc-400'
                  />

                  <span className='text-zinc-400 text-lg flex-1'>
                    Quem estará na viagem?
                  </span>
                </button>

                <div className='flex items-center gap-2'>
                  <Separator />

                  <Button className='group'>
                    Confirmar viagem{' '}
                    <ArrowRightIcon
                      size={20}
                      className='group-hover:translate-x-1 transition-transform'
                    />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <p className='text-sm text-zinc-500'>
          Ao planejar sua viagem pela plann.er você automaticamente concorda{' '}
          <br /> com nossos{' '}
          <a
            className='text-zinc-300 underline hover:text-zinc-400'
            href='#'
          >
            termos de uso
          </a>{' '}
          e{' '}
          <a
            className='text-zinc-300 underline hover:text-zinc-400'
            href='#'
          >
            políticas de privacidade
          </a>
        </p>
      </div>
    </div>
  );
}
