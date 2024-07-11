import { Button } from '../../components/button';
import { Separator } from '../../components/separator';

import {
  CircleCheckIcon,
  CircleDashedIcon,
  Link2Icon,
  MapPinIcon,
  PlusIcon,
  Settings2Icon,
  UserCogIcon,
} from 'lucide-react';

export function TripDetailsPage() {
  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <div className='px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between'>
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
      </div>

      <main className='flex gap-16 px-4'>
        <div className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Atividades</h2>

            <Button>
              <PlusIcon size={20} /> Cadastrar atividade
            </Button>
          </div>

          <div className='space-y-8'>
            <div className='space-y-2.5'>
              <div className='flex gap-2 items-baseline'>
                <span className='text-xl text-zinc-300 font-semibold'>
                  Dia 17
                </span>
                <span className='text-xs text-zinc-500'>Sábado</span>
              </div>

              <p className='text-zinc-500 text-sm'>
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>

            <div className='space-y-2.5'>
              <div className='flex gap-2 items-baseline'>
                <span className='text-xl text-zinc-300 font-semibold'>
                  Dia 18
                </span>
                <span className='text-xs text-zinc-500'>Domingo</span>
              </div>

              <div className='space-y-2 5'>
                <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                  <CircleCheckIcon
                    size={20}
                    className='text-lime-300'
                  />

                  <span className='text-zinc-100'>Academia em grupo</span>
                  <span className='text-zinc-400 ml-auto text-sm'>08:00h</span>
                </div>
              </div>
              <div className='space-y-2 5'>
                <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                  <CircleCheckIcon
                    size={20}
                    className='text-lime-300'
                  />

                  <span className='text-zinc-100'>Academia em grupo</span>
                  <span className='text-zinc-400 ml-auto text-sm'>08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-80 space-y-6'>
          <div className='space-y-6'>
            <h2 className='font-semibold text-xl'>Links importantes</h2>

            <div className='space-y-5'>
              <div className='flex items-center justify-between gap-4'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>
                    Reserva do AirBnB
                  </span>
                  <a
                    href='https://www.airbnb.com.br/rooms/1230921389123810923890123803912'
                    target='_blank'
                    className='block text-sm text-zinc-400 truncate underline-offset-4 hover:underline'
                  >
                    https://www.airbnb.com.br/rooms/1230921389123810923890123803912
                  </a>
                </div>

                <Link2Icon
                  size={20}
                  className='text-zinc-400 shrink-0'
                />
              </div>

              <div className='flex items-center justify-between gap-4'>
                <div className='space-y-1.5'>
                  <span className='block font-medium text-zinc-100'>
                    Reserva do AirBnB
                  </span>
                  <a
                    href='https://www.airbnb.com.br/rooms/1230921389123810923890123803912'
                    target='_blank'
                    className='block text-sm text-zinc-400 truncate underline-offset-4 hover:underline'
                  >
                    https://www.airbnb.com.br/rooms/1230921389123810923890123803912
                  </a>
                </div>

                <Link2Icon
                  size={20}
                  className='text-zinc-400 shrink-0'
                />
              </div>
            </div>

            <Button className='text-zinc-200 bg-zinc-800 hover:bg-zinc-800 hover:brightness-125 transition w-full justify-center py-0 h-11'>
              <PlusIcon size={20} /> Cadastrar novo link
            </Button>
          </div>

          <Separator orientation='horizontal' />

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
        </div>
      </main>
    </div>
  );
}
