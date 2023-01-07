import Link from "next/link";
import Image from "next/image";
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen dark:bg-black">
        <div className="flex flex-col">
          <nav className="pt-10 text-center">
            <div className="flex flex-row justify-center items-center pb-5">
              <h1>
                <Link
                  href="/"
                  className="text-center font-bold text-4xl hover:text-gray-500 duration-200 dark:text-gray-100 dark:hover:text-gray-600"
                >
                  {`Self Help AI`}
                </Link>
              </h1>
            </div>
            <div className="flex flex-row justify-center gap-8 py-1 text-2xl">
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
      </div>
    </>
  );
};

export default Layout;
