export function Button({ className, ...props }: any) {
  return (
    <button
      className="bg-zinc-900 font-semibold text-zinc-100 hover:bg-zinc-400 active:bg-black-800 active:text-zinc-100/70 rounded"
      {...props}
    />
  );
}
