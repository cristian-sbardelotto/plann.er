type Orientation = 'vertical' | 'horizontal';

type SeparatorProps = {
  orientation?: Orientation;
};

export function Separator({ orientation = 'vertical' }: SeparatorProps) {
  const orientationClassesMap: Record<Orientation, string> = {
    vertical: 'w-px h-6',
    horizontal: 'h-px w-full',
  };
  return (
    <div className={`${orientationClassesMap[orientation]} bg-zinc-800`} />
  );
}
