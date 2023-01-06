import { Lato } from "@next/font/google";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function Disclaimer() {
  return (
    <div className="py-10 dark:bg-black flex items-center grid-cols-3 grid-flow-col gap-4 divide-x">
      <div lang="en" className={roboto.className}>
        <div className="row-span-2 text-center text-2xl dark:text-gray-200">
          This AI is intented to just support you and does not provide
          professional help. A medical disclaimer declares that this site
          content is for informational purposes only, and should not be taken as
          professional medical advice.
        </div>
      </div>
    </div>
  );
}
