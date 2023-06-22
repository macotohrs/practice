"use client";
import { FC } from "react";
import { Suspense, useState, useTransition, startTransition } from "react";
import { atom, Provider, useAtom } from "jotai";
import Image from "next/image";
import {
  capturedPokemonAtom,
  multiplyCountAtom,
  counterAtom,
} from "../../jotai/atoms";

interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
}

interface PokemonName {
  english: string;
  japanese: string;
  chinese: string;
  french: string;
}

interface IPokemon {
  id: number;
  name: PokemonName;
  type: string[];
  base: BaseStats;
}

const URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

const filterAtom = atom("");

const pokemonAtom = atom(async (get) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data as IPokemon[];
});

export const filteredPokemonAtom = atom(async (get) =>
  (await get(pokemonAtom)).filter((p) =>
    p.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);

const FilterInput: FC = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // startTransitionの中で実行される処理は非同期になる
    startTransition(() => {
    setFilter(e.target.value);
    })
  };

  return (
    <input
      className="text-cyan-700 mr-9 p-2 w-full rounded-md mb-10"
      value={filter}
      onChange={handleChange}
    />
  );
};

function Controls() {
  const [, multiply] = useAtom(multiplyCountAtom);
  return (
    <button className="bg-blue-600 p-2 mr-3" onClick={() => multiply(3)}>
      BOOST EXP
    </button>
  );
}

const PokemonTable: FC = () => {
  const [pokemon] = useAtom(filteredPokemonAtom);
  // Write only atoms
  const [, capturePokemon] = useAtom(capturedPokemonAtom);
  const [, setCount] = useAtom(counterAtom);

  const handleCapture = (pokemon: IPokemon) => {
    // キャプチャしたポケモンをリストに追加する処理
    capturePokemon((capturedPokemon) => [
      ...capturedPokemon,
      pokemon.name.english,
    ]);
    setCount((pre) => pre + 1);
  };
  return (
    <table className="w-full bg-black text-white">
      <tbody className="h-40 overflow-y-auto">
        {pokemon.map((p, index) => (
          <tr key={index}>
            <td className="p-5">{p.id}</td>
            <td className="p-5">{p.name.english}</td>
            <td className="p-5">{p.type.join(", ")}</td>
            <td>
              <button onClick={() => handleCapture(p)}>Capture</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const CapturedPokemonList: FC = () => {
  const [capturedPokemon] = useAtom(capturedPokemonAtom);
  return (
    <div>
      <h2 className="text-2xl">Captured Pokemon:</h2>
      <ul>
        {capturedPokemon.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

const PokemonList: FC = () => {
  const [capturedPokemon] = useAtom(capturedPokemonAtom);
  const [isDecided, setDecided] = useState(false);
  const [count] = useAtom(counterAtom);
  return (
    <div className="flex">
      <div className="App mr-20">
        <h1 className="text-3xl mb-7">Capture Pokemon</h1>
        <FilterInput />
        <PokemonTable />
      </div>
      <div className="image-container">
        <Controls />
        <button
          className="bg-green-600 p-2 mb-3"
          onClick={() => {
            setDecided(true);
          }}
        >
          Explore
        </button>
        <CapturedPokemonList />
        {capturedPokemon.length > 0 && !isDecided && (
          <Image
            src="/ball_nageru_girl.png"
            alt="ball_nageru_girl"
            width={300}
            height={100}
          />
        )}
        {isDecided && (
          <Image
            src="/kotowaza_kawaiiko_tabi_girl.png"
            alt="kotowaza_kawaiiko_tabi_girl"
            width={300}
            height={100}
          />
        )}
        <div className="text-orange-400">EXP : {count}</div>
      </div>
    </div>
  );
};

const Pokemon: FC = () => (
  <Provider>
    <Suspense fallback={<div>Loading...</div>}>
      <PokemonList />
    </Suspense>
  </Provider>
);

export default Pokemon;
