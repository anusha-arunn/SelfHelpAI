import Link from "next/link";
interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen dark:bg-black">
        <div className="flex flex-col">
          <nav className="pt-10 text-center">
            <Link
              href="/"
              className="py-1 font-bold text-4xl hover:text-gray-500 duration-200 dark:text-gray-100 dark:hover:text-gray-600"
            >
              {`Self Help`}
            </Link>

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
            </div>
          </nav>

          <main className="flex-grow py-7">{children}</main>

          <footer className="mt-5">
            <hr className="w-full pt-1 border-gray-300 border-1" />
            <div className="py-5 text-xl text-center">
              <div className="text-sm text-gray-500">© 2023 Self help AI</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Layout;
