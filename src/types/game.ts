export type IGame = {
  id: string;
  name: string;
  image: string;
  categories: string[]
}

export type JackPot = {
  game: string;
  amount: number;
}