import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-start items-center m-10">
          <nav>
            <Link href="/" className="border-solid border-2 border-white p-6 ">
              Home
            </Link>
          </nav>
        </header>
        <div className="flex flex-col items-center">
          {children}
          <div>{team}</div>
          <div>{analytics}</div>
        </div>
      </body>
    </html>
  );
}
