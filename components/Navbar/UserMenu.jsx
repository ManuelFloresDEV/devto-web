import clsx from "clsx";
import { Button } from "@/components/UI/Button";
import Notification from "@/svg/Notificacton";
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import CardMenuUser from "./CardMenuUser";

export default function UserMenu({ pic, name, email }) {
  const [watchMenu, setWatchMenu] = useState(false);

  const size = useWindowSize();

  return (
    <section
      className={clsx(
        "gap-4 flex justify-end",
        "md:justify-center",
        "lg:justify-end ",
        "mr-3 py-2"
      )}
    >
      {size.width > 767 && (
        <Button href="/new" text={"Create Post"} variant={"create"} />
      )}
      <span className="my-auto">
        <Notification />
      </span>
      <button
        onClick={() => setWatchMenu(!watchMenu)}
        className=" min-w-10  my-auto rounded-full"
      >
        <img className="rounded-full size-10" src={pic} alt={name} />
      </button>
      {watchMenu && <CardMenuUser name={name} email={email} />}
    </section>
  );
}
