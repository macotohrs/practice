import Image from "next/image";
import Link from "next/link";
import Light from "./stories/Light";
import { TrafficLight } from "./stories/Light.stories"; 

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-4xl">Next.js Practice</h1>
      </div>
      <TrafficLight />
      <Image src="/catonthePC.png" alt="catonthePC" width={300} height={100} />
      <div className="flex justify-center items-center space-x-4 mt-4">
        <Link href="/about" className="link">
          ABOUT
        </Link>
        <Link href="/users" className="link">
          USERS
        </Link>
        <Link href="/pokemon" className="link">
          POKEMON
        </Link>
        <Link href="/counter" className="link">
          COUNTER
        </Link>
        <Link href="/deffer" className="link">
          DEFFER
        </Link>
        <Link href="/account" className="link">
          (ACCOUNT)
        </Link>
        <Link href="/sales" className="link">
          (SALES)
        </Link>
        <Link href="/todo" className="link">
          TO DO
        </Link>
      </div>
    </main>
  );
}
export default App;
