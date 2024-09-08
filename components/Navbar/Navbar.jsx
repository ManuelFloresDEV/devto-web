import clsx from "clsx";
import SvgSearch from "@/svg/SvgSerch";
import SvgMenu from "@/svg/SvgMenu";
import SvgAlgolia from "@/svg/SvgAlgolia";
import { Button } from "../UI/Button";

export default function NavBar() {
  return (
    <>
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
          <a href="">
            <img
              className="size-11"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </a>
        </section>
        <form className=" my-auto   max-w-2xl">
          <label htmlFor="" className="relative hidden md:flex h-full ">
            <button
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
            />
            <a
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
            </a>
          </label>
          <button
            className={clsx(
              "block ml-auto",
              "md:hidden size-9",
              "hover:bg-blue-300"
            )}
          >
            <SvgSearch />
          </button>
        </form>
        <section
          className={clsx(
            "gap-2 flex justify-end",
            "md:justify-center",
            "lg:justify-end ",
            "mr-3 py-1"
          )}
        >
          <Button text={"Login"} />
          <Button text={"Create account"} variant={"create"} />
        </section>
      </div>
    </>
  );
}
