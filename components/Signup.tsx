export default function SignUp() {
  return (
    <>
      <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
          <div className="w-full">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900">
                Welcome back
              </h1>
              <p className="mt-2 text-gray-500">
                Sign in below to access your account
              </p>
            </div>
            <div className="mt-8">
              <form action="" noValidate className="group">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                    autoComplete="off"
                    required
                    pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  <span className="mt-2 hidden text-sm text-red-400">
                    Please enter a valid email address.{" "}
                  </span>
                </div>
                <div className="mb-6">
                  <div className="mb-2 flex justify-between">
                    <label htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </label>
                    <a
                      href="#!"
                      className="text-sm text-gray-400 hover:text-indigo-500 focus:text-indigo-500 focus:outline-none"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="peer w-full rounded-md border border-gray-300 px-3 py-2.5 placeholder-gray-300 shadow shadow-gray-100 focus:border-gray-500 focus:outline-none valid:[&:not(:placeholder-shown)]:border-green-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                    pattern=".{6,}"
                    required
                  />
                  <span className="mt-2 hidden text-sm text-red-400">
                    Password must be atleast six characters.{" "}
                  </span>
                </div>
                <div className="mb-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 px-3 py-4 text-white focus:bg-indigo-600 focus:outline-none group-invalid:pointer-events-none group-invalid:opacity-70"
                  >
                    Sign in
                  </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="#!"
                    className="font-semibold text-indigo-500 focus:text-indigo-500 focus:underline focus:outline-none"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
