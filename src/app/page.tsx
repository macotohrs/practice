import Image from "next/image";
import Link from "next/link";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-4xl">Next.js Practice</h1>
      </div>
      <Image src="/catonthePC.png" alt="catonthePC" width={300} height={100} />
      <div className="flex justify-center items-center space-x-4 mt-4">
        <Link href="/about" className="px-4 py-2">
          ABOUT
        </Link>
        <Link href="/users" className="px-4 py-2">
          USERS
        </Link>
        <Link href="/pokemon" className="px-4 py-2">
          POKEMON
        </Link>
        <Link href="/counter" className="px-4 py-2">
          COUNTER
        </Link>
        <Link href="/deffer" className="px-4 py-2">
          DEFFER
        </Link>
        <Link href="/account" className="px-4 py-2">
          (ACCOUNT)
        </Link>
        <Link href="/sales" className="px-4 py-2">
          (SALES)
        </Link>
      </div>
    </main>
  );
}
export default App;
