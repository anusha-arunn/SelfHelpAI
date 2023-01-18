import { Lato } from "@next/font/google";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function connect() {
  return (
    <div className="py-10 flex justify-center items-center">
      <div lang="en" className={roboto.className}>
        <div className="text-justify text-xl">Coming up!</div>
      </div>
    </div>
  );
}
//<Chat />
