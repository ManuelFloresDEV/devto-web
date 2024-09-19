import clsx from "clsx";
import NavLink from "../asideNav/NavLink";
import { logout } from "@/utils/logout";
import { useRouter } from "next/router";

export default function CardMenuUser({ name, email }) {
  const router = useRouter();

  return (
    <section className="absolute list-none border-gray-300 border bg-white rounded-md top-20 w-64 p-2">
      <a
        className={clsx(
          "ps-2 py-1 leading-none	",
          "flex flex-col",
          "hover:rounded-lg  hover:bg-blue-300/25 hover:text-blue-700 hover:underline "
        )}
      >
        <span className="font-semibold">{name}</span>
        <span className="font-light">{email}</span>
      </a>
      <hr className="my-2 " />
      <NavLink name={"Dashboard"} />
      <NavLink href="/new" name={"Create Post"} />
      <NavLink name={"Reading List"} />
      <NavLink name={"Settings"} />
      <hr className="my-2 " />
      <NavLink onclick={() => logout(router)} name={"Sign Out"} />
    </section>
  );
}
