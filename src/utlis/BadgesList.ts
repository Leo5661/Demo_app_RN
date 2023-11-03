export type BadgesList = {
  id: number;
  title: string;
  details: string;
  count: number | undefined;
};

export const BadgesList: BadgesList[] = [
  {
    id: 1,
    title: 'First Stripe Earned',
    details: 'Top 10% of highest spending players in a month',
    count: 3,
  },
  {
    id: 2,
    title: 'Born Winner',
    details: 'Top 10% of highest spending players in a month',
    count: undefined,
  },
  {
    id: 3,
    title: 'Trader of the Month',
    details: 'Won 7 under-over games in a row',
    count: undefined,
  },
  {
    id: 4,
    title: 'Rising Star',
    details: 'Top 10% of highest spending players in a month',
    count: undefined,
  },
  {
    id: 5,
    title: 'Jackpot',
    details: 'Top 10% of highest spending players in a month',
    count: undefined,
  },
  {
    id: 6,
    title: 'Impossible',
    details: 'Top 10% of highest spending players in a month',
    count: undefined,
  },
];
