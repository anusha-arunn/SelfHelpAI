import Link from "next/link";
import Image from "next/image";
import { Merriweather_Sans } from "@next/font/google";

const roboto = Merriweather_Sans({
  weight: "400",
  subsets: ["latin"],
});

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen dark:bg-black">
        <nav className={roboto.className}>
          <div className="flex flex-row justify-center items-center gap-8 py-1 pt-10 text-l">
            <h1 className="flex-1">
              <Link
                href="/"
                className="text-center font-bold text-4xl hover:text-gray-500 duration-200 dark:text-gray-100 dark:hover:text-gray-600"
              >
                {`AI Therapist`}
              </Link>
            </h1>
            <Link
              href="/"
              className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
            >
              Home
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
            >
              Disclaimer
            </Link>
            <Link
              href="/alone"
              className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
            >
              Prevalance
            </Link>
            <Link
              href="/meditate"
              className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
            >
              Meditate
            </Link>
            <Link
              href="/connect"
              className="hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-600"
            >
              Connect
            </Link>
          </div>
        </nav>

        <main className="flex-grow py-7">{children}</main>

        <footer className="mt-5">
          <hr className="w-full pt-1 border-gray-300 border-1" />
          <div className="flex flex-row justify-center items-center">
            <p className="text-sm text-gray-500">© 2023 Self help AI</p>
            <p className="text-gray-500 px-1 ">•</p>
            <p className="text-sm text-gray-500">Twitter</p>
            <p className="text-gray-500 px-1 ">•</p>
            <p className="text-sm text-gray-500">Instagram</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
