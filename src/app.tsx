import { FormEvent, useState } from 'react';

import { Button } from './components/button';
import { Separator } from './components/separator';

import {
  MapPinIcon,
  CalendarIcon,
  ArrowRightIcon,
  UserRoundPlusIcon,
  Settings2Icon,
  XIcon,
  AtSignIcon,
  PlusIcon,
  UserIcon,
  MailIcon,
} from 'lucide-react';
import logo from '/logo.svg';

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [emails, setEmails] = useState(['diego@rocketseat.com.br']);

  function showGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function hideGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function openConfirmModal() {
    setIsConfirmModalOpen(true);
  }

  function closeConfirmModal() {
    setIsConfirmModalOpen(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if (!email) return;

    const emailAlreadyExists = emails.includes(email);
    if (emailAlreadyExists) return alert('Este e-mail já foi criado!');

    setEmails(previous => [...previous, email]);

    event.currentTarget.reset();
  }

  function removeEmail(email: string) {
    const newEmails = emails.filter(item => item !== email);

    setEmails(newEmails);
  }

  return (
    <>
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
                  onClick={hideGuestsInput}
                  className='text-zinc-200 bg-zinc-800 hover:bg-zinc-800 hover:brightness-125 transition'
                >
                  Alterar local/data <Settings2Icon size={20} />
                </Button>
              ) : (
                <Button
                  onClick={showGuestsInput}
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

      {isModalOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
              onSubmit={handleSubmit}
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

              <Button type='submit'>
                Convidar <PlusIcon size={20} />
              </Button>
            </form>
          </div>
        </div>
      )}

      {isConfirmModalOpen && (
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
                <span className='text-zinc-100 font-semibold'>
                  Flor, Brasil
                </span>{' '}
                nas datas de{' '}
                <span className='text-zinc-100 font-semibold'>
                  16 a 27 de Agosto de 2024
                </span>{' '}
                preencha seus dados abaixo:
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
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
                className='w-full justify-center py-0 h-11'
              >
                Confirmar criação da viagem
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
