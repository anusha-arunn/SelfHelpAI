import { Lato } from "@next/font/google";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function connect() {
  return (
    <div className="py-10 dark:bg-black flex items-center grid-cols-3 grid-flow-col gap-4 divide-x">
      <div lang="en" className={roboto.className}>
        <div className="row-span-2 text-left text-xl dark:text-gray-200">
          Coming up!
        </div>
      </div>
    </div>
  );
}
