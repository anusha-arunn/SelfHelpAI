import { Lato } from "@next/font/google";
import { Chat } from "../components/Chat";

const roboto = Lato({
  weight: "300",
  subsets: ["latin"],
});

export default function connect() {
  return (
    <div className="py-10 dark:bg-black flex justify-center items-center">
      <div lang="en" className={roboto.className}>
        <div className="text-justify text-xl dark:text-gray-200">
          Coming up!
        </div>
      </div>
    </div>
  );
}
//<Chat />
