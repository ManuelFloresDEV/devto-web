import clsx from "clsx";

export function Button({ text, className, variant = "login" }) {
  return (
    <button
      className={clsx(
        "rounded-md px-2 font-semibold whitespace-nowrap",
        className,
        {
          "hidden md:inline hover:bg-blue-300/25 hover:underline hover:text-blue-700 text-zinc-500":
            variant === "login",
          "border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-600 hover:underline":
            variant === "create",
        }
      )}
    >
      {text}
    </button>
  );
}
