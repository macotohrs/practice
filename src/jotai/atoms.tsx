import { atom } from "jotai";

export const counterAtom = atom(0);
export const testIncrement = atom(0);
export const testCountedPlates = atom<number[]>([]);
export const isMany = atom(false);
