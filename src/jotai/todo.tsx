import { atom } from "jotai";
// todo component 
export interface IData {
  id: number;
  name: string;
  isClicked?: boolean;
}

export interface IForm {
  [key: string]: string | Date;
}

export const MOVIE_LIST = [
  {
    id: 1,
    name: "title",
  },
  {
    id: 2,
    name: "detail",
  },
  {
    id: 3,
    name: "genre",
  },
  {
    id: 4,
    name: "actor",
  },
  {
    id: 5,
    name: "company",
  },
  {
    id: 6,
    name: "director",
  },
  {
    id: 7,
    name: "music",
  },
  {
    id: 8,
    name: "country",
  },
  {
    id: 9,
    name: "review",
  },
  {
    id: 10,
    name: "score",
  },
] as IData[];

export const data = atom(MOVIE_LIST);
export const submitList = atom<IForm | null>(null);
export const text = atom<IForm[]>([]);
export const todo = atom<IData[]>([]);

