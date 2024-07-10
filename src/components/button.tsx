import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex items-center gap-2 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium hover:bg-lime-400',
        className
      )}
      {...props}
    />
  );
}
