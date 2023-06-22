import { atom } from "jotai";

export const counterAtom = atom(0);
export const testIncrement = atom(0);
export const testCountedPlates = atom<number[]>([]);
export const isMany = atom(false);
export const clicked = atom(false);

// 派生アトムを作成してみる
export const addingCountAtom = atom(
  (get) => get(counterAtom), // read関数ではそのままcountAtomの値を返す
  (get, set, num:number) => { // write関数では与えられた値を加算する
    // num : 呼び出し元の関数の引数に入れた数字が渡ってくる
    set(counterAtom, get(counterAtom) + num)
  }
)

