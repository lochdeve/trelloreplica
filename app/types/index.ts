export type CardType = {
  id: number;
  title: string;
  done: boolean;
  description: string;
};

export type DashboardType = {
  id: number;
  name: string;
  cardLists: CardType[];
};
