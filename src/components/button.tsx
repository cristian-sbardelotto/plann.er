import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';
import { tv, VariantProps } from 'tailwind-variants';

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

const buttonVariants = tv({
  base: 'flex items-center justify-center gap-2 rounded-lg px-5 py-2 font-medium',
  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
});

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
