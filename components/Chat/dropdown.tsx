import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="px-2 py-4 bg-white/40 backdrop-blur-lg sm:px-4 shadow-xl shadow-blue-500/20 ">
      <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex-1 px-4 justify-start items-start text-3xl hover:text-gray-500 ease-in duration-200"
            >{`AI Therapist`}</Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 hover:text-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 px-5 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-2 md:flex md:space-x-4 md:space-y-0">
              <a href="/">
                <li className="text-gray-700 hover:bg-zinc-100/90 border-b border-gray-100 rounded-lg md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">
                  Home
                </li>
              </a>
              <a href="/chatAI">
                <li className="text-gray-700 hover:bg-zinc-100/90 border-b border-gray-100 rounded-lg md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">
                  AI-Therapist
                </li>
              </a>
              <a href="/alone">
                <li className="text-gray-700 hover:bg-zinc-100/90 border-b border-gray-100 rounded-lg md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">
                  Alone
                </li>
              </a>
              <a href="/disclaimer">
                <li className="text-gray-700 hover:bg-zinc-100/90 border-b border-gray-100 rounded-lg md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">
                  Disclaimer
                </li>
              </a>
              <a href="/contact">
                <li className="text-gray-700 hover:bg-zinc-100/90 border-b border-gray-100 rounded-lg md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-black md:p-0">
                  Contact Us
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
