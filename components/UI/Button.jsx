import clsx from "clsx";
import Link from "next/link";

export function Button({ href = "/", text, className, variant = "login" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex justify-center items-center rounded-md px-2 font-semibold whitespace-nowrap",
        className,
        {
          "md:flex hover:bg-blue-300/25 hover:underline hover:text-blue-700 text-zinc-500":
            variant === "login",
          "border border-blue-700 text-blue-700 hover:text-white hover:bg-blue-600 hover:underline":
            variant === "create",
        }
      )}
    >
      {text}
    </Link>
  );
}
