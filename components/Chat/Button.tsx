import clsx from "clsx";

export function Button({ className, ...props }: any) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-opacity",
        "bg-zinc-900 font-light text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 hover:scale-110 ease-in duration-200",
        className
      )}
      {...props}
    />
  );
}
