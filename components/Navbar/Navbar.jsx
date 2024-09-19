import clsx from "clsx";
import SvgSearch from "@/svg/SvgSerch";
import SvgMenu from "@/svg/SvgMenu";
import SvgAlgolia from "@/svg/SvgAlgolia";

import CreateAccount from "./CreateAccount";
import UserMenu from "./UserMenu";
import { useGetUser } from "@/hooks";
import Link from "next/link";
import { useState } from "react";
import AsideNav from "../asideNav/AsideNav";

export default function NavBar({ search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  const { user } = useGetUser();

  return (
    <nav className="bg-white text-black z-10  col-span-full fixed h-14 w-screen">
      <div
        className={clsx(
          "grid gap-1 grid-cols-[0.4fr_1fr_0.3fr]",
          " md:grid-cols-[0.2fr_1.8fr_0.7fr]",
          "h-full px-3 max-w-screen-xl mx-auto"
        )}
      >
        <section className=" min-w-28 md:min-w-0 flex gap-2 items-center  ">
          <button
            onClick={toggleMenu}
            className="md:hidden hover:bg-black/10 size-9 "
          >
            <SvgMenu />
          </button>
          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/30"
              onClick={toggleMenu}
            ></div>
          )}
          <div
            className={clsx(
              "fixed top-0 left-0 transition-transform ",
              "h-full w-64 py-3 ps-3",
              "bg-white  shadow-lg",
              menuOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <span className=" flex justify-between items-center pr-2">
              <p className="text-lg font-semibold">DEV Community</p>
              <p onClick={toggleMenu} className="text-2xl font-semibold">
                x
              </p>
            </span>
            <AsideNav />
          </div>

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
          <UserMenu pic={user.profilePic} name={user.name} email={user.email} />
        ) : (
          <CreateAccount />
        )}
      </div>
    </nav>
  );
}
