import clsx from "clsx";
import SvgSearch from "@/svg/SvgSerch";
import SvgMenu from "@/svg/SvgMenu";
import SvgAlgolia from "@/svg/SvgAlgolia";

import CreateAccount from "./CreateAccount";
import UserMenu from "./UserMenu";
import { useGetUser } from "@/hooks";
import Link from "next/link";

export default function NavBar({ search, setSearch }) {
  const { user } = useGetUser();

  return (
    <nav className="bg-white text-black  col-span-full fixed h-14 w-screen">
      <div
        className={clsx(
          "grid gap-1 grid-cols-[0.4fr_1fr_0.3fr]",
          " md:grid-cols-[0.2fr_1.8fr_0.7fr]",
          "h-full px-3 max-w-screen-xl mx-auto"
        )}
      >
        <section className=" flex gap-2 items-center  ">
          <button className="md:hidden hover:bg-black/10 size-9 ">
            <SvgMenu />
          </button>
          <Link href="/">
            <img
              className="size-11"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </Link>
        </section>
        <form className=" my-auto   max-w-2xl">
          <label htmlFor="" className="relative hidden md:flex h-full ">
            <button
              disabled
              className={clsx(
                "absolute left-1 top-1",
                "mx-auto h-9 w-7",
                "hover:bg-blue-300/25 "
              )}
            >
              <SvgSearch />
            </button>
            <input
              className={clsx(
                " border-slate-500 border  rounded-md",
                "h-10 w-full px-7"
              )}
              placeholder="Search..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              href=""
              className={clsx(
                "absolute right-4 top-1",
                "text-slate-500 text-sm pt-2 whitespace-nowrap",
                "flex"
              )}
            >
              Powered by
              <span className="size-4 my-auto mx-1 fill-slate-500 ">
                <SvgAlgolia />
              </span>
              Algolia
            </Link>
          </label>
          <button
            disabled
            className={clsx(
              "block ml-auto",
              "md:hidden size-9",
              "hover:bg-blue-300"
            )}
          >
            <SvgSearch />
          </button>
        </form>
        {user ? (
          <UserMenu pic={user.profilePic} name={user.name} />
        ) : (
          <CreateAccount />
        )}
      </div>
    </nav>
  );
}
