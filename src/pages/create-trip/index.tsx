import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { InviteGuestsModal } from '../../components/invite-guests-modal';
import { ConfirmTripModal } from '../../components/confirm-trip-modal';
import { DestinationAndDate } from '../../components/form-steps/destination-and-date';
import { InviteGuests } from '../../components/form-steps/invite-guests';

import logo from '/logo.svg';

export function CreateTripPage() {
  const navigate = useNavigate();

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const [emails, setEmails] = useState<string[]>([]);

  function showGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function hideGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmModal() {
    setIsConfirmModalOpen(true);
  }

  function closeConfirmModal() {
    setIsConfirmModalOpen(false);
  }

  function addEmail(event: FormEvent<HTMLFormElement>) {
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

  function handleCreateTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate('/trips/123');
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
            <DestinationAndDate
              isGuestsInputOpen={isGuestsInputOpen}
              showGuestsInput={showGuestsInput}
              hideGuestsInput={hideGuestsInput}
            />

            {isGuestsInputOpen && (
              <InviteGuests
                emails={emails}
                openGuestsModal={openGuestsModal}
                openConfirmModal={openConfirmModal}
              />
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
            .
          </p>
        </div>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emails={emails}
          addEmail={addEmail}
          closeModal={closeGuestsModal}
          removeEmail={removeEmail}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmTripModal
          closeConfirmModal={closeConfirmModal}
          handleCreateTrip={handleCreateTrip}
        />
      )}
    </>
  );
}
