import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 md:to-purple-400">
      <h1 className="text-2xl sm:text-4xl tracking-wide text-center pt-6 pb-10 sm:pb-12 justify-center font-light">
          Home page
      </h1>
      <div className="items-center justify-center font-light">
      <Link href='/login'>Logar</Link>
      </div>
    </div>
  );
}
