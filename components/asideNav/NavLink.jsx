import Link from "next/link";

export default function NavLink({ svg, name, href = "/", onclick }) {
  return (
    <>
      <li>
        <Link
          className=" whitespace-nowrap ps-2 flex items-center hover:rounded-lg gap-2 hover:bg-blue-300/25 hover:text-blue-700 hover:underline h-10"
          href={href}
          onClick={onclick}
        >
          {svg && <span className="size-6">{svg}</span>}
          <span>{name}</span>
        </Link>
      </li>
    </>
  );
}
