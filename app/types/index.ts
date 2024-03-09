export type CardType = {
  id: string;
  title: string;
};

export type CardListType = {
  id: number;
  title: string;
  done: boolean;
  description: string;
  cards: CardType[];
};

export type DashboardType = {
  id: number;
  name: string;
  cardLists: CardListType[];
};
