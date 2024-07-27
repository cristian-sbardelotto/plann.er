import { format } from 'date-fns';

export function formatDates(
  from: string | number | Date,
  to: string | number | Date
) {
  const formattedDate = format(from, "d' de 'LLL")
    .concat(' até ')
    .concat(format(to, "d' de 'LLL"));

  return formattedDate;
}
