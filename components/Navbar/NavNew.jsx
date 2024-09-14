import clsx from "clsx";
import Link from "next/link";

export default function navNew() {
  return (
    <nav className=" text-black  col-span-full h-10 w-screen">
      <div
        className={clsx(
          "grid gap-1 grid-cols-[0.1fr_1fr]",
          " md:grid-cols-[0.2fr_1.8fr_0.7fr]",
          "h-full px-3 max-w-screen-xl mx-auto"
        )}
      >
        <section className=" hidden md:inline ">
          <Link href="/">
            <img
              className="size-11"
              src="https://media.dev.to/cdn-cgi/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt=""
            />
          </Link>
        </section>
        <p className="whitespace-nowrap my-auto">Create Post</p>
        <section className="flex gap-4 justify-end items-end p-1">
          <p>edit</p>
          <p>Preview</p>
          <p className="text-3xl">x</p>
        </section>
      </div>
    </nav>
  );
}
