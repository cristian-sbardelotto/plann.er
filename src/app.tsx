import { Separator } from './components/separator';

import { MapPinIcon, CalendarIcon, ArrowRightIcon } from 'lucide-react';
import logo from '/logo.svg';

export function App() {
  return (
    <div className='h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex items-center flex-col gap-3'>
          <img
            src={logo}
            alt='plann.er logo'
          />

          <p className='text-zinc-300 text-lg'>
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape'>
          <div className='flex items-center gap-2 flex-1'>
            <MapPinIcon
              size={20}
              className='text-zinc-400'
            />
            <input
              type='text'
              placeholder='Para onde você vai?'
              className='bg-transparent text-lg placeholder-zinc-400 outline-none'
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
              className='bg-transparent text-lg placeholder-zinc-400 outline-none w-40'
            />
          </div>

          <Separator />

          <button className='group flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-200'>
            Continuar{' '}
            <ArrowRightIcon
              size={20}
              className='group-hover:translate-x-1 transition-transform'
            />
          </button>
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
