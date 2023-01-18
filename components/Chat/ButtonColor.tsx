import Link from "next/link";
export function ButtonColor({ className, ...props }: any) {
  return (
    <Link href="/chatAI">
      <button className="relative overflow-hidden rounded-lg bg-white px-20 py-6 ring-red-500/50 ring-offset-black will-change-transform focus:outline-none focus:ring-1 focus:ring-offset-2">
        <span className="absolute inset-px z-10 grid place-items-center rounded-lg text-black bg-gradient-to-tl from-blue-100 via-color2 to-cyan-100 hover:bg-gradient-to-br">
          Chat with AI now
        </span>
        <span
          aria-hidden
          className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-cyan-300 before:via-pink-400 before:to-amber-400"
        />
      </button>
    </Link>
  );
}
