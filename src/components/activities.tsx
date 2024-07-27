import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { api } from '../lib/axios';

import { CircleCheckIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type Activity = {
  date: string;
  activities: Array<{
    id: string;
    title: string;
    occurs_at: string;
  }>;
};

export function Activities() {
  const { id } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${id}/activities`)
      .then(response => setActivities(response.data.activities));
  }, [id]);

  return (
    <div className='space-y-8'>
      {activities.map(category => (
        <div
          key={category.date}
          className='space-y-2.5'
        >
          <div className='flex gap-2 items-baseline'>
            <span className='text-xl text-zinc-300 font-semibold'>
              Dia {format(category.date, 'd')}
            </span>
            <span className='text-xs text-zinc-500'>
              {format(category.date, 'EEEE', { locale: ptBR })}
            </span>
          </div>

          {category.activities.length > 0 ? (
            <div>
              {category.activities.map(activity => (
                <div
                  key={activity.id}
                  className='space-y-2.5'
                >
                  <div className='px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3'>
                    <CircleCheckIcon
                      size={20}
                      className='text-lime-300'
                    />

                    <span className='text-zinc-100'>{activity.title}</span>
                    <span className='text-zinc-400 ml-auto text-sm'>
                      {format(activity.occurs_at, 'HH:mm')}h
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='text-zinc-500 text-sm'>
              Nenhuma atividade cadastrada nessa data.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
