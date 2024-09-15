import { useSize } from "@/hooks";
import { useWindowSize } from "@uidotdev/usehooks";
import clsx from "clsx";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function NavNew() {
  const size = useWindowSize();
  const router = useRouter();

  return (
    <nav className=" text-black  col-span-full h-10 w-screen">
      <div
        className={clsx("h-max my-3", {
          "flex gap-3 w-screen px-2 ": size.width < 768,
          "max-w-screen-xl  mx-auto grid grid-cols-[1fr_0.5fr_0.8fr]":
            size.width > 768,
        })}
      >
        <section className=" flex">
          <Link className=" hidden md:inline " href="/">
            <img
              className="size-11"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </Link>
          <p className="whitespace-nowrap my-auto">Create Post</p>
        </section>
        <section className=" flex w-full gap-4 justify-end items-end p-1">
          <p>edit</p>
          <p>Preview</p>
        </section>
        <button
          onClick={() => {
            router.push("/");
          }}
          className=" text-3xl text-right"
        >
          x
        </button>
      </div>
    </nav>
  );
}
