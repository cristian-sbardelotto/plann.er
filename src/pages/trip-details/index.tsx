import { useState } from 'react';

import { Button } from '../../components/button';
import { Separator } from '../../components/separator';
import { CreateActivityModal } from '../../components/create-activity-modal';
import { ImportantLinks } from '../../components/important-links';
import { Guests } from '../../components/guests';
import { Activities } from '../../components/activities';
import { DestinationAndDateHeader } from '../../components/destination-and-date-header';

import { PlusIcon } from 'lucide-react';

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className='max-w-6xl px-6 py-10 mx-auto space-y-8'>
      <DestinationAndDateHeader />

      <main className='flex gap-16 px-4'>
        <div className='flex-1 space-y-6'>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl font-semibold'>Atividades</h2>

            <Button onClick={openCreateActivityModal}>
              <PlusIcon size={20} /> Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>

        <div className='w-80 space-y-6'>
          <ImportantLinks />

          <Separator orientation='horizontal' />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
